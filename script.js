
// Listen for click events to the buttons, write the button values to display
function writeToDisplay(value) {
    const display = document.querySelector(".display p");

    if (value === "C") {
        display.textContent = "0";
    } else if (value === "=") {

    } else {
        display.textContent += value;
    }
}

// Add event listener to each button in the keypad div
document.querySelector(".keypad").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        writeToDisplay(e.target.id);
    }
});

