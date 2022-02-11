class Calculator {
  constructor(prevOpText, currOpText) {
    this.prevOpText = prevOpText;
    this.currOpText = currOpText;
    this.clear();
  }

  clear() {
    this.currOP = "";
    this.prevOP = "";
    this.operation = undefined;
  }

  delete() {
    this.currOP = this.currOP.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currOP.includes(".")) return;
    if(this.currOP.length > 12) return;
    this.currOP = this.currOP.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.operation === "") return;

    if (this.prevOP !== "") {
      this.compute();
    }

    this.operation = operation;
    this.prevOP = this.currOP;
    this.currOP = "";
  }

  currStatus() {
    if(this.currOP === '') {
      this.currOP = 0;
    }
  }


  percent() {
    if (this.currOP === "") return;

    let p = parseFloat(this.currOP) / 100;
    this.currOP = p;
  }

  plusMinus() {
    let num = parseFloat(this.currOP);
    let mathSign = Math.sign(num);

    console.log(typeof mathSign);
    // alert(Math.abs(num));
    switch (mathSign) {
      case 1:
        this.currOP = -Math.abs(num);
        break;
      case -1:
        this.currOP = Math.abs(num);
        break;
    }
  }


  compute() {
    let computation;
    const prev = parseFloat(this.prevOP);
    const current = parseFloat(this.currOP);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "/":
        computation = prev / current;
        break;
      case "x":
        computation = prev * current;
        break;
      default:
        return;
    }
    if(computation.toString().length > 12) {
      this.currOP = Number.parseFloat(computation).toExponential(4);
    } else {
      this.currOP = computation;
    }
    
    
    this.operation = undefined;
    this.prevOP = "";
  }


  updateDisplay() {
    this.currOpText.innerText = this.currOP;

    if (this.operation != null) {
      this.prevOpText.innerText = `${this.prevOP} ${this.operation}`;
      
    } else {
      this.prevOpText.innerText = "";
    }
  }

  checkCurrText() {
    if(this.currOpText.innerText === '') {
      document.querySelector('.del-button').classList.remove('delC');
    } else {
      document.querySelector('.del-button').classList.add('delC');
    }
  }

}


const numbers = document.querySelectorAll(".nBox");
const funcs = document.querySelectorAll(".box");
const clearButton = funcs[0];
const percentButton = funcs[1];
const opButtons = document.querySelectorAll(".oBox");
const equalsButton = funcs[4];
const deciButton = funcs[3];
const delButton = document.querySelector('.del-button');
const plusMinusButton = funcs[2];
const prevOpText = document.querySelector(".preview-op");
const currOpText = document.querySelector(".current-op");
const time = document.querySelector('.time');



const calc = new Calculator(prevOpText, currOpText);

numbers.forEach((but) => {
  but.addEventListener("click", () => {
    calc.appendNumber(but.innerText);
    calc.updateDisplay();
    calc.checkCurrText();
  });
});

deciButton.addEventListener("click", () => {
  calc.appendNumber(deciButton.innerText);
  calc.updateDisplay();
});

opButtons.forEach((but) => {
  but.addEventListener("click", () => {
    calc.currStatus();
    calc.chooseOperation(but.innerText);
    calc.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calc.compute();
  calc.updateDisplay();
});

clearButton.addEventListener("click", () => {
  calc.clear();
  calc.updateDisplay();
  calc.checkCurrText();
});

percentButton.addEventListener("click", () => {
  calc.percent();
  calc.updateDisplay();
});

plusMinusButton.addEventListener("click", () => {
  calc.plusMinus();
  calc.updateDisplay();
});

delButton.addEventListener("click", () => {
  calc.delete();
  calc.updateDisplay();
  calc.checkCurrText();
});

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
time.innerHTML = formatAMPM(new Date);
setInterval(() => {
  time.innerHTML = formatAMPM(new Date);},10000);

