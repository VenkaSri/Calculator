const TOTAL_DIVS = 19;
const IS_NUMBER = typeof 0;

const mainContainer = document.querySelector(".container");
const digits = [
  "C",
  "%",
  "/",
  7,
  8,
  9,
  "x",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  "+/-",
  0,
  ".",
  "=",
];

for (let i = 0; i < TOTAL_DIVS; i++) {
  const div = document.createElement("div");
  mainContainer.append(div);
  if (typeof digits[i] === IS_NUMBER) {
    div.classList.add("nBox");
    div.textContent = digits[i];
  } else if (
    digits[i] === "/" ||
    digits[i] === "x" ||
    digits[i] === "+" ||
    digits[i] === "-"
  ) {
    div.classList.add("oBox");
    div.textContent = digits[i];
  } else {
    div.classList.add("box");
    div.textContent = digits[i];
  }
}

// const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// const op = ['+', '-', '3', '4', '5', '6', '7', '8', '9', '0'];
const strDigits = digits.map(function (e) {
  return e.toString();
});

document.addEventListener("keydown", (e) => {
  keyOperators(e); 
  for (let i = 0; i < strDigits.length; i++) {
    if (e.key === strDigits[i]) {
      if (
        e.key !== "+" &&
        e.key !== "x" &&
        e.key !== "/" &&
        e.key !== "-" &&
        e.key !== "="
      ) {
        calc.appendNumber(e.key);
        calc.updateDisplay();
        calc.checkCurrText();
      }
    }
  }
});

function keyOperators(e) {
  switch (e.key) {
    case "=":
      calc.compute();
      calc.updateDisplay();
      break;
    case "Enter":
      calc.compute();
      calc.updateDisplay();
      break;
    case "+":
      calc.currStatus();
      calc.chooseOperation(e.key);
      calc.updateDisplay();
      break;
    case "Backspace":
      calc.delete();
      calc.updateDisplay();
      calc.checkCurrText();
      break;
    case "-":
      calc.currStatus();
      calc.chooseOperation(e.key);
      calc.updateDisplay();
      break;
    case "/":
      calc.currStatus();
      calc.chooseOperation(e.key);
      calc.updateDisplay();
      break;
  }
}
