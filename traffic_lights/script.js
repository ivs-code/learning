let btnRed = document.querySelector('.btn_red');
let btnYellow = document.querySelector('.btn_yellow');
let btnGreen = document.querySelector('.btn_green');

let lightRed = document.querySelector('.red');
let lightYellow = document.querySelector('.yellow');
let lightGreen = document.querySelector('.green')



btnRed.onclick = function () {
    lightRed.style.background = 'red'
    lightGreen.style.background = 'white';
}

btnYellow.onclick = function () {
    lightYellow.style.background = 'yellow';
    lightRed.style.background = 'white'
    lightGreen.style.background = 'white';
}

btnGreen.onclick = function () {
    lightGreen.style.background = 'green';
    lightYellow.style.background = 'white';
    lightRed.style.background = 'white'
}






