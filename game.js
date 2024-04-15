function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function decodeChoice(choice) {
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissor"
    }
}

function playRound(playerSelection, computerChoice) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        playerSelection = 1;
    } else if (playerSelection === "paper") {
        playerSelection = 2;
    } else {
        playerSelection = 3;
    }

    if (playerSelection === computerChoice) {
        return "Tie Game" ;
    }

    if ((playerSelection == 1) && (computerChoice == 2)) {
        return "You Lost";
    }

    if((playerSelection == 1) && (computerChoice == 3)) {
        return "You Win";
    }

    if((playerSelection == 2) && (computerChoice == 1)) {
        return "You Win";
    }

    if((playerSelection == 2) && (computerChoice == 3)) {
        return "You Lost" ;
    }

    if((playerSelection == 3) && (computerChoice == 1)) {
        return "You Lost";
    }

    if((playerSelection == 3) && (computerChoice == 2)) {
        return "You Win";
    }

    return "Game done"
}

let otherChoice = getComputerChoice();
let playerSelection = prompt("Enter Rock/Paper/Scissor");
let outcome = playRound(playerSelection, otherChoice);

otherChoice = decodeChoice(otherChoice);

console.log(`Computer chose: ${otherChoice}, ${outcome}`)

