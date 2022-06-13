let links = document.querySelectorAll('a');
let highLight = document.createElement('span');
highLight.classList.add('highlight');
document.body.appendChild(highLight);


function displayHightlight () {
    let linkCoord = this.getBoundingClientRect();
    console.log(linkCoord);
    let coord = {
        width: linkCoord.width,
        height: linkCoord.height,
        top: linkCoord.top + window.scrollY,
        left: linkCoord.left + window.scrollX,
    }

    highLight.style.width = `${coord.width}px`;
    highLight.style.height = `${coord.height}px`;
    highLight.style.transform = `translate(${coord.left}px, ${coord.top}px)`;
}

links.forEach(link => {
    link.addEventListener('mouseover', displayHightlight);
})