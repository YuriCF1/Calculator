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
        calcula(contaDisplay.innerHTML, resultadoDisplay.innerHTML);
    });
});
var resultado;
const mostraDisplayAtual = (numeros) => {
    let escrito = contaDisplay.innerHTML += numeros;
    return escrito;
};
const calcula = (contaDis, resultDis = '') => {
    mostraDisplyResult(contaDis, resultDis);
};
const mostraDisplyResult = (numerosDisplay = '0', resultDisplay = '') => {
    let soNumeros = numerosDisplay.slice(0, -1);
    let result = eval(soNumeros);
    console.log(result);
    let openasOperador = numerosDisplay.charAt(numerosDisplay.length - 1);
    contaDisplay.innerHTML = openasOperador;
    let string = result.toString();
    if (resultadoDisplay.innerHTML != '') {
        let concatenando = resultadoDisplay.innerHTML.concat(soNumeros);
        console.log('result', concatenando);
        let novoResultado = eval(concatenando).toString();
        console.log(novoResultado);
        resultadoDisplay.innerHTML = novoResultado;
    }
    else {
        resultadoDisplay.innerHTML = result;
    }
};
