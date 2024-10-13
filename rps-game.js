const playerRock = document.querySelector("#rock");
const playerPaper = document.querySelector("#paper");
const playerScissors = document.querySelector("#scissors");
const result = document.querySelector("#result-text");

const playerChoice = [playerRock, playerPaper, playerScissors];

let humanScore = 0;
const scoreHuman = document.querySelector("#human-score");
scoreHuman.innerText += ` ${humanScore}`;
let computerScore = 0;
const scoreComputer = document.querySelector("#computer-score");
scoreComputer.innerText += ` ${computerScore}`;

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)].toUpperCase();
}

function playRound(e) {
    // Compare humanChoice and computerChoice
    let humanChoice = e.target.innerText.toUpperCase();
    let computerChoice = getComputerChoice();

    switch (humanChoice) {
        case "ROCK":
            if (computerChoice == "PAPER") {
                result.innerText = "Computer Wins! Rock loses to Paper.";
                scoreComputer.innerText = `Computer score: ${++computerScore}`;
            } else if (computerChoice == "SCISSORS") {
                result.innerText = "You win! Rock beats Scissors.";
                scoreHuman.innerText = `Your score: ${++humanScore}`;
            } else {
                result.innerText = "Rock vs. Rock -- that's a tie!";
            };
            break;
        case "PAPER":
            if (computerChoice == "ROCK") {
                result.innerText = "You win! Paper beats Rock.";
                scoreHuman.innerText = `Your score: ${++humanScore}`;
            } else if (computerChoice == "SCISSORS") {
                result.innerText = "You lose! Paper loses to Scissors.";
                scoreComputer.innerText = `Computer score: ${++computerScore}`;
            } else {
                result.innerText = "Paper vs. Paper -- that's a tie!";
            };
            break;
        case "SCISSORS":
            if (computerChoice == "PAPER") {
                result.innerText = "You win! Scissors beats Paper.";
                scoreHuman.innerText = `Your score: ${++humanScore}`;
            } else if (computerChoice == "ROCK") {
                result.innerText = "You lose! Scissors loses to Rock.";
                scoreComputer.innerText = `Computer score: ${++computerScore}`;
            } else {
                result.innerText= "Scissors vs. Scissors -- that's a tie!";
            };
            break;
        }
    if (computerScore >= 5 || humanScore >= 5) {
        if (computerScore > humanScore) {
            scoreComputer.innerText = `Computer score: ${computerScore = 0}`;
            scoreHuman.innerText = `Your score: ${humanScore = 0}`;
            alert("Computer wins, try again!");
        } else if (humanScore > computerScore) {
            scoreComputer.innerText = `Computer score: ${computerScore = 0}`;
            scoreHuman.innerText = `Your score: ${humanScore = 0}`;
            alert("You win, congrats!");
        }
    }
}

playerChoice.forEach(button => {
    button.addEventListener("click", playRound)
})