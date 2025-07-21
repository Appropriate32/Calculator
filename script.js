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
}

function countDecimalPlaces(number) {
  // Convert the number to a string
  const numString = number.toString();

  // Find the index of the decimal point
  const decimalIndex = numString.indexOf('.');

  // If no decimal point is found, the number is an integer, so return 0
  if (decimalIndex === -1) {
    return 0;
  }

  // Calculate the number of digits after the decimal point
  // This is the total length of the string minus the index of the decimal point minus 1 (for the decimal point itself)
  return numString.length - decimalIndex - 1;
}

let firstNum, secondNum, operator;
let shouldResetDisplay = false;

const digit = document.querySelectorAll(".digit");
const displayText = document.querySelector(".display-text");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const warningText = document.querySelector(".warning");
const delButton = document.querySelector(".del");
const errorAudio = document.querySelector(".error-sound");

digit.forEach((button) => {
    button.addEventListener("click", () => {
        if (warningText.textContent !== "") return;
        if (shouldResetDisplay) {
            displayText.textContent = "";
            shouldResetDisplay = false;
        }
        displayText.textContent += button.textContent;
    })
})

operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
        if (displayText.textContent === "" || warningText.textContent !== "") return;
        
        if (typeof operator !== "undefined" && shouldResetDisplay === false) {
                secondNum = parseFloat(displayText.textContent);
                if (secondNum === 0 && operator === "/") {
                    warningText.textContent = "WARNING WARNING WARNING PRESS CLEAR TO RESET";
                    errorAudio.volume = 1.0; // max volume (0.0 to 1.0)
                    errorAudio.play();
                    return;
    }
                displayText.textContent = operate(firstNum, secondNum, operator === "×" ? "*" : operator )
        }

        firstNum = parseFloat(displayText.textContent);
        operator = button.textContent;
        shouldResetDisplay = true;
    })
})

equalButton.addEventListener("click", () => {
    if (displayText.textContent === "" || operator === null || typeof firstNum === "undefined" || shouldResetDisplay === true || warningText.textContent !== "") return;

    secondNum = parseFloat(displayText.textContent);
    if (secondNum === 0 && operator === "/") {
        warningText.textContent = "WARNING WARNING WARNING PRESS CLEAR TO RESET";
        errorAudio.volume = 1.0; // max volume (0.0 to 1.0)
        errorAudio.play();
        return;
    }
    let result = operate(firstNum, secondNum, operator === "×" ? "*" : operator);
    if (countDecimalPlaces(result) > 5) {
         result = result.toFixed(5);
    }

    displayText.textContent = result;
    shouldResetDisplay = true;
})

clearButton.addEventListener("click", () => {
    shouldResetDisplay = false;
    displayText.textContent = "";
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    warningText.textContent = "";
})

delButton.addEventListener("click", () => {
    if (displayText.textContent === "" || shouldResetDisplay === true || warningText.textContent !== "") return;
    
    displayText.textContent = displayText.textContent.slice(0, -1);
})