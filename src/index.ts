const numbersBtn = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const allButtons = document.querySelectorAll('.button');

const equal = document.getElementById('equal');

const deleteAll = document.querySelector('[data-int="delete-all"]');
const deleteOne = document.getElementById('delete');

const resultadoDisplay = document.getElementById('calc') as HTMLInputElement;
const contaDisplay = document.getElementById('currentDisplay');

//Variables____________________
let newNumber: boolean;
let newOperator: boolean = true;
let dotClicked: boolean = false;

//Events on buttons____________

//Verify is the first click after the equal sign, if it is a operator or not.
//If its not, restarts another acount
const operators = ['/', '%', 'root', '*', '-', '+'];
const verify1Caracter = (cara: string) => {
    for (var i = 0; i < operators.length; i++) {
        if (cara.substring(0, 1) === operators[i]) {
            newOperator = true
        }
    }
}

//Adding the event of click, in every button
allButtons.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let numeroTecla = target.dataset.int;
        verifyDot();

        if (numeroTecla === '.' && dotClicked) { //Não permite mais de um ponto por conta
            return
        } else {
            mostraDisplayAtual(numeroTecla!)
        }
    })
})

//Adding the event of click, just in the numbers
numbersBtn.forEach((num) => {
    num.addEventListener('click', (e) => {
        newNumber = true;
    })
})

//Operators
operadores.forEach((op) => {
    op.addEventListener('click', (e) => {
        newNumber = false;
        verify1Caracter(contaDisplay!.innerHTML)

        if (newOperator) {
            calcula(contaDisplay!.innerHTML);
        } else {
            resultadoDisplay!.innerHTML = '';
            calcula(contaDisplay!.innerHTML);
        }
        newOperator = false;
    })
})

//Functions to manage________________

//Shows the current math
const mostraDisplayAtual = (numeros: string) => {
    if (newNumber) {
        contaDisplay!.innerHTML += numeros;
    } else {
        contaDisplay!.innerHTML = numeros;
    }
    verifyEqual();
}

//Verify if its equal sign, to erase it from the display
const verifyEqual = (equal?: string) => {
    if (equal === '=' || contaDisplay!.innerHTML === '=') {
        contaDisplay!.innerHTML = '';
    }
}

//Verify if a dot was already used in the count
const verifyDot = () => {
    let conta = contaDisplay!.innerHTML;
    for (var i = 0; i < conta.length; i++) {
        if (conta[i] === '.') {
            dotClicked = true
        }
    }
}

//Functions to do the math_________________
const calcula = (contaDis: string) => {
    let firstCaracter = contaDisplay!.innerHTML.substring(0, 1);
    let lastCaracter = contaDisplay!.innerHTML.slice(-1);

    if (firstCaracter === '%' || firstCaracter === '√') {
        percentageAndRoot(contaDisplay!.innerHTML, firstCaracter) //Create another function for the root?
        contaDisplay!.innerHTML = lastCaracter;
    } else {
        normalCount(contaDis)
    }
    dotClicked = false;
}

//Special counts__________________________________________
const percentageAndRoot = (numerosDaConta: string, firstOp: string) => {
    if (firstOp === "%") {
        if (resultadoDisplay!.innerHTML.length === 0) {
            alert('Adicione o valor total, e depois a porcentagem desejada')
            contaDisplay!.innerHTML = '';
        } else if (resultadoDisplay!.innerHTML.length > 0) {
            if (numerosDaConta.substring(0, 1) === '%') {
                let soNumeros = numerosDaConta.slice(1, -1);

                newOperator = false;

                let concatena = resultadoDisplay!.innerHTML + "*" + `(${soNumeros}/100)`
                let conta = eval(concatena).toString();
                resultadoDisplay!.innerHTML = conta;
            }
        }
    } else if (firstOp === "√") {
        if (resultadoDisplay!.innerHTML.length === 0) {
            if (numerosDaConta.substring(0, 1) === '√') {
                let soNumeros = Number(numerosDaConta.slice(1, -1));
                let raiz = Math.sqrt(soNumeros).toString();
                resultadoDisplay!.innerHTML = raiz;
                // }
                newOperator = false;
                verifyEqual(firstOp)
            }
        } else if (resultadoDisplay!.innerHTML.length > 0) {

        }
    }
    contaDisplay!.innerHTML = firstOp;
}

//Function to regular counting_______________
const normalCount = (numerosDisplay: string = '0') => {
    let soNumeros = numerosDisplay.slice(0, -1);

    if (contaDisplay!.innerHTML.length >= 2) {

        // Making the math 
        let resultInit = parseFloat(resultadoDisplay!.innerHTML + soNumeros).toString();

        //Getting the last operator clicked to add infront of the next count
        let openasOperador = numerosDisplay.charAt(numerosDisplay.length - 1)
        contaDisplay!.innerHTML = openasOperador;

        //Concat the current math with the last result
        if (resultadoDisplay!.innerHTML != '') {
            let firstCaracter = soNumeros.slice(1, 2);
            let secondCaracter = soNumeros.slice(2, 3);

            //Checks if theres more than one zero in front of it
            if (firstCaracter === '0' && secondCaracter === '0') {
                soNumeros = openasOperador + parseFloat(soNumeros).toString()
            }

            let concatenando = resultadoDisplay!.innerHTML + soNumeros;

            //Criar função que seja acionada para quando for um operador que não entre no ritmo do e val
            let novoResultado = parseFloat(concatenando).toString();   
            let resultadoFiltrado = calculates(concatenando);
            console.log('a', calculates(concatenando));

            function calculates(conta: any) {
                return new Function('return ' + conta)();
            }

            resultadoDisplay!.innerHTML = resultadoFiltrado; //Resultado final 

            //Tirando o símbolo de 'igual', caso seja clicado
            if (novoResultado === '=') {
                contaDisplay!.innerHTML = ''
            }

        } else { //Manda o resultado na primeira conta|| Redundante?
            resultadoDisplay!.innerHTML = resultInit;
        }

        verifyEqual(openasOperador)
    } else {
        contaDisplay!.innerHTML = numerosDisplay
    }
}

//Deleting display______________
deleteAll?.addEventListener('click', (e) => {
    contaDisplay!.innerHTML = ''
    resultadoDisplay!.innerHTML = '';

})

deleteOne?.addEventListener('click', (e) => {
    let allCounting = contaDisplay!.innerHTML;
    let lastCaracter = allCounting.substring(0, allCounting.length - 1);
    contaDisplay!.innerHTML = lastCaracter;
})
