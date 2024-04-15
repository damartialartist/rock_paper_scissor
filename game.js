function getComputerChoice() {
    return Math.floor(Math.random() * 3)
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
}

let otherChoice = getComputerChoice();
console.log(otherChoice)
const playerSelection = "rock";
playRound(playerSelection, otherChoice);