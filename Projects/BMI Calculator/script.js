// Selecting elements
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculate");
const bmiResult = document.getElementById("bmi-result");
const bmiCategory = document.getElementById("bmi-category");

// Function to calculate BMI
function calculateBMI() {
    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    // Validate input
    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
        alert("Please enter valid weight and height!");
        return;
    }

    let bmi = weight / (height * height);
    bmiResult.innerText = bmi.toFixed(2);

    // Determine BMI category
    if (bmi < 18.5) {
        bmiCategory.innerText = "🔵 Underweight";
        bmiCategory.style.color = "blue";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory.innerText = "🟢 Normal weight";
        bmiCategory.style.color = "green";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory.innerText = "🟠 Overweight";
        bmiCategory.style.color = "orange";
    } else {
        bmiCategory.innerText = "🔴 Obese";
        bmiCategory.style.color = "red";
    }
}

// Event Listener for Calculate Button
calculateBtn.addEventListener("click", calculateBMI);
