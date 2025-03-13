// Selecting elements
const clock = document.getElementById("clock");
const toggleFormatBtn = document.getElementById("toggle-format");

let is24HourFormat = false; // Default to 12-hour format

// Function to update the time
function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "";

    if (!is24HourFormat) {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour FormDataEvent
    }

    // Format time with leading zeros if necessary
    ampm = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, 0);

    clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Function to toggle time format
toggleFormatBtn.addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    toggleFormatBtn.innerText = is24HourFormat ? "Switch to 12-hour" : "Switch to 24-hour";
    updateTime(); // Immediately update format
});

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();
