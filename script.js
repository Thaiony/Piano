// Map de acordes com base nas notas
const chords = {
    "C": ["C", "E", "G"],
    "C#": ["C#", "F", "G#"],
    "D": ["D", "F#", "A"],
    "D#": ["D#", "G", "A#"],
    "E": ["E", "G#", "B"],
    "F": ["F", "A", "C"],
    "F#": ["F#", "A#", "C#"],
    "G": ["G", "B", "D"],
    "G#": ["G#", "C", "D#"],
    "A": ["A", "C#", "E"],
    "A#": ["A#", "D", "F"],
    "B": ["B", "D#", "F#"],
    "C2": ["C", "E", "G"]  // Duplicata para C2 (octava)
};

let pressedNotes = [];

// Função para detectar o acorde
function getChord(notes) {
    for (let chord in chords) {
        if (chords[chord].every(note => notes.includes(note))) {
            return chord;
        }
    }
    return "Nenhum acorde encontrado";
}

// Função para atualizar o display do acorde
function updateChordDisplay() {
    const chordDisplay = document.getElementById("chord-display");
    const chord = getChord(pressedNotes);
    chordDisplay.textContent = `Acorde: ${chord}`;
}

// Função para lidar com o clique nas teclas
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', (event) => {
        const note = event.target.dataset.note;
        if (!pressedNotes.includes(note)) {
            pressedNotes.push(note);
        }
        updateChordDisplay();
    });
});
