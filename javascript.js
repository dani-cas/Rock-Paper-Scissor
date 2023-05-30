choices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerChoice() {
    let validatedInput = false
    while (validatedInput == false) {
        const input = prompt('Pick Rock, Paper, or Scissor?')
        if (input == null) {
            continue
        }
        const inputInLower = input.toLowerCase()
        if (choices.includes(inputInLower)) {
            validatedInput = true
            return inputInLower
        }
    }   
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'paper' && computerSelection === 'scissors' || 
            playerSelection === 'scissors' && computerSelection === 'rock' || 
            playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}`
        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
            playerSelection === 'paper' && computerSelection === 'rock' || 
            playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else
        return `It's a tie!`
    
}

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

console.log(game())



