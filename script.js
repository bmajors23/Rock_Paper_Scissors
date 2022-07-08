const container = document.querySelector(".container");
const result = document.querySelector(".result");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
    result.textContent = playRound("Rock", computerPlay());
})

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

// function game() {
//     for (let i = 0; i < 5; i++) {
//     console.log(playRound(playerPlay(), computerPlay()))
//     console.log(`Score: Player: ${playerScore} Computer: ${computerScore}`)
//     }
// }


// game();