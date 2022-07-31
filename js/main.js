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
// Get Cpu li
const cpuHealthItems = document.getElementById("cpu-health").getElementsByTagName("li")
// Get User ul
const divUserHealth = document.getElementById("slide-user")
// Get Cpu ul
const divCpuHealth = document.getElementById("slide-cpu")
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
    window.location.reload()
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
const removeLi = (health) => {
    let last = health[health.length - 1];
    last.parentNode.removeChild(last);
}

// Select Hand Choice
const handSelect = (e) => {
    playSingleRound(e.target.id, getComputerChoice());
}

btnChoice.forEach(btn => btn.addEventListener('click', handSelect))

// Scoreboard functionality
const scoreBoard = (playerHand, computerHand, decider) => {
    let time = 2000;
    round++;
    console.log(playerHand)
    switch (decider) {
        case "Win":
            removeLi(cpuHealthItems);
            break;
        case "Lose":
            removeLi(userHealthItems);
            break;
        case "Draw":
            console.log("draw");
            break;
    }
    roundLabel.textContent = `Round ${round}`

    // TODO SHOW USER HAND
    divUserHealth.classList.add("hidden")
    divCpuHealth.classList.add("hidden")

    // Show Hand
    showHandUser(playerHand)
    showHandCpu(computerHand)

    if (userHealthItems.length === 0) {
        declareWinner("LOSE")
    } else if (cpuHealthItems.length === 0) {
        declareWinner("WIN")
    }
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
//  get user choice
const userIcons = document.getElementById("slide-user").getElementsByTagName("i")

const cpuIcons = document.getElementById("slide-cpu").getElementsByTagName("i")
const showUserHand = document.getElementById("show-user-hand")
const showCpuHand = document.getElementById("show-cpu-hand")
// Show Hand
const showHandUser = (playerHand) => {
    if (playerHand === "rock") {
        showUserHand.innerHTML = userIcons[0].outerHTML
    } else if (playerHand === "paper") {
        showUserHand.innerHTML = userIcons[1].outerHTML
    } else {
        showUserHand.innerHTML = userIcons[2].outerHTML
    }
}
// Show Cpu Hand
const showHandCpu = (playerHand) => {
    if (playerHand === "rock") {
        showCpuHand.innerHTML = cpuIcons[0].outerHTML
    } else if (playerHand === "paper") {
        showCpuHand.innerHTML = cpuIcons[1].outerHTML
    } else {
        showCpuHand.innerHTML = cpuIcons[2].outerHTML
    }
}

const deciderHeader = document.querySelector(".modal-body h1")

const declareWinner = (decider) => {
    modal.style.display = "block";
    gameContainer.style.display = "none";

    deciderHeader.textContent = `YOU ${decider}!`
}










