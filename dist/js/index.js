"use strict";
const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('[data-op]');
const botoes = document.querySelectorAll('button');
const resultadoDiplay = document.getElementById('calc');
const contaDisplay = document.getElementById('currentDisplay');
const RDisplay = document.getElementById('result');
botoes.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let numeroTecla = target.dataset.int;
        mostraDisplayAtual(numeroTecla);
    });
});
const mostraDisplayAtual = (numeros) => {
    let escrito = contaDisplay.innerHTML += numeros;
    calcula(escrito);
    return escrito;
};
const calcula = (conta) => {
    let res = conta;
    let soN = res.slice(0, -1);
    console.log(soN);
    mostraDisplyResult(soN);
};
const mostraDisplyResult = (ultimaConta) => {
    let result = eval(ultimaConta);
    console.log(result);
    resultadoDiplay.innerHTML = result;
};
