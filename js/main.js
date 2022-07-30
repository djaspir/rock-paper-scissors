// Get the modal
const modal = document.querySelector("#myModal")
// Get the button that opens the modal
const btn = document.querySelector(".btn-play")
// Get Game Container
const gameContainer = document.querySelector(".game-container")
// User Slide Show
const slideShowUser = document.querySelectorAll("#slide-user")
// CPU Slide Show
const slideShowCpu = document.querySelectorAll("#slide-cpu")
// Get User ul
const userHealthItems = document.querySelector("#user-health")
// Get Cpu ul
const cpuHealthItems = document.querySelector("#cpu-health")
// Get Round h3
const roundLabel = document.querySelector(".round");
// Get decider h3
const deciderLabel = document.querySelector(".decider")

// Set User Health
let userHealth = 5;
// Set Cpu Health
let cpuHealth = 5;
// Set Game Round
let round = 1;
// Transition Effect on Page Refresh
document.body.onload = () => {
    document.body.classList.add('loaded')
}
// When the user clicks on the button go to Game Screen
btn.onclick = function () {
    modal.style.display = "none";
    gameContainer.style.display = "block";
}
// Slide Show Function
const initSlideShow = (slideshow) => {
    const slides = document.querySelectorAll(`#${slideshow.id} .slide`)
    let index = 0;
    const time = 1000;

    slides[index].classList.add('active');
    setInterval(() => {
        slides[index].classList.remove('active');
        index = getRandomNumber();
        slides[index].classList.add('active');
    }, time);
}
// Set User Health
const setUserHealth = () => {
    for (let i = 0; i < userHealth; i++) {
        userHealthItems.innerHTML += `<i class="fa-solid fa-heart"></i>`;
    }
}
// Set CPU Health
const setCpuHealth = () => {
    for (let i = 0; i < cpuHealth; i++) {
        cpuHealthItems.innerHTML += `<i class="fa-solid fa-heart"></i>`;
    }
}
// Get Random Number 1 - 3
const getRandomNumber = () => Math.floor(Math.random() * 3);
// Set Round
const setRound = () => roundLabel.textContent = `Round ${round}`
// Set Decider
const setDecider = () => deciderLabel.textContent = "WIN"


setDecider()
setRound()
setUserHealth()
setCpuHealth()

// Run Slide Show
slideShowUser.forEach(initSlideShow);
slideShowCpu.forEach(initSlideShow);




