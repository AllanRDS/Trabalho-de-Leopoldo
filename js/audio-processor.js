// ===== ÁUDIO =====
let audioContext;
let audioBuffer;
let processedAudioBuffer;
let sourceNode;
let gainNode;
let currentGain = 1.0;

// Inicializar Audio Context
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Carregar arquivo de áudio
document.addEventListener('DOMContentLoaded', function() {
    const audioFileInput = document.getElementById('audioFile');
    if (audioFileInput) {
        audioFileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;

            document.getElementById('fileName').textContent = `📄 Arquivo: ${file.name}`;

            initAudioContext();

            // Criar URL para o áudio original diretamente do arquivo
            const url = URL.createObjectURL(file);
            const originalAudioElement = document.getElementById('originalAudio');
            originalAudioElement.src = url;
            originalAudioElement.load();

            const reader = new FileReader();
            reader.onload = function(event) {
                audioContext.decodeAudioData(event.target.result, function(buffer) {
                    audioBuffer = buffer;
                    processedAudioBuffer = null;

                    // Habilitar botões
                    document.getElementById('playOriginalBtn').disabled = false;
                    document.getElementById('normalizeBtn').disabled = false;
                    document.getElementById('applyEffectBtn').disabled = false;
                    document.getElementById('resetBtn').disabled = false;

                    // Mostrar informações do áudio
                    displayAudioInfo(buffer);

                    // Desenhar forma de onda original
                    drawWaveform(buffer);

                    // Limpar forma de onda processada
                    drawProcessedWaveform(null);

                    // Mostrar informações originais
                    updateOriginalInfo(buffer);
                }, function(error) {
                    alert('Erro ao decodificar áudio: ' + error);
                });
            };
            reader.readAsArrayBuffer(file);
        });
    }
});

// Exibir informações do áudio
function displayAudioInfo(buffer) {
    const duration = buffer.duration.toFixed(2);
    const sampleRate = buffer.sampleRate;
    const channels = buffer.numberOfChannels;
    const length = buffer.length;

    const infoHTML = `
        <div class="audio-stat">
            <div class="audio-stat-value">${sampleRate}</div>
            <div class="audio-stat-label">Hz</div>
            <div class="audio-stat-label">Taxa de Amostragem</div>
        </div>
        <div class="audio-stat">
            <div class="audio-stat-value">${channels}</div>
            <div class="audio-stat-label">${channels === 1 ? 'Mono' : 'Estéreo'}</div>
            <div class="audio-stat-label">Canais</div>
        </div>
        <div class="audio-stat">
            <div class="audio-stat-value">${duration}</div>
            <div class="audio-stat-label">segundos</div>
            <div class="audio-stat-label">Duração</div>
        </div>
        <div class="audio-stat">
            <div class="audio-stat-value">${length.toLocaleString()}</div>
            <div class="audio-stat-label">amostras</div>
            <div class="audio-stat-label">Total de Amostras</div>
        </div>
    `;

    document.getElementById('audioInfo').innerHTML = infoHTML;
}

// Desenhar forma de onda
function drawWaveform(buffer) {
    const canvas = document.getElementById('waveformCanvas');
    const ctx = canvas.getContext('2d');

    // Ajustar tamanho do canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = 200;

    // Limpar canvas
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Obter dados do canal
    const data = buffer.getChannelData(0);
    const step = Math.ceil(data.length / canvas.width);
    const amp = canvas.height / 2;

    // Desenhar grade
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
        const y = (canvas.height / 4) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Desenhar linha central
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, amp);
    ctx.lineTo(canvas.width, amp);
    ctx.stroke();

    // Desenhar forma de onda (azul para original)
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let i = 0; i < canvas.width; i++) {
        let min = 1.0;
        let max = -1.0;

        for (let j = 0; j < step; j++) {
            const datum = data[(i * step) + j];
            if (datum < min) min = datum;
            if (datum > max) max = datum;
        }

        const yMin = (1 + min) * amp;
        const yMax = (1 + max) * amp;

        if (i === 0) {
            ctx.moveTo(i, yMin);
        } else {
            ctx.lineTo(i, yMin);
        }
        ctx.lineTo(i, yMax);
    }

    ctx.stroke();
}

