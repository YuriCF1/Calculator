const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const botoes = document.querySelectorAll('button');

const resultadoDisplay = document.getElementById('calc') as HTMLInputElement;
const contaDisplay = document.getElementById('currentDisplay');

const RDisplay = document.getElementById('result'); 

//Adding the event of click
botoes.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let numeroTecla = target.dataset.int;
        mostraDisplayAtual(numeroTecla!)
    })
})

operadores.forEach((op) => {
    op.addEventListener('click', (e) => {
        calcula(contaDisplay!.innerHTML)
    })
})

//Functions_______________________________________
var resultado : number;

const mostraDisplayAtual = (numeros: string) => {
    let escrito = contaDisplay!.innerHTML += numeros
    return escrito
}

const calcula = (contaDis : string) => {
    // let soNumeros = contaDis.slice(0, -1);
    mostraDisplyResult(contaDis)

    // let operador = contaDisplay!.innerHTML;
    // let openasOperador = operador.charAt(operador.length -1) //Manda o último operador
    // contaDisplay!.innerHTML = openasOperador;
    
    // RDisplay!.innerHTML = 'Result';
}

const mostraDisplyResult = (numerosDisplay: string = '0', resultDisplay : string = '') => {

    // Making the sum 
    let soNumeros = numerosDisplay.slice(0, -1);
    let result = eval(soNumeros)
    console.log(result);

    let openasOperador = numerosDisplay.charAt(numerosDisplay.length -1) 
    console.log(openasOperador);

    let string = result.toString();
    let concatenando = string.concat(openasOperador, '12'); //Fazer outra função a partir daqui?
    console.log(concatenando);
    
    console.log(eval(concatenando));

    // contaDisplay!.innerHTML = openasOperador;
    // resultadoDisplay!.innerHTML = ;
}
//_____________________________________________________________________________________
// const mostraDisplyResult = (numerosDisplay: string = '0', resultDisplay : string = '') => {
//     //Faz a conta
//     let numerosOP = numerosDisplay;
//     console.log(numerosOP);
//     let soNumeros = numerosDisplay.slice(0, -1);
//     let result = eval(soNumeros); //Tenho que concatenar antes de calcular novamente
    
//     let concatenando = soNumeros.concat(numerosOP)
//     console.log(concatenando);
    
//     //Manda o último operador
//     let operador = contaDisplay!.innerHTML;
//     let openasOperador = operador.charAt(operador.length -1) 
//     contaDisplay!.innerHTML = openasOperador;
    
//     resultado = result;
//     console.log(resultado);

//     //Lida com o resultado
//     let resultString = resultado.toString() + openasOperador;
//     let contaTotal = resultString.concat(numerosOP);
//     console.log(contaTotal);

//     // let result = eval(contaTotal);
    
//     resultadoDisplay!.innerHTML = result;
// }  



//_____________________________________________________________________________________
// //Concatena conta e resultado
// console.log(contaTotal);

//_-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-_
// const numbers = document.querySelectorAll('.buttons-n');
// const operator = document.querySelectorAll('[data-op]');

// const calcDisplay = document.getElementById('calc') as HTMLInputElement;
// const mainDisplay = document.getElementById('currentDisplay');

// const result = document.getElementById('result');


// let displayNumber = mainDisplay!.textContent;
// var clicks = 0;

// //Adding the event of click
// numbers.forEach((num) => {
//     num.addEventListener('click', (e) => {
//         let target = e.target as HTMLElement;
//         let numeroTecla = target.textContent;
//         showsOnDisplay(displayNumber!, numeroTecla!, true) //Manda a área e o conteúdo da tecla
    
//         verifyTheCounting(clicks);
//         console.log('Cliado:', clicks);
//     })
// })   

// operator.forEach((op) => {
//     op.addEventListener('click', (e) => {
//         let target = e.target as HTMLElement;
//         let targetOp = target.dataset.op;
        
//         verifyTheCounting(clicks);
//         showsOnDisplay(displayNumber!, targetOp!, true);
//         console.log(clicks);
//         clicks += 1;
//     })
// })

// function verifyTheCounting(clicks : number, targetInt: string = '') { //Vê se a primeira operação já foi feita
//     if (clicks <=  1) { 
//         makeCounts(mainDisplay!.innerHTML)
//     } else {
//         mainDisplay!.innerHTML = ''
//         showsOnDisplay(mainDisplay!.innerHTML, targetInt, false)
//         clicks = 0;
//     }
// }

// function a (a: any, b: any) {
//         console.log(a,b);
// }


// // ! diz explicitamente o valor não é nulo ou indefinido
// // Putting the number on the display
// function showsOnDisplay(displayNumber: string = '', targetInt: string = '', Op: boolean) {
//     if (Op) {
//         mainDisplay!.innerHTML += `${displayNumber}${targetInt}`;
//     } else {
//         result!.innerHTML = 'R'
//         mainDisplay!.innerHTML = `${displayNumber}${targetInt}`;
//     }
// }

// //Mostrando o resultado no display de cálculo
// function makeCounts(result: string, operator? : string) {
//     console.log('Contou:',result);
//         let toMath = eval(result)
//         let finalResult = toMath.toString()()
//         calcDisplay!.innerHTML = finalResult;

// }

//_-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-_

//CERTO 2_________________________________________________________
// //Adding the event of click
// numbers.forEach((num) => {
//     num.addEventListener('click', (e) => {
//         let target = e.target as HTMLElement;
//         var numeroTecla = target.textContent;
//         showsOnDisplay(displayNumber!, numeroTecla!)
//         makeCounts(mainDisplay!.innerHTML)
//     })
// })

// operator.forEach((op) => {
//     op.addEventListener('click', (e) => {
//         let target = e.target as HTMLElement;
//         var targetOp = target.dataset.op;
        
//         showsOnDisplay(displayNumber!, targetOp!)
//     })
// })

// // ! diz explicitamente o valor não é nulo ou indefinido
// // Putting the number on the display
// function showsOnDisplay(displayNumber: string = '', targetInt: string = '') {
//     mainDisplay!.innerHTML += `${displayNumber}${targetInt}`;

// }

// //Mostrando o resultado no display de cálculo
// function makeCounts(result: string) {
//     // let cleanValue = result.substring(0, result.length - 1);
//     // console.log(cleanValue);
//     let toMath = eval(result)
//     let finalResult = toMath.toString()()
//     calcDisplay!.innerHTML = finalResult;

// }


//CERTO___________________________________________
/*
operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        var targetOp = target.dataset.op;

        switch (targetOp) {
            case "/":
                console.log('Dividir');
                break
            case "per":
                console.log('Porcentagem');
                break
            case "root":
                console.log('Raiz');
                break
            case "+":
                showsOnDisplay(displayNumber!, targetOp!)
                Sums(mainDisplay!.innerHTML)
                break
            case "-":   
                console.log('Menos');
                break
            case "x":
                console.log('Multiplicação');
                break
        }
    })
})

// ! diz explicitamente o valor não é nulo ou indefinido
// Putting the number in the display
function showsOnDisplay(displayNumber: string = '', targetInt: string = '') {
    mainDisplay!.innerHTML += `${displayNumber}${targetInt}`;

}



function Sums(currentValue: string) {
    let valueToNumber = currentValue.substring(0, currentValue.length - 1);
    showsCalcDisplay(valueToNumber);
}

*/