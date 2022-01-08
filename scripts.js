const addButton = document.querySelector('.addBtn');
const multiplyButton = document.querySelector('.mulBtn');
const divideButton = document.querySelector('.divBtn');
const subtractButton = document.querySelector('.subBtn');
const equalsButton = document.querySelector('.equalsBtn');
let operatorSign = "";

const operations = {
    add: function(a, b) { 
        console.log(a + b);
    },
    multiply: function(a, b) { 
        console.log(a * b);
    },
    divide: function(a, b) { 
        console.log(a / b);
    },
    subtract: function(a, b) { 
        console.log(a - b);
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

multiplyButton.addEventListener("click", () => { operatorSign = "*"; });
addButton.addEventListener("click", () => { operatorSign = "+"; });
divideButton.addEventListener("click", () => { operatorSign = "/"; });
subtractButton.addEventListener("click", () => { operatorSign = "-"; });



equalsButton.addEventListener("click", () => {
    const userIn1 = parseInt(document.querySelector('.num1').value);
    const userIn2 = parseInt(document.querySelector('.num2').value);
    console.log(operatorSign);
    operate(userIn1, userIn2, operatorSign);
});