// Desenhar forma de onda processada
function drawProcessedWaveform(buffer) {
    const canvas = document.getElementById('processedWaveformCanvas');
    const ctx = canvas.getContext('2d');

    // Ajustar tamanho do canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = 200;

    // Limpar canvas
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!buffer) {
        // Se não há buffer processado, mostrar mensagem
        ctx.fillStyle = '#999';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Aguardando processamento...', canvas.width / 2, canvas.height / 2);
        // Esconder aviso de clipping
        document.getElementById('clippingWarning').style.display = 'none';
        return;
    }

    // Obter dados do canal
    const data = buffer.getChannelData(0);
    const step = Math.ceil(data.length / canvas.width);
    const amp = canvas.height / 2;

    // Desenhar grade
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
        const y = (canvas.height / 4) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Desenhar linha central
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, amp);
    ctx.lineTo(canvas.width, amp);
    ctx.stroke();

    // Verificar clipping
    let hasClipping = false;
    for (let i = 0; i < data.length; i++) {
        if (Math.abs(data[i]) > 0.99) {
            hasClipping = true;
            break;
        }
    }

    // Desenhar forma de onda (verde se OK, vermelho se clipping)
    ctx.strokeStyle = hasClipping ? '#e53e3e' : '#38a169';
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    for (let i = 0; i < canvas.width; i++) {
        let min = 1.0;
        let max = -1.0;

        for (let j = 0; j < step; j++) {
            const datum = data[(i * step) + j];
            if (datum < min) min = datum;
            if (datum > max) max = datum;
        }

        const yMin = (1 + min) * amp;
        const yMax = (1 + max) * amp;

        if (i === 0) {
            ctx.moveTo(i, yMin);
        } else {
            ctx.lineTo(i, yMin);
        }
        ctx.lineTo(i, yMax);
    }

    ctx.stroke();

    // Mostrar/esconder aviso de clipping no título
    const clippingWarning = document.getElementById('clippingWarning');
    if (hasClipping) {
        clippingWarning.style.display = 'inline';
    } else {
        clippingWarning.style.display = 'none';
    }
}

// Reproduzir áudio original através do player
function playOriginalAudio() {
    const audio = document.getElementById('originalAudio');
    const processedAudio = document.getElementById('processedAudio');

    // Pausar o áudio processado se estiver tocando
    processedAudio.pause();

    // Tocar o áudio original
    audio.play();
}

// Reproduzir áudio processado através do player
function playProcessedAudio() {
    const audio = document.getElementById('processedAudio');
    const originalAudio = document.getElementById('originalAudio');

    // Pausar o áudio original se estiver tocando
    originalAudio.pause();

    // Tocar o áudio processado
    audio.play();
}

// Pausar áudio
function pauseAudio() {
    const originalAudio = document.getElementById('originalAudio');
    const processedAudio = document.getElementById('processedAudio');
    if (originalAudio) originalAudio.pause();
    if (processedAudio) processedAudio.pause();
}

// Parar áudio
function stopAudio() {
    pauseAudio();
}

// Atualizar ganho
function updateGain() {
    const value = document.getElementById('gainSlider').value;
    currentGain = parseFloat(value);
    document.getElementById('gainValue').textContent = value;

    if (gainNode) {
        gainNode.gain.value = currentGain;
    }

    // Mostrar preview do ganho na forma de onda
    if (audioBuffer) {
        previewGainEffect();
    }
}

// Preview do efeito de ganho em tempo real
function previewGainEffect() {
    if (!audioBuffer) return;

    const gain = currentGain;

    // Criar buffer temporário para preview
    const previewBuffer = audioContext.createBuffer(
        audioBuffer.numberOfChannels,
        audioBuffer.length,
        audioBuffer.sampleRate
    );

    // Aplicar ganho
    for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
        const inputData = audioBuffer.getChannelData(channel);
        const outputData = previewBuffer.getChannelData(channel);

        for (let i = 0; i < inputData.length; i++) {
            let sample = inputData[i] * gain;
            if (sample > 1.0) sample = 1.0;
            if (sample < -1.0) sample = -1.0;
            outputData[i] = sample;
        }
    }

    // Desenhar preview
    drawProcessedWaveform(previewBuffer);
}

// Normalizar áudio
function normalizeAudio() {
    if (!audioBuffer) return;

    const channelData = audioBuffer.getChannelData(0);
    let max = 0;

    // Encontrar valor máximo
    for (let i = 0; i < channelData.length; i++) {
        const abs = Math.abs(channelData[i]);
        if (abs > max) max = abs;
    }

    if (max === 0) return;

    // Calcular fator de normalização (deixar um pouco abaixo do máximo para evitar clipping)
    const normalizationFactor = 0.95 / max;

    // Criar novo buffer
    processedAudioBuffer = audioContext.createBuffer(
        audioBuffer.numberOfChannels,
        audioBuffer.length,
        audioBuffer.sampleRate
    );

    // Aplicar normalização em todos os canais
    for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
        const inputData = audioBuffer.getChannelData(channel);
        const outputData = processedAudioBuffer.getChannelData(channel);

        for (let i = 0; i < inputData.length; i++) {
            outputData[i] = inputData[i] * normalizationFactor;
        }
    }

    // Criar URL para reprodução
    createProcessedAudioURL();

    // Desenhar forma de onda processada
    drawProcessedWaveform(processedAudioBuffer);

    alert(`Áudio normalizado!\n\nValor máximo original: ${max.toFixed(4)}\nFator de normalização: ${normalizationFactor.toFixed(4)}x`);
}

