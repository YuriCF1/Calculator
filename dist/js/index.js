"use strict";
const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('[data-op]');
const resultadoDiplay = document.getElementById('calc');
const contaDisplay = document.getElementById('currentDisplay');
const RDisplay = document.getElementById('result');
numeros.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let numeroTecla = target.textContent;
        console.log(numeroTecla);
    });
});
