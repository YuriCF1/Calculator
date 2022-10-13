"use strict";
const numbers = document.querySelectorAll('.buttons-n');
const operator = document.querySelectorAll('[data-op]');
const calcDisplay = document.getElementById('calc');
const mainDisplay = document.getElementById('currentDisplay');
const result = document.getElementById('result');
let displayNumber = mainDisplay.textContent;
var clicks = 0;
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let numeroTecla = target.textContent;
        showsOnDisplay(displayNumber, numeroTecla, true);
        verifyTheCounting(clicks);
        console.log('Cliado:', clicks);
    });
});
operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        let target = e.target;
        let targetOp = target.dataset.op;
        clicks += 1;
        showsOnDisplay(displayNumber, targetOp, true);
        verifyTheCounting(clicks);
        console.log(clicks);
    });
});
function verifyTheCounting(clicks, targetInt = '') {
    if (clicks <= 1) {
        makeCounts(mainDisplay.innerHTML);
    }
    else {
        showsOnDisplay(mainDisplay.innerHTML, targetInt, false);
    }
}
function showsOnDisplay(displayNumber = '', targetInt = '', Op) {
    if (Op) {
        mainDisplay.innerHTML += `${displayNumber}${targetInt}`;
    }
    else {
        result.innerHTML = 'R';
        mainDisplay.innerHTML = `${displayNumber}${targetInt}`;
    }
}
function makeCounts(result, operator) {
    console.log('Contou:', result);
    let toMath = eval(result);
    let finalResult = toMath.toString();
    calcDisplay.innerHTML = finalResult;
}