// Aplicar efeitos
function applyEffect() {
    if (!audioBuffer) return;

    const gain = currentGain;

    // Criar novo buffer
    processedAudioBuffer = audioContext.createBuffer(
        audioBuffer.numberOfChannels,
        audioBuffer.length,
        audioBuffer.sampleRate
    );

    // Aplicar ganho em todos os canais
    for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
        const inputData = audioBuffer.getChannelData(channel);
        const outputData = processedAudioBuffer.getChannelData(channel);

        for (let i = 0; i < inputData.length; i++) {
            // Aplicar ganho com limitação suave para evitar clipping
            let sample = inputData[i] * gain;

            // Soft clipping
            if (sample > 1.0) sample = 1.0;
            if (sample < -1.0) sample = -1.0;

            outputData[i] = sample;
        }
    }

    // Criar URL para reprodução
    createProcessedAudioURL();

    // Desenhar forma de onda processada
    drawProcessedWaveform(processedAudioBuffer);

    alert(`Efeitos aplicados!\n\nGanho aplicado: ${gain}x`);
}

// Criar URL do áudio processado
function createProcessedAudioURL() {
    if (!processedAudioBuffer) return;

    // Converter buffer para WAV
    const wav = bufferToWave(processedAudioBuffer);
    const blob = new Blob([wav], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);

    document.getElementById('processedAudio').src = url;
    document.getElementById('playProcessedBtn').disabled = false;
    updateProcessedInfo(processedAudioBuffer);
}

// Converter AudioBuffer para WAV
function bufferToWave(audioBuffer) {
    const numChannels = audioBuffer.numberOfChannels;
    const sampleRate = audioBuffer.sampleRate;
    const format = 1; // PCM
    const bitDepth = 16;

    const bytesPerSample = bitDepth / 8;
    const blockAlign = numChannels * bytesPerSample;

    const data = [];
    for (let i = 0; i < audioBuffer.length; i++) {
        for (let channel = 0; channel < numChannels; channel++) {
            const sample = audioBuffer.getChannelData(channel)[i];
            const intSample = Math.max(-1, Math.min(1, sample));
            data.push(intSample < 0 ? intSample * 0x8000 : intSample * 0x7FFF);
        }
    }

    const buffer = new ArrayBuffer(44 + data.length * bytesPerSample);
    const view = new DataView(buffer);

    // RIFF identifier
    writeString(view, 0, 'RIFF');
    // File length
    view.setUint32(4, 36 + data.length * bytesPerSample, true);
    // RIFF type
    writeString(view, 8, 'WAVE');
    // Format chunk identifier
    writeString(view, 12, 'fmt ');
    // Format chunk length
    view.setUint32(16, 16, true);
    // Sample format (PCM)
    view.setUint16(20, format, true);
    // Channel count
    view.setUint16(22, numChannels, true);
    // Sample rate
    view.setUint32(24, sampleRate, true);
    // Byte rate
    view.setUint32(28, sampleRate * blockAlign, true);
    // Block align
    view.setUint16(32, blockAlign, true);
    // Bits per sample
    view.setUint16(34, bitDepth, true);
    // Data chunk identifier
    writeString(view, 36, 'data');
    // Data chunk length
    view.setUint32(40, data.length * bytesPerSample, true);

    // Write data
    let offset = 44;
    for (let i = 0; i < data.length; i++) {
        view.setInt16(offset, data[i], true);
        offset += 2;
    }

    return buffer;
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}

// Atualizar informações do áudio original
function updateOriginalInfo(buffer) {
    const channelData = buffer.getChannelData(0);
    let max = 0;
    let sum = 0;

    for (let i = 0; i < channelData.length; i++) {
        const abs = Math.abs(channelData[i]);
        if (abs > max) max = abs;
        sum += abs;
    }

    const avg = sum / channelData.length;

    document.getElementById('originalInfo').innerHTML = `
        Pico: ${max.toFixed(4)}<br>
        Média: ${avg.toFixed(4)}
    `;
}

// Atualizar informações do áudio processado
function updateProcessedInfo(buffer) {
    const channelData = buffer.getChannelData(0);
    let max = 0;
    let sum = 0;

    for (let i = 0; i < channelData.length; i++) {
        const abs = Math.abs(channelData[i]);
        if (abs > max) max = abs;
        sum += abs;
    }

    const avg = sum / channelData.length;

    document.getElementById('processedInfo').innerHTML = `
        Pico: ${max.toFixed(4)}<br>
        Média: ${avg.toFixed(4)}
    `;
}

// Resetar áudio
function resetAudio() {
    processedAudioBuffer = null;
    currentGain = 1.0;
    document.getElementById('gainSlider').value = 1.0;
    document.getElementById('gainValue').textContent = '1.0';
    document.getElementById('processedAudio').src = '';
    document.getElementById('processedInfo').innerHTML = '';
    document.getElementById('playProcessedBtn').disabled = true;

    if (audioBuffer) {
        drawWaveform(audioBuffer);
    }

    // Limpar forma de onda processada
    drawProcessedWaveform(null);
}
