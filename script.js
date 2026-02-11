// Select DOM elements
const bulb = document.getElementById("bulb");
const toggleBtn = document.getElementById("toggleBtn");
const statusText = document.getElementById("status");
const brightnessSlider = document.getElementById("brightness");

// Track bulb state
let isOn = false;

// Function to turn ON the bulb
function turnOn() {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    bulb.classList.add("glow");
    statusText.textContent = "Status: ON";
    toggleBtn.textContent = "Turn OFF";
    document.body.style.backgroundColor = "#333";
    isOn = true;
}

// Function to turn OFF the bulb
function turnOff() {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    bulb.classList.remove("glow");
    statusText.textContent = "Status: OFF";
    toggleBtn.textContent = "Turn ON";
    document.body.style.backgroundColor = "#111";
    isOn = false;
}

// Toggle function
function toggleBulb() {
    if (isOn) {
        turnOff();
    } else {
        turnOn();
    }
}

// Button click event
toggleBtn.addEventListener("click", toggleBulb);

// Brightness control
brightnessSlider.addEventListener("input", function () {
    bulb.style.filter = `brightness(${brightnessSlider.value}%)`;
});
