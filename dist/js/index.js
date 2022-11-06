"use strict";
const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const botoes = document.querySelectorAll('.button');
const deleteAll = document.querySelector('[data-int="delete-all"]');
const deleteOne = document.getElementById('delete');
const resultadoDisplay = document.getElementById('calc');
const contaDisplay = document.getElementById('currentDisplay');
const equal = document.getElementById('equal');
let displayCount = contaDisplay.innerHTML;
let newNumber;
let newOperator = true;
numeros.forEach((num) => {
    num.addEventListener('click', (e) => {
        newNumber = true;
    });
});
botoes.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let numeroTecla = target.dataset.int;
        if (newOperator) {
            mostraDisplayAtual(numeroTecla);
        }
        else {
            resultadoDisplay.innerHTML = '';
            mostraDisplayAtual(numeroTecla);
        }
    });
});
operadores.forEach((op) => {
    op.addEventListener('click', (e) => {
        newNumber = false;
        newOperator = true;
        calcula(contaDisplay.innerHTML);
    });
});
var resultado;
const mostraDisplayAtual = (numeros) => {
    if (newNumber) {
        contaDisplay.innerHTML += numeros;
    }
    else {
        contaDisplay.innerHTML = numeros;
    }
};
const calcula = (contaDis) => {
    mostraDisplyResult(contaDis);
};
const mostraDisplyResult = (numerosDisplay = '0') => {
    let soNumeros = numerosDisplay.slice(0, -1);
    if (contaDisplay.innerHTML.length >= 2) {
        let result = eval(resultadoDisplay.innerHTML + soNumeros);
        let openasOperador = numerosDisplay.charAt(numerosDisplay.length - 1);
        contaDisplay.innerHTML = openasOperador;
        if (resultadoDisplay.innerHTML != '') {
            let concatenando = resultadoDisplay.innerHTML.concat(soNumeros);
            let novoResultado = eval(concatenando).toString();
            resultadoDisplay.innerHTML = novoResultado;
            if (novoResultado = '=') {
                contaDisplay.innerHTML = '';
                newOperator = false;
            }
        }
        else {
            resultadoDisplay.innerHTML = result;
        }
    }
    else {
        contaDisplay.innerHTML = numerosDisplay;
    }
};
deleteAll === null || deleteAll === void 0 ? void 0 : deleteAll.addEventListener('click', (e) => {
    contaDisplay.innerHTML = '';
    resultadoDisplay.innerHTML = '';
});
deleteOne === null || deleteOne === void 0 ? void 0 : deleteOne.addEventListener('click', (e) => {
    let allCounting = contaDisplay.innerHTML;
    let lastCaracter = allCounting.substring(0, allCounting.length - 1);
    contaDisplay.innerHTML = lastCaracter;
});
