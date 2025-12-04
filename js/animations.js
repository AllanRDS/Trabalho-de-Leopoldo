// ===== ANIMAÇÕES =====
let waveAnimationId = null;
let samplingAnimationId = null;
let equalizerAnimationId = null;

// Animação de ondas sonoras
function startWaveAnimation() {
    const canvas = document.getElementById('soundWaveCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;

    let offset = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 3;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x++) {
            const y = canvas.height / 2 + Math.sin((x + offset) * 0.02) * 50;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        offset += 2;
        waveAnimationId = requestAnimationFrame(animate);
    }
    animate();
}

function stopWaveAnimation() {
    if (waveAnimationId) {
        cancelAnimationFrame(waveAnimationId);
        waveAnimationId = null;
    }
}

function resetWaveAnimation() {
    stopWaveAnimation();
    const canvas = document.getElementById('soundWaveCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// Animação de amostragem
let sampleRate = 'medium';
function startSamplingAnimation() {
    const canvas = document.getElementById('samplingCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;

    let offset = 0;
    const sampleRates = { low: 20, medium: 10, high: 5 };

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Onda contínua (cinza)
        ctx.strokeStyle = '#cbd5e0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
            const y = canvas.height / 2 + Math.sin((x + offset) * 0.03) * 70;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Pontos de amostragem
        const step = sampleRates[sampleRate];
        ctx.fillStyle = '#38a169';
        for (let x = 0; x < canvas.width; x += step) {
            const y = canvas.height / 2 + Math.sin((x + offset) * 0.03) * 70;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();

            // Linha vertical
            ctx.strokeStyle = '#e2e8f0';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, canvas.height - 10);
            ctx.stroke();
        }

        offset += 1;
        samplingAnimationId = requestAnimationFrame(animate);
    }
    animate();
}

function stopSamplingAnimation() {
    if (samplingAnimationId) {
        cancelAnimationFrame(samplingAnimationId);
        samplingAnimationId = null;
    }
}

function changeSampleRate() {
    sampleRate = document.getElementById('sampleRateSelect').value;
}

// Animação de equalizer
function startEqualizerAnimation() {
    const bars = document.querySelectorAll('.eq-bar');

    function animate() {
        bars.forEach(bar => {
            const randomHeight = Math.random() * 150 + 30;
            bar.style.height = randomHeight + 'px';
        });
        equalizerAnimationId = setTimeout(animate, 100);
    }
    animate();
}

function stopEqualizerAnimation() {
    if (equalizerAnimationId) {
        clearTimeout(equalizerAnimationId);
        equalizerAnimationId = null;
    }
}

// Animação de compressão
function animateCompression(format) {
    const qualities = {
        'wav': { quality: 100, size: 10.0 },
        'mp3-128': { quality: 70, size: 1.0 },
        'mp3-192': { quality: 85, size: 1.4 },
        'mp3-320': { quality: 95, size: 2.3 },
        'aac': { quality: 88, size: 0.8 }
    };

    const data = qualities[format];
    const qualityEl = document.getElementById('qualityValue');
    const sizeEl = document.getElementById('sizeValue');

    let currentQuality = parseInt(qualityEl.textContent);
    let currentSize = parseFloat(sizeEl.textContent);

    const interval = setInterval(() => {
        if (currentQuality < data.quality) currentQuality += 2;
        if (currentQuality > data.quality) currentQuality -= 2;
        if (currentSize < data.size) currentSize += 0.1;
        if (currentSize > data.size) currentSize -= 0.1;

        qualityEl.textContent = Math.round(currentQuality);
        sizeEl.textContent = currentSize.toFixed(1);

        if (Math.abs(currentQuality - data.quality) < 2 && Math.abs(currentSize - data.size) < 0.1) {
            clearInterval(interval);
        }
    }, 50);
}

// Iniciar equalizer se a seção de animações estiver ativa
document.addEventListener('DOMContentLoaded', () => {
    const animacoesSection = document.getElementById('animacoes');
    if (animacoesSection && animacoesSection.classList.contains('active')) {
        setTimeout(startEqualizerAnimation, 500);
    }
});
