const add = function (a, b) {return a + b};
const subtract = function (a, b) {return a - b};
const multiply = function(a, b) {return a * b};
const divide = function(a, b) {return a / b};

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

var btnAdd = document.querySelector("#btnAdd");
var btnSubtract = document.querySelector("#btnSubtract");
var btnMultiply = document.querySelector("#btnMultiply");
var btnDivide = document.querySelector("#btnDivide");

function setOperation(op){
    if (operation === undefined){
        operation = op;
        previousInput = "operation";
        displayText.innerHTML = "";
    }
}

btnAdd.addEventListener("click", function() {
    setOperation(add);
})

btnSubtract.addEventListener("click", function() {
    setOperation(subtract);
})

btnMultiply.addEventListener("click", function() {
    setOperation(multiply);
})

btnDivide.addEventListener("click", function() {
    setOperation(divide);
})

var btnEqual = document.querySelector("#btnEqual");
btnEqual.addEventListener("click", function() {
    if (secondNum != undefined){
        displayText.innerHTML = operation(parseInt(firstNum), parseInt(secondNum));
    }
});