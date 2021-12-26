function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function operate(func, num1, num2){
    return func(num1, num2);
}

/**
 * 
 * @param {int} num 
 * @returns 
 */
function newNumber(num){
    var displayNum;
    if (previousInput === "first"){
        if (firstNum === undefined){
            firstNum = num;
            displayNum = firstNum;
        }
        else {
            displayNum = firstNum + num;
            firstNum = displayNum;
        }
    }
    else if (previousInput === "operation"){
        secondNum = num;
        displayNum = num;
    }
    else if (previousInput === "second"){
        displayNum = secondNum.toString() + num;
    }
    return displayNum;
}

var firstNum;
var operation;
var secondNum;
var previousInput = "first";

var btnNumbersArr = Array.from(document.querySelector(".number-buttons").children);
var display = document.querySelector(".display")
var displayText = document.createElement('p');
display.appendChild(displayText);

btnNumbersArr.forEach(element => {
    Array.from(element.children).forEach(button => {
        button.addEventListener("click", function() {
            displayText.innerHTML = newNumber(button.textContent);
        })
    })
});

// var btnAdd = document.querySelector("#btnAdd");
// var btnSubtract = document.querySelector("#btnSubtract");
// var btnMultiply = document.querySelector("#btnMultiply");
// var btnDivide = document.querySelector("#btnDivide");

// btnAdd.addEventListener("click", function() {
//     operation = add();
// })

// btnSubtract.addEventListener("click", function() {
//     operation = subtract();
// })

// btnMultiply.addEventListener("click", function() {
//     operation = multiply();
// })

// btnDivide.addEventListener("click", function() {
//     operation = divide();
// })

// var btnEqual = document.querySelector("#btnEqual");
// btnEqual.addEventListener("click", function() {
//     if (secondNum != NaN){
//         var display = document.querySelector(".display");
//         display.textContent = operate(operation, firstNum, secondNum);
//     }
// });