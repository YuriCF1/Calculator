const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
// const botoes = document.querySelectorAll('button');
const botoes = document.querySelectorAll('.button');

const deleteAll = document.querySelector('[data-int="delete-all"]');
const deleteOne = document.getElementById('delete');

const resultadoDisplay = document.getElementById('calc') as HTMLInputElement;
const contaDisplay = document.getElementById('currentDisplay');

const RDisplay = document.getElementById('result'); 

let display1 = contaDisplay!.innerHTML;


//Passar o operado para a função digitar, e se a classe for buttons-o, fazer o display mostrar só ele
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
    console.log(numeros);
    if (newNumber) {
        contaDisplay!.innerHTML += numeros;
  
    } else {
        contaDisplay!.innerHTML = numeros;
    }
}

const calcula = (contaDis : string) => { 
    console.log(contaDis);
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

deleteAll?.addEventListener('click', (e) => {
    console.log('delete');
    contaDisplay!.innerHTML = ''
    resultadoDisplay!.innerHTML = '';

})

deleteOne?.addEventListener('click', (e) => {
    let allCounting = contaDisplay!.innerHTML;
    let lastCaracter = allCounting.substring(0, allCounting.length - 1);
    contaDisplay!.innerHTML  = lastCaracter;
})

document.getElementById('equal')!.onclick = () => {
    let reiniciado = true;

    calcula(contaDisplay!.innerHTML);
    contaDisplay!.innerHTML = ''

    numeros.forEach((num) => {
        num.addEventListener('click', (e) => {
            newNumber = true;
            if (reiniciado) {
                resultadoDisplay!.innerHTML = '';
                reiniciado = false;
            }
        })
    })
}