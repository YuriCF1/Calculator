"use strict";
const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const botoes = document.querySelectorAll('.button');
const deleteAll = document.querySelector('[data-int="delete-all"]');
const deleteOne = document.getElementById('delete');
const resultadoDisplay = document.getElementById('calc');
const contaDisplay = document.getElementById('currentDisplay');
const equal = document.getElementById('equal');
let firstClickValid;
let newNumber;
let newOperator = true;
let dot = false;
const operators = ['/', '%', 'root', '*', '-', '+'];
const verify1Caracter = (cara) => {
    for (var i = 0; i < operators.length; i++) {
        if (cara.substring(0, 1) === operators[i]) {
            newOperator = true;
        }
    }
};
const verifyInvalidFirst = (key) => {
    if (key === '.' || key === '0') {
        return firstClickValid = true;
    }
    else {
        return firstClickValid = false;
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
        verifyDot();
        if (numeroTecla === '.' && dot) {
            return;
        }
        else {
            mostraDisplayAtual(numeroTecla);
        }
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
const verifyDot = () => {
    let conta = contaDisplay.innerHTML;
    for (var i = 0; i < conta.length; i++) {
        if (conta[i] === '.') {
            dot = true;
        }
    }
};
const calcula = (contaDis) => {
    let firstCaracter = contaDisplay.innerHTML.substring(0, 1);
    let lastCaracter = contaDisplay.innerHTML.slice(-1);
    if (firstCaracter === '%' || firstCaracter === '√') {
        porcentage(contaDisplay.innerHTML, firstCaracter);
        contaDisplay.innerHTML = lastCaracter;
    }
    else {
        normalCount(contaDis);
    }
    dot = false;
};
const porcentage = (numerosDaConta, firstOp) => {
    if (firstOp === "%") {
        if (resultadoDisplay.innerHTML.length === 0) {
            alert('Adicione o valor total, e depois a porcentagem desejada');
            contaDisplay.innerHTML = '';
        }
        else if (resultadoDisplay.innerHTML.length > 0) {
            if (numerosDaConta.substring(0, 1) === '%') {
                let soNumeros = numerosDaConta.slice(1, -1);
                newOperator = false;
                let concatena = resultadoDisplay.innerHTML + "*" + `(${soNumeros}/100)`;
                let conta = eval(concatena).toString();
                resultadoDisplay.innerHTML = conta;
            }
        }
    }
    else if (firstOp === "√") {
        if (resultadoDisplay.innerHTML.length === 0) {
            if (numerosDaConta.substring(0, 1) === '√') {
                let soNumeros = Number(numerosDaConta.slice(1, -1));
                let raiz = Math.sqrt(soNumeros).toString();
                resultadoDisplay.innerHTML = raiz;
                newOperator = false;
                verifyEqual(firstOp);
            }
        }
        else if (resultadoDisplay.innerHTML.length > 0) {
        }
    }
    contaDisplay.innerHTML = firstOp;
};
const normalCount = (numerosDisplay = '0') => {
    let soNumeros = numerosDisplay.slice(0, -1);
    if (contaDisplay.innerHTML.length >= 2) {
        let resultInit = parseFloat(resultadoDisplay.innerHTML + soNumeros).toString();
        let openasOperador = numerosDisplay.charAt(numerosDisplay.length - 1);
        contaDisplay.innerHTML = openasOperador;
        if (resultadoDisplay.innerHTML != '') {
            console.log(resultadoDisplay.innerHTML);
            console.log(soNumeros);
            let concatenando = resultadoDisplay.innerHTML + soNumeros;
            console.log(concatenando);
            let novoResultado = parseFloat(concatenando).toString();
            let a = concatenando;
            console.log('a', calculates(concatenando));
            function calculates(conta) {
                return new Function('return ' + conta)();
            }
            resultadoDisplay.innerHTML = novoResultado;
            if (novoResultado === '=') {
                contaDisplay.innerHTML = '';
            }
        }
        else {
            resultadoDisplay.innerHTML = resultInit;
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
