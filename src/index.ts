const numbers = document.querySelectorAll('.buttons-n');
const mainDisplay = document.getElementById('currentDisplay');
const operator = document.querySelectorAll('[data-op]');

let numD = mainDisplay!.textContent;

//Adding the event of click
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let targetText = target.textContent;
        showsOnDisplay(numD!, targetText!)
        // console.log(target);

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
                // console.clear()
                showsOnDisplay(numD!, targetOp)
                Sums(numD!, targetOp)
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
function showsOnDisplay(numD: string = '', targetParse: string = '') {
    if (mainDisplay!.textContent != numD || targetParse) {
        mainDisplay!.innerHTML += `${numD}${targetParse}`;
    }
}

function Sums(numD: string, targetOp: string) {
    console.log(numD, targetOp + 'A');

}


