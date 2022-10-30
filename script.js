const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const game = document.getElementsByClassName('game');
const start = document.getElementById('start');

console.log(dino);
start.addEventListener("click", function(event) {
    start.remove();
    if (dino.classList != "jump") {
        dino.classList.add("run");
    }
    cactus.classList.add("cactus_movement");
    document.addEventListener("keydown", function(event) {
        jump();
    })
});


function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function() {
        dino.classList.remove("jump");
    }, 300);
}


let checkAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        alert("game over...");
        location.reload();
    }
}, 10);