// ===== MIDI FUNCTIONS =====
function toggleMidi() {
    const audio = document.getElementById('midiAudio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function stopMidi() {
    const audio = document.getElementById('midiAudio');
    audio.pause();
    audio.currentTime = 0;
}
