// Rock Paper Scissors images by nightwolfdezines

const container = document.querySelector(".container");
const result = document.querySelector("#resultText");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const score = document.querySelector("#scoreText");
const winner = document.querySelector(".winnerText");

const winnerText = document.createElement("p");
winnerText.classList.add("winnerText");
winnerText.style.margin = "2"
winner.appendChild(winnerText);


let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
    result.textContent = playRound("Rock", computerPlay());
    updateScore();
})

paperBtn.addEventListener("click", () => {
    result.textContent = playRound("Paper", computerPlay());
    updateScore();
})

scissorsBtn.addEventListener("click", () => {
    result.textContent = playRound("Scissors", computerPlay());
    updateScore();
})

function updateScore() {
    winnerText.textContent = "";
    score.textContent = `Score: Computer: ${computerScore} Player: ${playerScore}`;
    if (computerScore == 5) {
        winnerText.textContent = "Computer Wins! Click Rock Paper or Scissors to begin new game.";
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore == 5) {
        winnerText.textContent = "Player Wins! Click Rock Paper or Scissors to begin new game.";
        playerScore = 0;
        computerScore = 0;
    }
}

function computerPlay() {
    let randNum = Math.floor(Math.random() * 3);
    let compChoice;
    switch(randNum) {
        case 0:
            compChoice = "Rock";
            break;
        case 1:
            compChoice = "Paper";
            break;
        case 2:
            compChoice = "Scissors";
            break;
    };
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    switch(computerSelection) {
        case "Rock":
            switch(playerSelection) {
                case "Rock":
                    return "Both players selected Rock. It's a tie!";
                case "Paper":
                    ++playerScore;
                    return "Computer selected Rock. Player selected Paper. Player wins!";
                case "Scissors":
                    ++computerScore;
                    return "Computer selected Rock. Player selected Scissors. Computer wins!";
            };
        case "Paper":
            switch(playerSelection) {
                case "Rock":
                    ++computerScore;
                    return "Computer selected Paper. Player selected Rock. Computer wins!";
                case "Paper":
                    return "Both players selected Paper. It's a tie!";
                case "Scissors":
                    ++playerScore;
                    return "Computer selected Paper. Player selected Scissors. Player wins!";
            };
        case "Scissors":
            switch(playerSelection) {
                case "Rock":
                    ++playerScore;
                    return "Computer selected Scissors. Player selected Rock. Player Wins!";
                case "Paper":
                    ++computerScore;
                    return "Computer selected Scissors. Player selected Paper. Computer wins!"
                case "Scissors":
                    return "Both players selected Scissors. It's a tie!"
            };
    };
}

