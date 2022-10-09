"use strict";
const numbers = document.querySelectorAll('.buttons-n');
const mainDisplay = document.getElementById('currentDisplay');
const operator = document.querySelectorAll('[data-op]');
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let targetText = target.textContent;
        let num = Number(target.textContent);
        showsOnDisplay(targetText);
        console.log(target);
    });
});
operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        let target = e.target;
        let targetOp = target.dataset.op;
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
                console.log('Soma');
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
function showsOnDisplay(targetText) {
    console.log(mainDisplay.innerHTML);
    mainDisplay.innerHTML += targetText;
}
function Sums(num) {
    console.log(num);
}
