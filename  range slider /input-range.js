let slider = document.querySelector('input');
let value = document.querySelector('.value');


value.textContent = slider.value;

slider.oninput = function () {
    value.textContent = this.value;
}