//GAME

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'paper' && computerSelection === 'rock' || 
        playerSelection === 'scissors' && computerSelection === 'paper') {
        win(playerSelection, computerSelection); 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors' || 
        playerSelection === 'scissors' && computerSelection === 'rock' || 
        playerSelection === 'rock' && computerSelection === 'paper') {
        lose(playerSelection, computerSelection);
    } else {
        tie(playerSelection, computerSelection);
    }
}

//UI

const playerScore_div = document.getElementById("playerScore")
const computerScore_div = document.getElementById("computerScore")
const scoreBoard_div = document.querySelector(".scoreBoard")
const result_h2 = document.querySelector(".result > h2")
const result_p = document.querySelector(".result > p")
const playerSelection_div = document.getElementById("playerSelection")
const computerSelection_div = document.getElementById("computerSelection")
const rock_button = document.getElementById("rock")
const paper_button = document.getElementById("paper")
const scissors_button = document.getElementById("scissors")
const overlay_div = document.getElementById("overlay")
const modal_div = document.getElementById("modal")
const finalWinner_p = document.querySelector(".modal > p")
const playAgain_button = document.querySelector(".modal > button")


function main() {
    rock_button.addEventListener('click', function() {
        game("rock");
        showPlayerSelection("rock");
        endGame(playerScore, computerScore);
    }) 
    
    paper_button.addEventListener('click', function() { 
        game("paper");
        showPlayerSelection("paper");
        endGame(playerScore, computerScore);
    })
    
    scissors_button.addEventListener('click', function() {
        game("scissors");
        showPlayerSelection("scissors");
        endGame(playerScore, computerScore);
    })
}


 function playAgain() {
    playAgain_button.addEventListener('click', function() {
        finalWinner()
 })
}

function finalWinner () {
    console.log("Hello")
}

function endGame (playerScore, computerScore) {
    if (playerScore === 5) {
        overlay_div.classList.add('active')
        modal_div.classList.add('active')
        finalWinner_p.innerHTML = "You Won!"

    }
    else if (computerScore === 5) {
        overlay_div.classList.add('active')
        modal_div.classList.add('active')
        finalWinner_p.innerHTML = "You lost..."
    }
}

function showPlayerSelection(playerSelection) {
    if (playerSelection === 'rock') {
        playerSelection_div.innerHTML = "&#9994"
    } else if (playerSelection === 'paper') {
        playerSelection_div.innerHTML = "&#9995"
    } else (playerSelection === 'scissors')
        playerSelection_div.innerHTML = "&#9996"
}

function showComputerSelection(computerSelection) {
    if (computerSelection === 'rock') {
        computerSelection_div.innerHTML = "&#9994"
    } else if (computerSelection === 'paper') {
        computerSelection_div.innerHTML = "&#9995"
    } else (computerSelection === 'scissors')
        computerSelection_div.innerHTML = "&#9996"
}

function win(playerSelection, computerSelection) {
    playerScore++
    playerScore_div.innerHTML = playerScore
    computerScore_div.innerHTML = computerScore
    result_h2.innerHTML = "You win!"
    const playerSelectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    const computerSelectionCapitalized = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    result_p.innerHTML = `${playerSelectionCapitalized} beats ${computerSelectionCapitalized}`
}

function lose(playerSelection, computerSelection) {
    computerScore++
    playerScore_div.innerHTML = playerScore
    computerScore_div.innerHTML = computerScore
    result_h2.innerHTML = "You lose!"
    const playerSelectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    const computerSelectionCapitalized = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    
}

function tie(playerSelection, computerSelection) {
    result_h2.innerHTML = `It's a tie!`
    const playerSelectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    const computerSelectionCapitalized = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    result_p.innerHTML = `${playerSelectionCapitalized} equals ${computerSelectionCapitalized}`
}


main()
 

/*
finish 5 round game and play again option

function game() {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        return 'You beat the computer! You are a genius'
    } else if (playerScore < computerScore) {
        return `You got beat by the computer. Practice your throws!`
    } else {
        return `You tied with the computer!`
    }  
}

"

console.log(game())


*/