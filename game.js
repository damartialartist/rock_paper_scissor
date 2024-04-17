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

    if (((playerSelection == 1) && (computerChoice == 2)) ||
        ((playerSelection == 3) && (computerChoice == 1)) ||
        ((playerSelection == 2) && (computerChoice == 3))) {
        return "You Lost";
    }

    if (((playerSelection == 1) && (computerChoice == 3)) ||
        ((playerSelection == 2) && (computerChoice == 1)) ||
        ((playerSelection == 3) && (computerChoice == 2))) {
        return "You Win";
    }
}

//let otherChoice = getComputerChoice();
//let playerSelection = prompt("Enter Rock/Paper/Scissor");
//let outcome = playRound(playerSelection, otherChoice);
//playAgain = prompt("Play Again? Yes/No");

const choiceList = document.querySelector("ul");

let outcome = choiceList.addEventListener("click", (event) => {
    let choice = event.target;
    //console.log(choice.id);
    let computerChoice = getComputerChoice();
    let outcome = playRound(choice.id, computerChoice);
    computerChoice = decodeChoice(computerChoice);
    console.log(`You chose: ${choice.id}, computer chose: ${computerChoice}, ${outcome}`)
});
