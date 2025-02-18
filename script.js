const chords = {
    'C4,E4,G4': 'C Major',
    'C4,D#4,G4': 'C Menor',
    'F4,A4,C5': 'F Major'
};

let activeNotes = [];
let recording = false;
let recordedSequence = [];
const chordDisplay = document.getElementById('chord-display');
const sequenceDisplay = document.getElementById('sequence-display');
const recordButton = document.getElementById('record-button');
const clearButton = document.getElementById('clear-button');

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mousedown', () => {
        const note = key.dataset.note;
        playNote(note);
        key.classList.add('active');
        
        if (!activeNotes.includes(note)) {
            activeNotes.push(note);
            detectChord();
        }

        if (recording) {
            recordedSequence.push(note);
            updateSequenceDisplay();
        }
    });

    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
        activeNotes = [];
        chordDisplay.style.display = 'none';
    });
});

recordButton.addEventListener('click', () => {
    recording = !recording;
    recordButton.textContent = recording ? 'Parar Gravação' : 'Gravar Sequência';
    if (!recording) {
        updateSequenceDisplay();
    }
});

clearButton.addEventListener('click', () => {
    recordedSequence = [];
    updateSequenceDisplay();
});

function playNote(note) {
    const audio = new Audio(`sons/${note}.mp3`);
    audio.play();
}

function detectChord() {
    const sortedNotes = activeNotes.sort().join(',');
    const chord = chords[sortedNotes];
    
    if (chord) {
        chordDisplay.textContent = chord;
        chordDisplay.style.display = 'block';
        setTimeout(() => {
            chordDisplay.style.display = 'none';
        }, 2000);
    }
}

function updateSequenceDisplay() {
    sequenceDisplay.textContent = recordedSequence.join(' → ');
}