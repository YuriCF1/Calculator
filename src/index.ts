const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const botoes = document.querySelectorAll('button');
const apaga = document.getElementById('delete');

const resultadoDisplay = document.getElementById('calc') as HTMLInputElement;
const contaDisplay = document.getElementById('currentDisplay');

const RDisplay = document.getElementById('result'); 

//Passar o operado para a função digitar, e se a classe for buttons-o, fazer o display mostrar só ela

//Adding the event of click

let newNumber = false;
numeros.forEach((num) => {
    num.addEventListener('click', (e) => {
        newNumber = true;
    })
})

botoes.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let numeroTecla = target.dataset.int;
        
        let classN = target.classList[2];
        console.log(classN);

        console.log(newNumber);
        mostraDisplayAtual(numeroTecla!, classN)

        console.log(contaDisplay!.innerHTML.length);
    })
})

operadores.forEach((op) => {
    op.addEventListener('click', (e) => {
        newNumber = false;
        console.log(newNumber);
        calcula(contaDisplay!.innerHTML);
    
    })
})

//Functions_______________________________________
var resultado : number;

const mostraDisplayAtual = (numeros: string, op?: string) => {
    if (newNumber) {
        contaDisplay!.innerHTML += numeros;

    } else {
        contaDisplay!.innerHTML = numeros;
    }
}

const calcula = (contaDis : string) => {
    mostraDisplyResult(contaDis) //Testeing the function 

}

const mostraDisplyResult = (numerosDisplay: string = '0') => {
console.log(contaDisplay!.innerHTML.length);
    if (contaDisplay!.innerHTML.length >= 2) {
        // Making the sum 
        let soNumeros = numerosDisplay.slice(0, -1);
        let result = eval(resultadoDisplay!.innerHTML + soNumeros);
        
        //Último operador 
        let openasOperador = numerosDisplay.charAt(numerosDisplay.length -1) 
        contaDisplay!.innerHTML = openasOperador; 
        
        if (resultadoDisplay!.innerHTML != '') { //Manda o resultado na segunda conta
            let concatenando = resultadoDisplay!.innerHTML.concat(soNumeros);
            console.log('result', concatenando);
            let novoResultado = eval(concatenando).toString();
            
            console.log(novoResultado);
            
            resultadoDisplay!.innerHTML = novoResultado;
        } else {
            resultadoDisplay!.innerHTML = result; //Manda o resultado na primeira conta
        }
    } else {
        contaDisplay!.innerHTML = numerosDisplay
    }
}

apaga?.addEventListener('click', (e) => {
    contaDisplay!.innerHTML = ''
    resultadoDisplay!.innerHTML = '';    
})
// function recalc(numerosDisplay: string, result: number) {
    //     //Último operador 
    //     let openasOperador = numerosDisplay.charAt(numerosDisplay.length -1) 
    //     console.log(openasOperador);
    
    //     let string = result.toString();
    
//     let concatenando = string.concat(openasOperador, + 1); //Fazer outra função a partir daqui?
//     console.log('result', concatenando);
//     resultadoDisplay!.innerHTML = result;

//     console.log(eval(concatenando));

//     contaDisplay!.innerHTML = openasOperador;

// }

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