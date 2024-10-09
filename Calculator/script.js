let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

// Evaluate the current string
function evaluateString() {
    string = eval(string);
    input.value = string;
}

// Clear the entire string
function deleteString() {
    string = "";
    input.value = string;
}

// Will remove the last character
function backSpaceString() {
    string = string.substring(0, string.length - 1);
    input.value = string;
}
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            evaluateString();
        }
        else if (e.target.innerHTML == 'AC') {
            deleteString();
        }
        else if (e.target.innerHTML == '⌫') {
            backSpaceString();
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

// Listen for keyboard input
document.addEventListener('keydown', (e) => {
    // Checking for digit, operator, percentage sign from keyboard
    if (/^[0-9+*/%-]$/.test(e.key)) {
        string += e.key;
        input.value = string;
    } else if (e.key === 'Enter' || e.key === '=') {
        // If "Enter" or '=' key is pressed, evaluate the string
        evaluateString();
    } else if (e.key === 'Backspace') {
        // Remove the last character
        backSpaceString();
    } else if (e.key === 'Delete') {
        // Clear the entire string
        deleteString();
    }
});
