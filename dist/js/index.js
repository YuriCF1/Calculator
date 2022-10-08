"use strict";
const numbers = document.querySelectorAll('.buttons-n');
const mainDisplay = document.getElementById('current');
numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let num = Number(target.textContent);
        console.log(num);
    });
});
