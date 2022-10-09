"use strict";
const numbers = document.querySelectorAll('.buttons-n');
const mainDisplay = document.getElementById('currentDisplay');
const operator = document.querySelectorAll('[data-op]');
let numD = mainDisplay.textContent;
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let targetText = target.textContent;
        showsOnDisplay(numD, targetText);
    });
});
operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        let target = e.target;
        var targetOp = target.dataset.op;
        switch (targetOp) {
            case "/":
                console.log('Dividir');
                break;
            case "per":
                console.log('Porcentagem');
                break;
            case "root":
                console.log('Raiz');
                break;
            case "+":
                showsOnDisplay(numD, targetOp);
                Sums(numD, targetOp);
                break;
            case "-":
                console.log('Menos');
                break;
            case "x":
                console.log('Multiplicação');
                break;
        }
    });
});
function showsOnDisplay(numD = '', targetParse = '') {
    if (mainDisplay.textContent != numD || targetParse) {
        mainDisplay.innerHTML += `${numD}${targetParse}`;
    }
}
function Sums(numD, targetOp) {
    console.log(numD, targetOp + 'A');
}
