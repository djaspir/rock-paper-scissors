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
// Get User li
const userHealthItems = document.getElementById("user-health").getElementsByTagName("li")
console.log(userHealthItems)
// Get Cpu li
const cpuHealthItems = document.querySelectorAll("#cpu-health li")
// Get Round h3
const roundLabel = document.getElementById("round")
// Get decider h3
const deciderLabel = document.querySelector(".decider")
// Get button choice
const btnChoice = document.querySelectorAll(".user-choice button")
// Set User Health
let userHealth = 5;
// Set Cpu Health
let cpuHealth = 5;
// Set Game Round
let round = 1;
// Computer Choice Array
let computerHandArray = ["rock", "paper", "scissors"]


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


// Get Random Number 1 - 3
const getRandomNumber = () => Math.floor(Math.random() * 3);
// Get choice from computerHandArray
const getComputerChoice = () => computerHandArray[getRandomNumber()];
// Set Round
const setRound = () => roundLabel.textContent = `Round ${round}`
// Remove li health
let last = userHealthItems[userHealthItems.length - 1];


// Remove Health
const removeLi = () => {
    let last = userHealthItems[userHealthItems.length - 1];
    last.parentNode.removeChild(last);
}

// Select Hand Choice
const handSelect = (e) => {
    playSingleRound(e.target.id, getComputerChoice());
}

btnChoice.forEach(btn => btn.addEventListener('click', handSelect))

// Scoreboard functionality
const scoreBoard = (playerHand, computerHand, decider) => {
    round++;
    switch (decider) {
        case "Win":
            console.log("you win")
            break;
        case "Lose":
            console.log("you lose")
            break;
    }
    roundLabel.textContent = `Round ${round}`
}

// Run Slide Show
slideShowUser.forEach(initSlideShow);
slideShowCpu.forEach(initSlideShow);

// playSingleRound Function
const playSingleRound = (playerSelection, computerSelection) => {
    // check player hand is equal to computer then return draw dont add to scoreboard
    if (playerSelection === computerSelection) {
        scoreBoard(playerSelection, computerSelection, "Draw");
    } // check if player hand is rock
    else if (playerSelection === "rock") {

        if (computerSelection === "paper") {
            scoreBoard(playerSelection, computerSelection, "Lose");
        } else {
            scoreBoard(playerSelection, computerSelection, "Win");
        } //else if check player hand is paper
    } else if (playerSelection === "paper") {

        if (computerSelection === "scissors") {
            scoreBoard(playerSelection, computerSelection, "Lose");
        } else {
            scoreBoard(playerSelection, computerSelection, "Win");
        } // else then you choose scissors
    } else {
        if (computerSelection === "rock") {
            scoreBoard(playerSelection, computerSelection, "Lose");
        }
        else {
            scoreBoard(playerSelection, computerSelection, "Win");
        }
    }
}







