const numbers = document.querySelectorAll('.buttons-n');
const operator = document.querySelectorAll('[data-op]');

const calcDisplay = document.getElementById('calc') as HTMLInputElement;
const mainDisplay = document.getElementById('currentDisplay');

let displayNumber = mainDisplay!.textContent;

//Adding the event of click
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        var targetText = target.textContent;
        showsOnDisplay(displayNumber!, targetText!)
    })
})

operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        var targetOp = target.dataset.op;

        showsOnDisplay(displayNumber!, targetOp!)
        showsCalcDisplay(mainDisplay!.innerHTML)
    })
})

// ! diz explicitamente o valor não é nulo ou indefinido
// Putting the number on the display
function showsOnDisplay(displayNumber: string = '', targetInt: string = '') {
        mainDisplay!.innerHTML += `${displayNumber}${targetInt}`;

}

function showsCalcDisplay(result: string) {
    let cleanValue = result.substring(0, result.length - 1);
    console.log(cleanValue);
    let toMath = eval(cleanValue)
    let finalResult = toMath.toString()
    calcDisplay!.innerHTML = finalResult;

}


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