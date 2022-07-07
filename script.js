function computerPlay() {
    let randNum = Math.floor(Math.random() * 3);
    console.log(randNum)
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

function playerPlay() {
    let playerInput = prompt("Choose Rock, Paper, or Scissors");
    let lowerInput = playerInput.toLowerCase();
    let playerChoice;
    switch(lowerInput) {
        case "rock":
            playerChoice = "Rock";
            break;
        case "paper":
            playerChoice = "Paper";
            break;
        case "scissors":
            playerChoice = "Scissors";
            break;
    };
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    switch(computerSelection) {
        case "Rock":
            switch(playerSelection) {
                case "Rock":
                    return "Both players selected Rock. It's a tie!";
                case "Paper":
                    return "Computer selected Rock. Player selected Paper. Player wins!";
                case "Scissors":
                    return "Computer selected Rock. Player selected Scissors. Computer wins!";
            };
        case "Paper":
            switch(playerSelection) {
                case "Rock":
                    return "Computer selected Paper. Player selected Rock. Computer wins!";
                case "Paper":
                    return "Both players selected Paper. It's a tie!";
                case "Scissors":
                    return "Computer selected Paper. Player selected Scissors. Player wins!";
            };
        case "Scissors":
            switch(playerSelection) {
                case "Rock":
                    return "Computer selected Scissors. Player selected Rock. Player Wins!";
                case "Paper":
                    return "Computer selected Scissors. Player selected Paper. Computer wins!"
                case "Scissors":
                    console.log("Gi")
                    return "Both players selected Scissors. It's a tie!"
            };
    };
}

let computerSelection = computerPlay();
let playerSelection = playerPlay();
console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection))