"use strict";
const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const botoes = document.querySelectorAll('.button');
const deleteAll = document.querySelector('[data-int="delete-all"]');
const deleteOne = document.getElementById('delete');
const resultadoDisplay = document.getElementById('calc');
const contaDisplay = document.getElementById('currentDisplay');
const RDisplay = document.getElementById('result');
let display1 = contaDisplay.innerHTML;
document.getElementById('equal').onclick = () => {
    contaDisplay.innerHTML = '';
};
let newNumber = false;
numeros.forEach((num) => {
    num.addEventListener('click', (e) => {
        newNumber = true;
    });
});
botoes.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let numeroTecla = target.dataset.int;
        let classN = target.classList[2];
        console.log(classN);
        console.log(newNumber);
        mostraDisplayAtual(numeroTecla, classN);
        console.log(contaDisplay.innerHTML.length);
    });
});
operadores.forEach((op) => {
    op.addEventListener('click', (e) => {
        newNumber = false;
        console.log(newNumber);
        calcula(contaDisplay.innerHTML);
    });
});
var resultado;
const mostraDisplayAtual = (numeros, op) => {
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
    console.log(contaDisplay.innerHTML.length);
    if (contaDisplay.innerHTML.length >= 2) {
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
deleteAll === null || deleteAll === void 0 ? void 0 : deleteAll.addEventListener('click', (e) => {
    console.log('delete');
    contaDisplay.innerHTML = '';
    resultadoDisplay.innerHTML = '';
});
deleteOne === null || deleteOne === void 0 ? void 0 : deleteOne.addEventListener('click', (e) => {
    let allCounting = contaDisplay.innerHTML;
    let lastCaracter = allCounting.substring(0, allCounting.length - 1);
    contaDisplay.innerHTML = lastCaracter;
});
