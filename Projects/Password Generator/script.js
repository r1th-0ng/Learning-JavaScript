// Character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Selecting elements
const passwordField = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

// Function to generate password
function generatePassword() {
    let passwordLength = lengthInput.value;
    let characters = "";
    let password = "";

    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (numbersCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolChars;

    if (characters.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

passwordField.value = password;

}

// Function to copy password to clipboard
function copyPassword() {
    if (passwordField.value === "") {
        alert("Generate a password first!");
        return;
    }
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

// Event Listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
