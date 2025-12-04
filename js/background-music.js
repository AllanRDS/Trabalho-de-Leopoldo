// Sistema de Música de Fundo Global - Persistente entre páginas

class GlobalMusicPlayer {
    constructor() {
        this.audio = null;
        this.isInitialized = false;
        this.storageKey = 'bgMusicState';
        this.audioDataKey = 'bgMusicData';
        this.init();
    }

    init() {
        // Criar ou recuperar elemento de áudio global
        if (!window.top.globalAudioElement) {
            window.top.globalAudioElement = new Audio();
            window.top.globalAudioElement.loop = true;
            window.top.globalAudioElement.volume = 0.4;
        }
        this.audio = window.top.globalAudioElement;

        // Verificar se deve tocar ao carregar a página
        const state = this.getState();
        if (state.isPlaying) {
            if (!this.audio.src) {
                // Tentar recuperar URL do áudio do sessionStorage
                const savedUrl = sessionStorage.getItem(this.audioDataKey);
                if (savedUrl) {
                    this.audio.src = savedUrl;
                    this.audio.play().catch(err => {
                        console.log('Autoplay bloqueado, gerando novo áudio:', err);
                        this.generateAndPlay();
                    });
                } else {
                    // Gerar novo áudio
                    this.generateAndPlay();
                }
            } else if (this.audio.paused) {
                // Se tem src mas está pausado, retomar
                this.audio.play().catch(err => console.log('Autoplay bloqueado:', err));
            }
        }

        this.isInitialized = true;
        this.updateUI();
    }

    getState() {
        try {
            const state = localStorage.getItem(this.storageKey);
            return state ? JSON.parse(state) : { isPlaying: false };
        } catch {
            return { isPlaying: false };
        }
    }

