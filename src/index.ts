const numbers = document.querySelectorAll('.buttons-n');
const mainDisplay = document.getElementById('currentDisplay');
const operator = document.querySelectorAll('[data-op]');

//Adding the event of click
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let targetText = target.textContent;
        let num = Number(target.textContent)
        showsOnDisplay(targetText!)
        console.log(target);

    })
})

operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let targetOp = target.dataset.op;

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
                console.log('Soma');
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
function showsOnDisplay(targetText: string) {
    console.log(mainDisplay!.innerHTML);
    mainDisplay!.innerHTML += targetText;

}

function Sums(num: string) {
    console.log(num);

}

