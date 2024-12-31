// script.js

let display = document.getElementById("display");

// Function to append a value to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = "Error"; // Handle invalid expressions
    }
}
