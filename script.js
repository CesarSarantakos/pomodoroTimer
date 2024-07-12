let timer;
let timeLeft = 1500; // 25 minutos em segundos

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft === 0) {
            clearInterval(timer);
            alert('Tempo esgotado!');
        }
    }, 1000);
    startButton.disabled = true;
}

function pauseTimer() {
    clearInterval(timer);
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 1500;
    updateDisplay();
    startButton.disabled = false;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();