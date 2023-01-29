let kaktus = document.querySelector('.kaktus');
let dino = document.querySelector('.dino');

setInterval(() => {
    setTimeout(() => {
        kaktus.style.left = 100 + "%"
        kaktus.style.transition = 0 + "s"
    }, 1000);
    setTimeout(() => {
        kaktus.style.left = -50 + "%"
        kaktus.style.transition = 2 + "s"
    }, 2000);
}, 1000);

document.addEventListener('keydown', () => {
    dino.style.bottom = "100px"
    setTimeout(() => {
        dino.style.bottom = "0px"
    }, 200);
});

if (dino == kaktus) {
    alert("game over")
}