//your JS code here. If required.
// Find the element with id="level"
const element = document.getElementById('level');

// Start counting levels
let level = 0;
let currentElement = element;

// Count all parent elements up to document root
while (currentElement.parentElement) {
    level++;
    currentElement = currentElement.parentElement;
}

// Add 1 for the html element (if not already counted)
// Actually the while loop counts all parents including html
// So level is already correct

// Show the result
alert(`The level of the element is: ${level}`);