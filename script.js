function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(firstNum, secondNum, operator) {
    if (operator == "+") {
        return add(firstNum, secondNum);
    } else if (operator == "-") {
        return subtract(firstNum, secondNum);
    } else if (operator == "*") {
        return multiply(firstNum, secondNum);
    } else if (operator == "/") {
        return divide(firstNum, secondNum);
    }
};

let firstNum, secondNum, operator;
let shouldResetDisplay = false;

const digit = document.querySelectorAll(".digit");
const displayText = document.querySelector(".display-text");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

digit.forEach((button) => {
    button.addEventListener("click", () => {
        if (shouldResetDisplay) {
            displayText.textContent = "";
            shouldResetDisplay = false;
        }
        displayText.textContent += button.textContent;
    })
})

operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
        if (displayText.textContent === "") return;
        
        firstNum = parseFloat(displayText.textContent);
        operator = button.textContent;
        shouldResetDisplay = true;
    })
})


