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



    // let valueToNumber = Number(currentValue.substring(0, currentValue.length - 1))
    // let calclutationSum = currentValue + currentValue
    // console.log(currentValue);
    // console.log(valueToNumber);


// case "+":
    // showsOnDisplay(numD!, targetOp)
    // Sums(mainDisplay!.innerHTML, targetOp)




/*
function Sums(currentNumber: string, targetOp: string = '') {
    showsOnDisplay(numD!, targetOp) 

    let number = currentNumber.substring(0, currentNumber.length - 1) //Tira o '+' do final
    console.log(number);
    let array = currentNumber.split('+') 
    if (array.length > 1) {
       array.pop();
    }
    
    const nArray : number[] = array.map((n) => {
        return Number(n)

    })

    // for (let i = 0; i < nArray!.length; i++) {
    //    var result = nArray![i] + nArray![i +1] 
       
    // }

    const result = nArray.map((n) => {
        n += n

    })

    console.log(result);
}
*/
