"use strict";
const numbers = document.querySelectorAll('.buttons-n');
const operator = document.querySelectorAll('[data-op]');
const calcDisplay = document.getElementById('calc');
const mainDisplay = document.getElementById('currentDisplay');
let displayNumber = mainDisplay.textContent;
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        var targetText = target.textContent;
        showsOnDisplay(displayNumber, targetText);
    });
});
operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        let target = e.target;
        var targetOp = target.dataset.op;
        showsOnDisplay(displayNumber, targetOp);
        showsCalcDisplay(mainDisplay.innerHTML);
    });
});
function showsOnDisplay(displayNumber = '', targetInt = '') {
    mainDisplay.innerHTML += `${displayNumber}${targetInt}`;
}
function showsCalcDisplay(result) {
    let cleanValue = result.substring(0, result.length - 1);
    console.log(cleanValue);
    let toMath = eval(cleanValue);
    let finalResult = toMath.toString();
    calcDisplay.innerHTML = finalResult;
}
