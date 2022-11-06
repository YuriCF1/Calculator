const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const botoes = document.querySelectorAll('.button');

const deleteAll = document.querySelector('[data-int="delete-all"]');
const deleteOne = document.getElementById('delete');

const resultadoDisplay = document.getElementById('calc') as HTMLInputElement;
const contaDisplay = document.getElementById('currentDisplay');

const equal = document.getElementById('equal');

let displayCount = contaDisplay!.innerHTML;
let newNumber: boolean;
let newOperator = true;

//Adding the event of click
numeros.forEach((num) => {
    num.addEventListener('click', (e) => {
        newNumber = true;
    })
})

botoes.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let numeroTecla = target.dataset.int;

        //Fazendo contas recomeçarem após o sinal de igualdade
        if (newOperator) {
            mostraDisplayAtual(numeroTecla!)
        } 
        else {
            resultadoDisplay!.innerHTML = ''
            // newOperator = true;
            mostraDisplayAtual(numeroTecla!)
        }
    })
})

operadores.forEach((op) => {
    op.addEventListener('click', (e) => {
        newNumber = false;
        newOperator = true;
        calcula(contaDisplay!.innerHTML);
    })
})

//Functions_______________________________________
var resultado: number;

const mostraDisplayAtual = (numeros: string) => {
    if (newNumber) {
        contaDisplay!.innerHTML += numeros;

    } else {
        contaDisplay!.innerHTML = numeros;
    }
}

const calcula = (contaDis: string) => {
    mostraDisplyResult(contaDis) //Testeing the function 

}

const mostraDisplyResult = (numerosDisplay: string = '0') => {

    let soNumeros = numerosDisplay.slice(0, -1);
    if (contaDisplay!.innerHTML.length >= 2) {

        // Making the sum 
        let result = eval(resultadoDisplay!.innerHTML + soNumeros);

        //Last Operator 
        let openasOperador = numerosDisplay.charAt(numerosDisplay.length - 1)
        contaDisplay!.innerHTML = openasOperador;
        
        //Concatena a conta com o resultado
        if (resultadoDisplay!.innerHTML != '') { 
            let concatenando = resultadoDisplay!.innerHTML.concat(soNumeros);
            let novoResultado = eval(concatenando).toString();

            resultadoDisplay!.innerHTML = novoResultado; //Resultado final 

            //Tirando o símbolo de 'igual', caso seja clicado
            if (novoResultado = '=') {
                contaDisplay!.innerHTML = ''
                newOperator = false; 
            }

        } else { //Manda o resultado na primeira conta|| Redundante?
            resultadoDisplay!.innerHTML = result; 
        }

    } else {
        contaDisplay!.innerHTML = numerosDisplay
    }
}

deleteAll?.addEventListener('click', (e) => {
    contaDisplay!.innerHTML = ''
    resultadoDisplay!.innerHTML = '';

})

deleteOne?.addEventListener('click', (e) => {
    let allCounting = contaDisplay!.innerHTML;
    let lastCaracter = allCounting.substring(0, allCounting.length - 1);
    contaDisplay!.innerHTML = lastCaracter;
})
