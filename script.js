const chords = {
    'C,E,G': 'C Major',
    'C,D#,G': 'C Menor',
    'F,A,C': 'F Major'
};

let activeNotes = [];
const chordDisplay = document.getElementById('chord-display');

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mousedown', () => {
        const note = key.dataset.note;
        playNote(note);
        key.classList.add('active');
        
        if(!activeNotes.includes(note)) {
            activeNotes.push(note);
            detectChord();
        }
    });

    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
        activeNotes = [];
        chordDisplay.style.display = 'none';
    });
});

function playNote(note) {
    const audio = new Audio(`sons/${note}.mp3`);
    audio.play();
}

function detectChord() {
    const sortedNotes = activeNotes.sort().join(',');
    const chord = chords[sortedNotes];
    
    if(chord) {
        chordDisplay.textContent = chord;
        chordDisplay.style.display = 'block';
        setTimeout(() => {
            chordDisplay.style.display = 'none';
        }, 2000);
    }
}