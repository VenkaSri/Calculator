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

