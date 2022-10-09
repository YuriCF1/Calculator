"use strict";
const numbers = document.querySelectorAll('.buttons-n');
const mainDisplay = document.getElementById('currentDisplay');
function showsOnDisplay(targetText) {
    console.log(mainDisplay.innerHTML);
    mainDisplay.innerHTML = targetText;
}
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let targetText = target.textContent;
        let num = Number(target.textContent);
        showsOnDisplay(targetText);
    });
});
