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






funcs[0].addEventListener("click", () => {
    clear();
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
      num12(item);
      let userIn = document.querySelector('.userInput').value;
      userIn += item.innerHTML;  

        // digits.forEach(i => {
        //     if (
        // });
        
  })});

  function num12(val) {
    let userInput = document.querySelector('.userInput');
    userInput.value += val.innerHTML;
}


function clear() {
    let userInput = document.querySelector('.userInput');
    userInput.value = "";
}