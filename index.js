let num1 = 8
let num2 = 2
let sumEl = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2



// Created four functions: add(), subtract(), divide(), multiply()
// Calls the correct function when the user clicks on one of the buttons
// Perform sthe given calculation using num1 and num2
// Renders the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, it renders
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


function add() {
    result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    result = num1 * num2
    sumEl.textContent = "Sum: " + result
}