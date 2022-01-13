const addButton = document.querySelector('.addBtn');
const multiplyButton = document.querySelector('.mulBtn');
const divideButton = document.querySelector('.divBtn');
const subtractButton = document.querySelector('.subBtn');
const equalsButton = document.querySelector('.equalsBtn');
const displayAns = document.querySelector('.ans');
const currentEqDis = document.querySelector('.currentEq');

let operatorSign = "";
let answer = "";
let num1 = 0;
let num2 = 0;

const numbers = new Array();


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
            operations.add(num1, num2);
            break;
        case "*":
            operations.multiply(num1, num2);
            break;
        case "/":
            operations.divide(num1, num2);
            break;
        case "-":
            operations.subtract(num1, num2);
            break;
    }
}

multiplyButton.addEventListener("click", () => { 
    
    numbers.push(firstNum());
    clearInputField();
    console.log(numbers);
    operatorSign = "*";
    currentEqDis.textContent = num1 + " x ";
    if (numbers.length >= 2) {
        operate(numbers[0], numbers[1], operatorSign);
        numbers.length = 0;
        numbers.push(answer);
        
    }
    
    console.log(answer);

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
    
    numbers.push(firstNum());
    console.log(numbers);
   operate(numbers[0], numbers[1], operatorSign);
   displayAns.textContent = answer;
   clearInputField();
   numbers.length = 0;
   numbers.push(answer);
   console.log(numbers);
});

function firstNum() {
    const userInput = parseInt(document.querySelector('.userInput').value);
    
    return userInput;
}

function secondNum() {
    const userInput = parseInt(document.querySelector('.userInput').value);
    num2 = userInput;
    return num2;
}

function clearInputField() {
    const userInput = document.querySelector('.userInput');
    userInput.value = '';
    userInput.focus();
}
