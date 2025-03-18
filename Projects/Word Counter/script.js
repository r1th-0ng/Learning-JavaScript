// Selecting elements
const textInput = document.getElementById("text-input");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");

// Function to count words and characters
function countWordsAndChars() {
    let text = textInput.value.trim();

    // Count characters (including spaces)
    charCount.innerText = text.length;

    // Count words: Match only words with letters or numbers
    let words = text.match(/\b\w+\b/g);

    // If words exist, return their count; otherwise, return 0
    wordCount.innerText = words ? words.length : 0;
}

// Event Listener for real-time input tracking
textInput.addEventListener("input", countWordsAndChars);

// Call function initially to set counts to 0
countWordsAndChars();
