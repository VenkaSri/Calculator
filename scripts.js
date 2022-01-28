const addButton = document.querySelector('.addBtn');
const multiplyButton = document.querySelector('.mulBtn');
const divideButton = document.querySelector('.divBtn');
const subtractButton = document.querySelector('.subBtn');
const equalsButton = document.querySelector('.equalsBtn');
const displayAns = document.querySelector('.ans');
const displayLiveAns = document.querySelector('.liveAns');
let num = '';
let operatorSign = "";
let answer = "";
let num1 = 0;
let num2 = 0;




const operations = {
    add: function(a, b) { 
        return a + b;
    },
    multiply: function(a, b) { 
        answer = a * b;
        return answer;
    },
    divide: function(a, b) { 
        return a / b;
    },
    subtract: function(a, b) { 
        return a - b;
    }
}

const operate = function(num1, num2, operator) {
    switch (operator) {
        case "+":
            return operations.add(num1, num2);
        case "*":
            return operations.multiply(num1, num2);
        case "/":
            return operations.divide(num1, num2);
        case "-":
            return operations.subtract(num1, num2);
        default:
            break;
    }
}

multiplyButton.addEventListener("click", () => { 
    firstNum();
    num = num1;
    clearInputField();
    changeInputField()  

 });
addButton.addEventListener("click", () => {
     operatorSign = "+";
     });
divideButton.addEventListener("click", () => { 
    operatorSign = "/";
 });
subtractButton.addEventListener("click", () => { 
    operatorSign = "-";
 });



equalsButton.addEventListener("click", () => {
   secondNum(); 
   operate(num1, num2, operatorSign);
   displayAns.textContent = answer;
});

function firstNum() {
    const userInput = parseInt(document.querySelector('.userInput').value);
    num1 = userInput;
    return num1;
}

function secondNum() {
    const userInput = parseInt(document.querySelector('.userInput').value);
    num2 = userInput;
    return num2;
}

function clearInputField() {
    const userInput = document.querySelector('.userInput');
    userInput.focus();
}

function changeInputField() {
    let userInput = document.querySelector('.userInput');
    userInput.value += " x ";
}