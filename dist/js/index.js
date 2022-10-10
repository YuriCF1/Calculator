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
                showsOnDisplay(displayNumber, targetOp);
                Sums(mainDisplay.innerHTML);
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
function showsOnDisplay(displayNumber = '', targetInt = '') {
    mainDisplay.innerHTML += `${displayNumber}${targetInt}`;
}
function showsCalcDisplay(result) {
    let toMath = eval(result);
    console.log(toMath);
    let finalResult = toMath.toString();
    calcDisplay.innerHTML = finalResult;
}
function Sums(currentValue) {
    let valueToNumber = currentValue.substring(0, currentValue.length - 1);
    showsCalcDisplay(valueToNumber);
}
