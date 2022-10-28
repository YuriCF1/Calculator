"use strict";
const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const botoes = document.querySelectorAll('button');
const resultadoDisplay = document.getElementById('calc');
const contaDisplay = document.getElementById('currentDisplay');
const RDisplay = document.getElementById('result');
numeros.forEach((num) => {
    num.addEventListener('click', (e) => {
    });
});
botoes.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let numeroTecla = target.dataset.int;
        let classN = target.classList[2];
        console.log(classN);
        mostraDisplayAtual(numeroTecla, classN);
    });
});
operadores.forEach((op) => {
    op.addEventListener('click', (e) => {
        calcula(contaDisplay.innerHTML);
    });
});
var resultado;
const mostraDisplayAtual = (numeros, op) => {
    contaDisplay.innerHTML += numeros;
};
const calcula = (contaDis) => {
    mostraDisplyResult(contaDis);
};
const mostraDisplyResult = (numerosDisplay = '0') => {
    if (contaDisplay.innerHTML.length >= 1) {
        let soNumeros = numerosDisplay.slice(0, -1);
        let result = eval(resultadoDisplay.innerHTML + soNumeros);
        let openasOperador = numerosDisplay.charAt(numerosDisplay.length - 1);
        contaDisplay.innerHTML = openasOperador;
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
    }
    else {
        contaDisplay.innerHTML = numerosDisplay;
    }
};
