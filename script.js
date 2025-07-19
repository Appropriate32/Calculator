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
    let result;
    if (operator == "+") {
        result = add(firstNum, secondNum);
    } else if (operator == "-") {
        result = subtract(firstNum, secondNum);
    } else if (operator == "*") {
        result = multiply(firstNum, secondNum);
    } else if (operator == "/") {
        result = divide(firstNum, secondNum);
    }
    return result;
};

let firstNum, secondNum, operator;
let displayNum;

const digit = document.querySelectorAll(".digit");
const displayText = document.querySelector(".display-text");

digit.forEach((button) => {
    button.addEventListener("click", () => {
        displayText.textContent += button.textContent;
        displayNum = parseFloat(displayText.textContent);
    })
})



