const allNumbers = document.querySelectorAll('.buttons-n');
const allButtons = document.querySelectorAll('.button');
const allOperators = document.querySelectorAll('.buttons-o');

const equal = document.getElementById('equal');

const deleteAll = document.querySelector('[data-int="delete-all"]');
const deleteOne = document.getElementById('delete');

const resultadoDisplay = document.getElementById('calc') as HTMLInputElement;
const contaDisplay = document.getElementById('currentDisplay');


//Variables___________________
let newNumber: boolean;
let newOperator: boolean = true;
let dotClicked: boolean = false;

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

//Adding the event of click_________
allNumbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        newNumber = true;
    })
})

allButtons.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let numeroTecla = target.dataset.int;
        verifyDot();
        
        // if (numeroTecla === '.' && dotClicked) { //Não permite mais de um ponto por conta
        //     return
        // } else {
            //     mostraDisplayAtual(numeroTecla!)
            // }
            
            allBtn(numeroTecla!)
        })
    })
    
    function allBtn(key: string) {
    verifyDot();    
    if (key === '.' && dotClicked) { //Não permite mais de um ponto por conta
        return
    } else {
        mostraDisplayAtual(key!)
    }

}

allOperators.forEach((op) => {
    op.addEventListener('click', (e) => {
        // newNumber = false;
        // verify1Caracter(contaDisplay!.innerHTML)

        // if (newOperator) {
        //     calcula(contaDisplay!.innerHTML);
        // } else {
        //     resultadoDisplay!.innerHTML = '';
        //     calcula(contaDisplay!.innerHTML);
        // }
        // newOperator = false;
        allOp()
    })
})

function allOp() {
    newNumber = false;
    verify1Caracter(contaDisplay!.innerHTML)

    if (newOperator) {
        calcula(contaDisplay!.innerHTML);
    } else {
        resultadoDisplay!.innerHTML = '';
        calcula(contaDisplay!.innerHTML);
    }
    newOperator = false;

}

//Functions to shows and to verify_________

//Shows current count
const mostraDisplayAtual = (numeros: string) => {
    if (newNumber) {
        contaDisplay!.innerHTML += numeros;
    } else {
        contaDisplay!.innerHTML = numeros;
    }
    verifyEqual();
}

//Verify if the equal sign was clicked and deletes it
const verifyEqual = (equal?: string) => {
    if (equal === '=' || contaDisplay!.innerHTML === '=') {
        contaDisplay!.innerHTML = '';
    }
}

//Verify if a dot was already used in the current count
const verifyDot = () => {
    let conta = contaDisplay!.innerHTML;
    for (var i = 0; i < conta.length; i++) {
        if (conta[i] === '.') {
            dotClicked = true
        }
    }
}

//Funtions to calculate_______________
const calcula = (contaDis: string) => {
    let firstCaracter = contaDisplay!.innerHTML.substring(0, 1);
    let lastCaracter = contaDisplay!.innerHTML.slice(-1);

    if (firstCaracter === '%' || firstCaracter === '√') {
        porcentageAndRoot(contaDisplay!.innerHTML, firstCaracter) //Criar outra função só para a raiz?
        contaDisplay!.innerHTML = lastCaracter;
    } else {
        normalCount(contaDis)
    }
    dotClicked = false;
}

//Special counts__________________________________________
const porcentageAndRoot = (numerosDaConta: string, firstOp: string) => {
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

                newOperator = false;
                verifyEqual(firstOp)
            }
        } else if (resultadoDisplay!.innerHTML.length > 0) {

        }
    }
    contaDisplay!.innerHTML = firstOp;
}

//Function to regular count_______________________________________________________________
const normalCount = (numerosDisplay: string = '0') => {
    let soNumeros = numerosDisplay.slice(0, -1);

    if (contaDisplay!.innerHTML.length >= 2) {

        // Making the math 
        let resultInit = parseFloat(resultadoDisplay!.innerHTML + soNumeros).toString();

        //Last Operator
        let openasOperador = numerosDisplay.charAt(numerosDisplay.length - 1)
        contaDisplay!.innerHTML = openasOperador;

        //Concat with the last operator, to put it again in the display of the count
        if (resultadoDisplay!.innerHTML != '') {
            let firstCaracter = soNumeros.slice(1, 2);
            let secondCaracter = soNumeros.slice(2, 3);

            if (firstCaracter === '0' && secondCaracter === '0') {
                soNumeros = openasOperador + parseFloat(soNumeros).toString()
            }

            let concatenando = resultadoDisplay!.innerHTML + soNumeros;

            let novoResultado = parseFloat(concatenando).toString();
            let resultadoFiltrado = calculates(concatenando);

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

//Delete functions_____________________________________
deleteAll?.addEventListener('click', (e) => {
    contaDisplay!.innerHTML = ''
    resultadoDisplay!.innerHTML = '';
})

deleteOne?.addEventListener('click', (e) => {
    let allCounting = contaDisplay!.innerHTML;
    let lastCaracter = allCounting.substring(0, allCounting.length - 1);
    contaDisplay!.innerHTML = lastCaracter;
})

//Criar função nos eventListeners?
window.onkeydown = function (ev) {
    let key = ev.key
    console.log(key);

    // allBtn(key)

    switch (key) {
        case '1':
            newNumber = true;
            allBtn(key)
            break
        case '2':
            newNumber = true;
            allBtn(key)

            break
        case '3':
            newNumber = true;
            allBtn(key)

            break
        case '4':
            newNumber = true;
            allBtn(key)

            break
        case '5':
            newNumber = true;
            allBtn(key)

            break
        case '6':
            newNumber = true;
            allBtn(key)

            break
        case '7':
            newNumber = true;
            allBtn(key)

            break
        case '8':
            newNumber = true;
            allBtn(key)

            break
        case '9':
            newNumber = true;
            allBtn(key)

            break
        case '0':
            newNumber = true;
            allBtn(key)
            break

        //Operators_________
        case '+':
            allBtn(key)
            allOp()
            break
        case '-':
            allBtn(key)
            allOp()
            break
        case '*':
            allBtn(key)
            allOp()
            break
        case '/':
            allBtn(key)
            allOp()
            break
        case 'Enter':
            allBtn("=") 
            allOp()
            break

        case '.':
            newNumber = true;
            allBtn(key) 
            break
        case ',':
            newNumber = true;
            allBtn('.') 
            break
    }
}
