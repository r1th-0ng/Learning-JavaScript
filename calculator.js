// Select DOM elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = ""; // Tracks the current input
let operator = ""; // Tracks the operator
let previousInput = ""; // Tracks the previous input

// Function to handle button clicks
function handleButtonClick(event) {
  const value = event.target.dataset.value;

  // Clear the display
  if (value === "C") {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
    return;
  }

  // Handle equals button
  if (value === "=") {
    if (currentInput && previousInput && operator) {
      const result = calculate(Number(previousInput), Number(currentInput), operator);
      display.value = result;
      currentInput = result; // Store the result for further calculations
      operator = "";
      previousInput = "";
    }
    return;
  }

  // Handle operators
  if (["+", "-", "*", "/"].includes(value)) {
    if (currentInput) {
      operator = value;
      previousInput = currentInput; // Store the current input
      currentInput = ""; // Reset the current input for the next number
    }
    return;
  }

  // Handle number and decimal input
  currentInput += value;
  display.value = currentInput;
}

// Function to perform calculations
function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error"; // Handle division by zero
    default:
      return num2;
  }
}

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
