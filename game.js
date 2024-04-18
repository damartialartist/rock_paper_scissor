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
        (playerSelection == 2) && (computerChoice == 3) ||
        ((playerSelection == 3) && (computerChoice == 1)) ) {
        return "You Lost";
    }

    if (((playerSelection == 1) && (computerChoice == 3)) ||
        ((playerSelection == 2) && (computerChoice == 1)) ||
        ((playerSelection == 3) && (computerChoice == 2))) {
        return "You Win";
    }
    return "Game done"
}

function Score()  {
    this.score= 0;
    this.updateScore = function () {
        this.score += 1;
    };
}

function updateScoreBoard(outcome) {
    if (outcome == "You Win") {
        player.updateScore();
    } else if (outcome == "You Lost") {
        cpu.updateScore();
    } 

    playerScore.textContent = `${player.score}`
    cpuScore.textContent=`${cpu.score}`
}

const player = new Score;
const cpu = new Score;
const choiceList = document.querySelector("ul.choices");
const display = document.querySelector("h1");
const scoreCount = document.querySelector(".score-count");
const playerScore = scoreCount.querySelector(".score-count p.your-score");
const cpuScore = scoreCount.querySelector(".score-count p.cpu-score")
playerScore.textContent = `${player.score}`;
cpuScore.textContent = `${cpu.score}`;

choiceList.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
        console.log('clicked');
        let choice = event.target.id;
        let computerChoice = getComputerChoice();
        let outcome = playRound(choice, computerChoice);
        console.log(outcome);
        computerChoice = decodeChoice(computerChoice);
        updateScoreBoard(outcome);
        display.textContent = `You picked ${choice}, CPU picked ${computerChoice}, ${outcome}.`
    }
});
