function createImage(event) {
    image = new Image; 
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/160px-Unofficial_JavaScript_logo_2.svg.png';
    image.style.position = 'fixed';
    image.style.left = event.clientX + 'px';
    image.style.top = event.clientY + 'px';
    image.width = event.clientX / 2 ;
    image.height = event.clientY / 2;

    document.body.appendChild(image);
}


document.onclick = createImage;