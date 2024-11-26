let scoreA = 0;
let scoreB = 0;
let selectedNumber = null;
let cricca = null;

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        // Evidenzia il numero selezionato
        clearSelection();
        selectedNumber = parseInt(button.dataset.value);
        button.classList.add('selected');
    });
});

document.getElementById('cricca-a').addEventListener('click', () => {
    cricca = 'A';
    document.getElementById('cricca-a').classList.add('selected');
    document.getElementById('cricca-b').classList.remove('selected');
});

document.getElementById('cricca-b').addEventListener('click', () => {
    cricca = 'B';
    document.getElementById('cricca-b').classList.add('selected');
    document.getElementById('cricca-a').classList.remove('selected');
});

document.getElementById('submit').addEventListener('click', () => {
    if (selectedNumber !== null) {
        scoreA += selectedNumber;
        scoreB += (11 - selectedNumber);
        if (cricca === 'A') scoreA += 3;
        if (cricca === 'B') scoreB += 3;

        updateScores();

        // Controlla vittoria
        checkVictory();
        clearSelection();
    } else {
        alert('Seleziona un punteggio prima di continuare.');
    }
});

document.getElementById('reset').addEventListener('click', resetGame);

function updateScores() {
    document.getElementById('score-a').textContent = scoreA;
    document.getElementById('score-b').textContent = scoreB;
}

function checkVictory() {
    const victoryScore = 51; // Cambia se necessario
    if (scoreA >= victoryScore && scoreA > scoreB) {
        showWinner('Squadra A');
    } else if (scoreB >= victoryScore && scoreB > scoreA) {
        showWinner('Squadra B');
    }
}

function showWinner(team) {
    document.getElementById('winner-message').textContent = `${team} Vince!`;
    document.getElementById('final-scores').textContent = `Punteggio Finale - Squadra A: ${scoreA}, Squadra B: ${scoreB}`;
    document.getElementById('winner').style.display = 'block';
}

function resetGame() {
    scoreA = 0;
    scoreB = 0;
    selectedNumber = null;
    cricca = null;
    updateScores();
    document.getElementById('winner').style.display = 'none';
    clearSelection();
}

function clearSelection() {
    document.querySelectorAll('button').forEach(button => button.classList.remove('selected'));
}
