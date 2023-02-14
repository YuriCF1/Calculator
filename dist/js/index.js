"use strict";
const allNumbers = document.querySelectorAll('.buttons-n');
const allButtons = document.querySelectorAll('.button');
const allOperators = document.querySelectorAll('.buttons-o');
const equal = document.getElementById('equal');
const deleteAll = document.querySelector('[data-int="delete-all"]');
const deleteOne = document.getElementById('delete');
const resultadoDisplay = document.getElementById('calc');
const contaDisplay = document.getElementById('currentDisplay');
let larguraDispositivo = window.innerWidth;
if ((larguraDispositivo) => 390) {
    document.documentElement.style.scale = "0.89";
}
let newNumber;
let newOperator = true;
let dotClicked = false;
const operators = ['/', '%', 'root', '*', '-', '+'];
const verify1Caracter = (cara) => {
    for (var i = 0; i < operators.length; i++) {
        if (cara.substring(0, 1) === operators[i]) {
            newOperator = true;
        }
    }
};
allNumbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        newNumber = true;
    });
});
allButtons.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let numeroTecla = target.dataset.int;
        verifyDot();
        allBtn(numeroTecla);
    });
});
function allBtn(key) {
    verifyDot();
    if (key === '.' && dotClicked) {
        return;
    }
    else {
        mostraDisplayAtual(key);
    }
}
allOperators.forEach((op) => {
    op.addEventListener('click', (e) => {
        allOp();
    });
});
function allOp() {
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
}
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
            dotClicked = true;
        }
    }
};
const calcula = (contaDis) => {
    let firstCaracter = contaDisplay.innerHTML.substring(0, 1);
    let lastCaracter = contaDisplay.innerHTML.slice(-1);
    if (firstCaracter === '%' || firstCaracter === '√') {
        porcentageAndRoot(contaDisplay.innerHTML, firstCaracter);
        contaDisplay.innerHTML = lastCaracter;
    }
    else {
        normalCount(contaDis);
    }
    dotClicked = false;
};
const porcentageAndRoot = (numerosDaConta, firstOp) => {
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
            let firstCaracter = soNumeros.slice(1, 2);
            let secondCaracter = soNumeros.slice(2, 3);
            if (firstCaracter === '0' && secondCaracter === '0') {
                soNumeros = openasOperador + parseFloat(soNumeros).toString();
            }
            let concatenando = resultadoDisplay.innerHTML + soNumeros;
            let novoResultado = parseFloat(concatenando).toString();
            let resultadoFiltrado = calculates(concatenando);
            function calculates(conta) {
                return new Function('return ' + conta)();
            }
            resultadoDisplay.innerHTML = resultadoFiltrado;
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
window.onkeydown = function (ev) {
    let key = ev.key;
    switch (key) {
        case '1':
            newNumber = true;
            allBtn(key);
            break;
        case '2':
            newNumber = true;
            allBtn(key);
            break;
        case '3':
            newNumber = true;
            allBtn(key);
            break;
        case '4':
            newNumber = true;
            allBtn(key);
            break;
        case '5':
            newNumber = true;
            allBtn(key);
            break;
        case '6':
            newNumber = true;
            allBtn(key);
            break;
        case '7':
            newNumber = true;
            allBtn(key);
            break;
        case '8':
            newNumber = true;
            allBtn(key);
            break;
        case '9':
            newNumber = true;
            allBtn(key);
            break;
        case '0':
            newNumber = true;
            allBtn(key);
            break;
        case '+':
            allBtn(key);
            allOp();
            break;
        case '-':
            allBtn(key);
            allOp();
            break;
        case '*':
            allBtn(key);
            allOp();
            break;
        case '/':
            allBtn(key);
            allOp();
            break;
        case 'Enter':
            allBtn("=");
            allOp();
            break;
        case '.':
            newNumber = true;
            allBtn(key);
            break;
        case ',':
            newNumber = true;
            allBtn('.');
            break;
    }
};
const copy = document.getElementById('project_Year');
let yearNow = new Date().getFullYear();
console.log(copy);
copy.innerHTML = `&copy; Calculadora - ${yearNow} - yurifdev@gmail.com`;
