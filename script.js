const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const game = document.getElementsByClassName('game');
const start = document.getElementById('start');
const count = document.getElementById('result');
let i = 0;
let speed_value = 1.4;

console.log(dino);
start.addEventListener("click", function(event) {
    start.remove();
    if (dino.classList != "jump") {
        dino.classList.add("run");
    }
    cactus.classList.add("cactus_movement");
    console.log(cactus);
    let speed = document.querySelector('.cactus_movement');
    // console.log(speed);
    speed.style.animationDuration = speed_value + 's';
    document.addEventListener("keydown", function(event) {
        jump();
        let cactus_Left = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        if (cactus_Left <= 128 && checkAlive) {
            i++;
            count.innerText = 'Your result is: ' + i;
        }
    })
    if (i % 5 == 0 && i > 4 && speed_value != 0.7) {
        speed_value -= 0.6;
        speed.style.animationDuration = speed_value + 's';
    }
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
        alert("game over... Your result is " + i);
        location.reload();
        return true;
    }
    return false;
}, 10);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}