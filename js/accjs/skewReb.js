const maxSkew = 15;
const maxRotate= 10;

let currentPosition = window.pageYOffset;
let angle = 0;

window.addEventListener("wheel", content)

function content(e){
    // console.log(e)
    const toutvert = document.getElementById("rebH")

    angle += e.deltaY/2;
    // toutvert.style.transform = `skewX(${angle}deg)`;
    toutvert.style.transform = `skewY(${angle}deg)`;
}