    setState(isPlaying) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify({ isPlaying }));
        } catch (err) {
            console.error('Erro ao salvar estado:', err);
        }
    }

    async generateAndPlay() {
        try {
            // Parsear e reproduzir MIDI usando Web MIDI API synthesis
            const response = await fetch('assets/audio/loop_continuo.mid');
            const arrayBuffer = await response.arrayBuffer();
            const midiData = this.parseMIDI(arrayBuffer);
            
            // Sintetizar áudio a partir das notas MIDI
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const audioBuffer = await this.synthesizeMIDI(audioContext, midiData);
            
            // Converter para blob
            const wavData = this.encodeWAV(audioBuffer);
            const blob = new Blob([wavData], { type: 'audio/wav' });
            const url = URL.createObjectURL(blob);
            
            this.audio.src = url;
            this.audio.loop = true; // Garantir loop
            
            // Salvar URL no sessionStorage
            try {
                sessionStorage.setItem(this.audioDataKey, url);
            } catch (e) {
                console.log('Não foi possível salvar URL:', e);
            }

            await this.audio.play();
            this.setState(true);
            this.updateUI();

            return true;
        } catch (error) {
            console.error('Erro ao reproduzir MIDI:', error);
            return false;
        }
    }

    parseMIDI(arrayBuffer) {
        // Parser MIDI básico - extrai notas
        const view = new DataView(arrayBuffer);
        const notes = [];
        let tempo = 500000; // 120 BPM default
        
        // Procurar por eventos de nota (0x90 = note on, 0x80 = note off)
        for (let i = 0; i < view.byteLength - 3; i++) {
            const status = view.getUint8(i);
            
            if ((status & 0xF0) === 0x90) { // Note On
                const note = view.getUint8(i + 1);
                const velocity = view.getUint8(i + 2);
                if (velocity > 0) {
                    notes.push({
                        note: note,
                        velocity: velocity,
                        time: i * 0.01, // Tempo aproximado
                        duration: 0.5
                    });
                }
            }
        }
        
        return { notes, tempo };
    }

    async synthesizeMIDI(audioContext, midiData) {
        const duration = 15; // 15 segundos
        const sampleRate = audioContext.sampleRate;
        const audioBuffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
        const channelData = audioBuffer.getChannelData(0);
        
        // Sintetizar cada nota
        midiData.notes.forEach(noteData => {
            const freq = 440 * Math.pow(2, (noteData.note - 69) / 12); // A4 = 440Hz
            const startSample = Math.floor(noteData.time * sampleRate);
            const durationSamples = Math.floor(noteData.duration * sampleRate);
            const velocity = noteData.velocity / 127;
            
            for (let i = 0; i < durationSamples && startSample + i < channelData.length; i++) {
                const t = i / sampleRate;
                const envelope = Math.exp(-3 * t / noteData.duration); // Decay exponencial
                channelData[startSample + i] += Math.sin(2 * Math.PI * freq * t) * envelope * velocity * 0.3;
            }
        });
        
        return audioBuffer;
    }

    async toggle() {
        if (!this.audio.src) {
            // Primeira vez, gerar música
            return await this.generateAndPlay();
        } else if (this.audio.paused) {
            // Retomar
            await this.audio.play();
            this.setState(true);
            this.updateUI();
        } else {
            // Pausar
            this.audio.pause();
            this.setState(false);
            sessionStorage.removeItem(this.audioDataKey);
            this.updateUI();
        }
    }

    isCurrentlyPlaying() {
        return this.audio && !this.audio.paused && this.audio.src;
    }

    updateUI() {
        const btn = document.getElementById('bgMusicBtn');
        const icon = document.getElementById('musicIcon');
        const text = document.getElementById('musicText');
        const status = document.getElementById('musicStatus');

        if (!btn) return;

        const isPlaying = this.audio && !this.audio.paused && this.audio.src;

        if (isPlaying) {
            icon.textContent = '⏸';
            text.textContent = 'Pausar Música';
            btn.style.background = 'rgba(255,255,255,0.3)';
            if (status) status.textContent = '♪ Tocando MIDI';
            btn.style.display = 'inline-flex';
        } else {
            icon.textContent = '▶';
            text.textContent = 'Tocar Música Ambiente';
            btn.style.background = 'rgba(255,255,255,0.2)';
            if (status) status.textContent = '';
            // Na página inicial sempre mostra, nas outras só se estiver tocando
            if (window.location.pathname.includes('/pages/')) {
                btn.style.display = 'none';
            } else {
                btn.style.display = 'inline-flex';
            }
        }
    }

    encodeWAV(audioBuffer) {
        const numChannels = audioBuffer.numberOfChannels;
        const sampleRate = audioBuffer.sampleRate;
        const format = 1;
        const bitDepth = 16;
        const bytesPerSample = bitDepth / 8;
        const blockAlign = numChannels * bytesPerSample;
        const data = audioBuffer.getChannelData(0);
        const dataLength = data.length * bytesPerSample;
        const buffer = new ArrayBuffer(44 + dataLength);
        const view = new DataView(buffer);

        const writeString = (view, offset, string) => {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        };

        writeString(view, 0, 'RIFF');
        view.setUint32(4, 36 + dataLength, true);
        writeString(view, 8, 'WAVE');
        writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, format, true);
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * blockAlign, true);
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, bitDepth, true);
        writeString(view, 36, 'data');
        view.setUint32(40, dataLength, true);

        let offset = 44;
        for (let i = 0; i < data.length; i++) {
            const sample = Math.max(-1, Math.min(1, data[i]));
            view.setInt16(offset, sample * 0x7FFF, true);
            offset += 2;
        }

        return buffer;
    }
}

// Instância global
window.musicPlayer = window.musicPlayer || new GlobalMusicPlayer();

// Função chamada pelos botões
async function playBackgroundMusic() {
    await window.musicPlayer.toggle();
}

// Atualizar UI quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    if (window.musicPlayer) {
        window.musicPlayer.updateUI();
    }
});
