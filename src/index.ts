const numbers = document.querySelectorAll('.buttons-n');
const mainDisplay = document.getElementById('current');

//Adding the event of click
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target as HTMLElement;
        let num = Number(target.textContent)
        console.log(num);
        // showsOnDisplay(num)
    })
})

//Putting the number in the display
// function showsOnDisplay(num) {
    

// }

