const TOTAL_DIVS = 20;
const mainContainer = document.querySelector('.container');
const digits = ['C', '( )', '%', '/', 7, 8, 9, 'x', 4, 5, 6,
                        '-', 1, 2, 3, '+', '+/-', 0, '.', '='];

for (let i = 0; i < TOTAL_DIVS; i++) {
    const div = document.createElement('div');
    mainContainer.append(div);
    div.classList.add('box');
    div.innerHTML = digits[i];
}


