"use strict";
const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const botoes = document.querySelectorAll('.button');
const deleteAll = document.querySelector('[data-int="delete-all"]');
const deleteOne = document.getElementById('delete');
const resultadoDisplay = document.getElementById('calc');
const contaDisplay = document.getElementById('currentDisplay');
const equal = document.getElementById('equal');
let newNumber;
let newOperator = true;
const operators = ['/', '%', 'root', '*', '-', '+'];
const verify1Caracter = (cara) => {
    for (var i = 0; i < operators.length; i++) {
        if (cara.substring(0, 1) === operators[i]) {
            newOperator = true;
        }
    }
};
numeros.forEach((num) => {
    num.addEventListener('click', (e) => {
        newNumber = true;
    });
});
botoes.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let numeroTecla = target.dataset.int;
        mostraDisplayAtual(numeroTecla);
    });
});
operadores.forEach((op) => {
    op.addEventListener('click', (e) => {
        newNumber = false;
        verify1Caracter(contaDisplay.innerHTML);
        if (newOperator) {
            calcula(contaDisplay.innerHTML);
        }
        else {
            resultadoDisplay.innerHTML = '';
            calcula(contaDisplay.innerHTML);
        }
        newOperator = false;
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
    verifyEqual();
};
const verifyEqual = (equal) => {
    if (equal === '=' || contaDisplay.innerHTML === '=') {
        contaDisplay.innerHTML = '';
    }
};
const calcula = (contaDis) => {
    let firstCaracter = contaDisplay.innerHTML.substring(0, 1);
    if (firstCaracter === '%' || firstCaracter === 'r') {
        porcentage(contaDisplay.innerHTML, firstCaracter);
    }
    else {
        normalCount(contaDis);
    }
};
const porcentage = (numerosDaConta, op) => {
    if (op === "%") {
        if (resultadoDisplay.innerHTML.length === 0) {
            alert('Adicione o valor total, e depois a porcentagem desejada');
            contaDisplay.innerHTML = '';
            console.log('vazio');
        }
        else if (resultadoDisplay.innerHTML.length > 0) {
            if (numerosDaConta.substring(0, 1) === '%') {
                let soNumeros = numerosDaConta.slice(1, -1);
                console.log(soNumeros);
                newOperator = false;
                let concatena = resultadoDisplay.innerHTML + "*" + `(${soNumeros}/100)`;
                let conta = eval(concatena).toString();
                console.log(conta);
            }
        }
    }
    contaDisplay.innerHTML = op;
};
const normalCount = (numerosDisplay = '0') => {
    let soNumeros = numerosDisplay.slice(0, -1);
    if (contaDisplay.innerHTML.length >= 2) {
        let result = eval(resultadoDisplay.innerHTML + soNumeros);
        let openasOperador = numerosDisplay.charAt(numerosDisplay.length - 1);
        contaDisplay.innerHTML = openasOperador;
        if (resultadoDisplay.innerHTML != '') {
            let concatenando = resultadoDisplay.innerHTML.concat(soNumeros);
            let novoResultado = eval(concatenando).toString();
            resultadoDisplay.innerHTML = novoResultado;
            if (novoResultado === '=') {
                contaDisplay.innerHTML = '';
            }
        }
        else {
            resultadoDisplay.innerHTML = result;
        }
        verifyEqual(openasOperador);
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
