const but = document.querySelectorAll("button");
let addBtn = document.querySelector(".add");
let eqBtn = document.querySelector(".eq");
let subBtn = document.querySelector(".sub");
let mulBtn = document.querySelector(".mul");
let divBtn = document.querySelector(".div");
const disA = document.querySelector(".ans");
const disAns = document.querySelector(".sAns");
// const add = document.querySelectorAll(".add");
// const add = document.querySelectorAll(".add");
// const add = document.querySelectorAll(".add");
// const add = document.querySelectorAll(".add");
const p = document.querySelector("p");
let displayValue = "";
let ans;
let num;
let num2;
let op;

const numbers = new Array();

// buttons();

function add(a, b) {
  ans = a + b;
  return ans;
}
function subtract(a, b) {
  ans = a - b;
  return ans;
}
function divide(a, b) {
  if (b != 0) {
    ans = a / b;
    return ans;
  }
  ans = "Error";
  return ans;
}
function multiply(a, b) {
  ans = a * b;
  return ans;
}

function operate(op, num1, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    default:
      "NO";
      break;
  }
}

const funcs = document.querySelectorAll(".box");

console.log(funcs);

funcs[6].addEventListener("click", () => {
  checkArray();
  numbers[0] = "+";
  addNums();
  displayValue = "";
});

funcs[5].addEventListener("click", () => {
  checkArray();
  numbers[0] = "-";
  addNums();
  displayValue = "";
});

funcs[4].addEventListener("click", () => {
  checkArray();
  numbers[0] = "*";
  addNums();
  displayValue = "";
});

funcs[3].addEventListener("click", () => {
  checkArray();
  numbers[0] = "/";
  addNums();
  displayValue = "";
});

funcs[9].addEventListener("click", () => {
  checkArray();
  console.log(ans);

  console.log(numbers);
});

function checkArray() {
  if (numbers.length === 2) {
    console.log(displayValue);
    operate(numbers[0], numbers[1], parseFloat(displayValue));
    // disA.innerHTML = ans;
    disA.innerHTML = ans;
    numbers[1] = ans;
  }
}

function addNums() {
  if (numbers.length < 2) {
    numbers.push(parseFloat(displayValue));
  }
}

function checkForMatch() {}
