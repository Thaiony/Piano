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
    "C2": ["C", "E", "G"],  // C2 é uma oitava de C
    "C3": ["C", "E", "G"],
    "C#3": ["C#", "F", "G#"],
    "D3": ["D", "F#", "A"],
    "D#3": ["D#", "G", "A#"],
    "E3": ["E", "G#", "B"],
    "F3": ["F", "A", "C"],
    "F#3": ["F#", "A#", "C#"],
    "G3": ["G", "B", "D"],
    "G#3": ["G#", "C", "D#"],
    "A3": ["A", "C#", "E"],
    "A#3": ["A#", "D", "F"],
    "B3": ["B", "D#", "F#"],
    "C4": ["C", "E", "G"]
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
