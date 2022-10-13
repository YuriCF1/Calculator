"use strict";
const numbers = document.querySelectorAll('.buttons-n');
const operator = document.querySelectorAll('[data-op]');
const calcDisplay = document.getElementById('calc');
const mainDisplay = document.getElementById('currentDisplay');
let displayNumber = mainDisplay.textContent;
var clicks = 0;
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let targetText = target.textContent;
        showsOnDisplay(displayNumber, targetText);
        console.log(clicks);
        verifyTheCounting(clicks);
    });
});
operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        let target = e.target;
        let targetOp = target.dataset.op;
        clicks += 1;
        showsOnDisplay(displayNumber, targetOp);
        console.log(clicks);
    });
});
function showsOnDisplay(displayNumber = '', targetInt = '') {
    mainDisplay.innerHTML += `${displayNumber}${targetInt}`;
}
function verifyTheCounting(clicks) {
    if (clicks <= 1) {
        makeCounts(mainDisplay.innerHTML);
    }
    else {
        makeCounts(calcDisplay.innerHTML);
    }
}
function makeCounts(result) {
    console.log(result);
    let toMath = eval(result);
    let finalResult = toMath.toString();
    calcDisplay.innerHTML = finalResult;
}
