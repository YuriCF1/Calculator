const numbers = document.querySelectorAll('.buttons-n');
const operator = document.querySelectorAll('[data-op]');

const calcDisplay = document.getElementById('calc') as HTMLInputElement;
const mainDisplay = document.getElementById('currentDisplay');

let displayNumber = mainDisplay!.textContent;
var clicks = 0;

//Adding the event of click
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let targetText = target.textContent;
        showsOnDisplay(displayNumber!, targetText!) //Manda a área e o conteúdo da tecla
    
        console.log(clicks);
        verifyTheCounting(clicks)
    })
})

operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let targetOp = target.dataset.op;
        clicks += 1;
        
        showsOnDisplay(displayNumber!, targetOp!);
        // makeCounts(mainDisplay!.innerHTML) //Calcula 
        console.log(clicks);
    })
})

// ! diz explicitamente o valor não é nulo ou indefinido
// Putting the number on the display
function showsOnDisplay(displayNumber: string = '', targetInt: string = '') {
    mainDisplay!.innerHTML += `${displayNumber}${targetInt}`;
    
}

function verifyTheCounting(clicks : number) { //Vê se a primeira operação já foi feita
    if (clicks <=  1) { 
        makeCounts(mainDisplay!.innerHTML)
    }   else {
        makeCounts(calcDisplay!.innerHTML)
    }
}

//Mostrando o resultado no display de cálculo
function makeCounts(result: string) {
    console.log(result);
    let toMath = eval(result)
    let finalResult = toMath.toString()
    calcDisplay!.innerHTML = finalResult;
}

//CERTO 2_________________________________________________________
// //Adding the event of click
// numbers.forEach((num) => {
//     num.addEventListener('click', (e) => {
//         let target = e.target as HTMLElement;
//         var targetText = target.textContent;
//         showsOnDisplay(displayNumber!, targetText!)
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
//     let finalResult = toMath.toString()
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

function showsCalcDisplay(result : string) {
    let toMath = eval(result)
    console.log(toMath);
    let finalResult = toMath.toString()
    calcDisplay!.innerHTML = finalResult;

}


function Sums(currentValue: string) {
    let valueToNumber = currentValue.substring(0, currentValue.length - 1);
    showsCalcDisplay(valueToNumber);
}

*/