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
