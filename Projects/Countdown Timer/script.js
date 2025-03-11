// Selecting elements
const timeInput = document.getElementById("time");
const countdownDisplay = document.getElementById("countdown");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let countdown;
let timeLeft; 
let isPaused = false;

// Function to start countdown
function startCountdown() {
    if (countdown) return; // Prevent multiple intervals

    timeLeft = parseInt(timeInput.value); 
    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Please enter a valid time!");
        return;
    }

    isPaused = false;
    countdown = setInterval(updateCountdown, 1000);
}

// Function to update countdown
function updateCountdown() {
    if (timeLeft <= 0) {
        clearInterval(countdown);
        countdown = null;
        countdownDisplay.innerText = "TIME UP!";
        alert("Time's up!");
        return;
    }

    timeLeft--;
    displayTime();
}

// Function to pause countdown
function pauseCountdown() {
    if (countdown) {
        clearInterval(countdown);
        countdown = null;
        isPaused = true;
    }
}

// Function to reset countdown
function resetCountdown() {
    clearInterval(countdown);
    countdown = null;
    isPaused = false;
    timeLeft = parseInt(timeInput.value);
    displayTime();
}

// Function to display time in HH:MM:SS format
function displayTime() {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    countdownDisplay.innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Event Listeners
startButton.addEventListener("click", startCountdown);
pauseButton.addEventListener("click", pauseCountdown);
resetButton.addEventListener("click", resetCountdown);

// Initialize display
displayTime();
