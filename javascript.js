// creategetComputerChoice function
//use Math.random to return rock papper or scissors string
// create humanChoice function
// Use prompt to get users input
// Create two variables for score, humanScore and computerScore init with 0
// Create logic to play:
//Create function playRound with parameters humanChoice and computerChoice
//make human choice case insensitive
// Create code in playRound to log 
//increment score

function getComputerChoice () {
    roll = Math.floor( Math.random()*3) + 1
    if (roll === 1) {
        return "Rock"
    } else if (roll === 2) {
        return "Paper"
    } else if (roll === 3) {
        return "Scissors"
    }
}

function getHumanChoice () {
    let choice = prompt("Rock, paper or scissors?")

    if (choice === null) {
        return null
    }

    choice = choice.toLowerCase()


    if (choice === "rock") {
        return "Rock"
    } else if (choice === "paper") {
        return "Paper"
    } else if (choice === "scissors") {
        return "Scissors" 
    }
}

let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice) {
    

}