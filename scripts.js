
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
    this.currOP = this.currOP.toString().slice(0, -1)
  }


  appendNumber(number) {
    if (number === "." && this.currOP.includes(".")) return;
    this.currOP = this.currOP.toString() + number.toString();
  }

  chooseOperation(operation) {
    if(this.operation === '') return;

    if (this.prevOP !== '') {
      this.compute()
    }

      this.operation = operation;
      this.prevOP = this.currOP;
      this.currOP = "";

    
  }

percent() {
  let p = parseFloat(this.currOP) / 100;
  this.currOP = p;
  
}

brackets() {
  
  this.currOP = `(${this.currOP})`;
  
}


  compute() {
    let computation;
    const prev = parseFloat(this.prevOP);
    const current = parseFloat(this.currOP);
    if(isNaN(prev) || isNaN(current)) return;
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
        return
    }
    this.currOP = computation;
    this.operation = undefined;
    this.prevOP = '';
  }

  updateDisplay() {
    
    this.currOpText.innerText = this.currOP;

    if(this.operation != null) {
      
        this.prevOpText.innerText = `${this.prevOP} ${this.operation}`;
      
      
    } else {
      this.prevOpText.innerText = '';
    }
    
    
  
  }
}


const button = document.querySelector("button");
const numbers = document.querySelectorAll(".nBox");
const funcs = document.querySelectorAll(".box");
const clearButton = funcs[0];
const percentButton = funcs[1];
const opButtons = document.querySelectorAll(".oBox");
const equalsButton = funcs[4];
const deciButton = funcs[3];
const plusMinusButton = funcs[7];
const prevOpText = document.querySelector(".preview-op");
const currOpText = document.querySelector(".current-op");

const calc = new Calculator(prevOpText, currOpText);

numbers.forEach((but) => {
  but.addEventListener("click", () => {
    calc.appendNumber(but.innerText);
    calc.updateDisplay();
  });
});

deciButton.addEventListener("click", () => {
  calc.appendNumber(deciButton.innerText);
  calc.updateDisplay();
});

opButtons.forEach((but) => {
  but.addEventListener("click", () => {
    calc.chooseOperation(but.innerText);
    calc.updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  calc.compute();
  calc.updateDisplay();
})

clearButton.addEventListener('click', () => {
  calc.clear();
  calc.updateDisplay();
})


percentButton.addEventListener('click', () => {
  calc.percent();
  calc.updateDisplay();
})

