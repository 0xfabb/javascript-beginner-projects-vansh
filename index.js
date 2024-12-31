const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

function generatePassword() {
    const length = parseInt(document.getElementById("length").value); 
    const allChars = lowerCase + upperCase + numbers + specialChars; 
    let password = "";

    // Generate password of desired length
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length); // Pick a random index
        password += allChars[randomIndex]; // Append character at the random index
    }

    document.getElementById("passwordOutput").value = password;
}

// Function to copy password to clipboard
function copyToClipboard() {
    const passwordOutput = document.getElementById("passwordOutput");
    passwordOutput.select(); // Select the text
    document.execCommand("copy"); // Copy the text to clipboard
    alert("Password copied to clipboard!"); // Show a confirmation alert
}

// Attach event listeners
document.getElementById("generateButton").addEventListener("click", generatePassword);
document.getElementById("copyButton").addEventListener("click", copyToClipboard);
