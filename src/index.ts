const numbers = document.querySelectorAll('.buttons-n');
const mainDisplay = document.getElementById('currentDisplay');

// ! diz explicitamente o valor não é nulo ou indefinido
// Putting the number in the display
function showsOnDisplay(targetText : string) {
    console.log(mainDisplay!.innerHTML);
    mainDisplay!.innerHTML = targetText;   

}

//Adding the event of click
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let targetText = target.textContent;
        let num = Number(target.textContent)
        showsOnDisplay(targetText!)
    })
})

