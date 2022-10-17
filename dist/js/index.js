"use strict";
const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const botoes = document.querySelectorAll('button');
const resultadoDisplay = document.getElementById('calc');
const contaDisplay = document.getElementById('currentDisplay');
const RDisplay = document.getElementById('result');
botoes.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let numeroTecla = target.dataset.int;
        mostraDisplayAtual(numeroTecla);
    });
});
operadores.forEach((op) => {
    op.addEventListener('click', (e) => {
        calcula(contaDisplay.innerHTML);
    });
});
var resultado;
const mostraDisplayAtual = (numeros) => {
    let escrito = contaDisplay.innerHTML += numeros;
    return escrito;
};
const calcula = (contaDis) => {
    let temResultado = contaDisplay.innerHTML != '';
    let resultDisplay = contaDisplay.innerHTML;
    if (temResultado) {
        let soNumeros = contaDis.slice(0, -1);
        console.log(soNumeros, resultDisplay);
        mostraDisplyResult(soNumeros, resultDisplay);
    }
    let operador = contaDisplay.innerHTML;
    let openasOperador = operador.charAt(operador.length - 1);
    contaDisplay.innerHTML = openasOperador;
    RDisplay.innerHTML = 'Result';
};
const mostraDisplyResult = (ultimaConta, resultDisplay = '') => {
    let juntandoOpercoes = ultimaConta.concat(resultDisplay);
    console.log(juntandoOpercoes);
    let result = eval(ultimaConta);
    resultado = result;
    resultadoDisplay.innerHTML = result;
};
