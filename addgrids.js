const TOTAL_DIVS = 20;
const IS_NUMBER = typeof(0);

const mainContainer = document.querySelector('.container');
const digits = ['C', '( )', '%', '/', 7, 8, 9, 'x', 4, 5, 6,
                        '-', 1, 2, 3, '+', '+/-', 0, '.', '='];

for (let i = 0; i < TOTAL_DIVS; i++) {
    const div = document.createElement('div');
    mainContainer.append(div);
    if (typeof(digits[i]) === IS_NUMBER) {
        div.classList.add('nBox');
        div.textContent = digits[i];
    } else {
div.classList.add('box');
    div.textContent = digits[i];
    }
    
    
    
}

const funcs = document.querySelectorAll('.box')

console.log(funcs);




funcs[6].addEventListener("click", () => {
    checkArray();
    numbers[0] = "+";
    addNums();
  displayValue = '';
  
})

funcs[5].addEventListener("click", () => {
    checkArray();
    numbers[0] = "-";
    addNums();
  displayValue = '';
  
})

funcs[4].addEventListener("click", () => {
    checkArray();
    numbers[0] = "*";
    addNums();
  displayValue = '';
  
})

funcs[3].addEventListener("click", () => {
    checkArray();
    numbers[0] = "/";
    addNums();
  displayValue = '';
  
})

funcs[9].addEventListener("click", () => {
    addNums();
    checkArray();
    console.log(ans);
    
  console.log(numbers);
  
})



// funcs.forEach(item => {
    
//     item.addEventListener('click', () => {
//         console.log(item);
    
//     switch(item) {
//         case 0:
//             alert("hi");
//             break;
//     }

        
//   })});

document.querySelectorAll('.nBox').forEach(item => {
    
    item.addEventListener('click', () => {
  
        disA.innerHTML = displayValue;
        disA.innerHTML += item.innerHTML;
    
        if (disA.innerHTML === '') {
          alert("in needed");
        } else {
          displayValue = disA.innerHTML;
        }
        
  })});


//   but.forEach(x => {
//     x.addEventListener("click", () => {
//       p.innerHTML = displayValue;
//       p.innerHTML += x.innerHTML;
  
//       if (p.innerHTML === '') {
//         alert("in needed");
//       } else {
//         displayValue = p.innerHTML;
//       }
//     });
//   });



//   function num12(val) {
//     let userInput = document.querySelector('.userInput');
//     userInput.value += val.innerHTML;
// }


// function clear() {
//     let userInput = document.querySelector('.userInput');
//     userInput.value = "";
// }