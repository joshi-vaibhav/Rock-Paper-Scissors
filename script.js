let humanScore = 0;
let computerScore = 0;

const resetBtn = document.querySelector('#reset');

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());


//computer choose randomly from rock, paper and scissors
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3 + 1);

    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}


//Now the game process function, compare the both inputs and give result.
function playRound(humanChoice,computerChoice) {

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice + "!";
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice + "!";
    }
}

function updateResults(roundResult) {
    document.getElementById("roundResult").textContent = roundResult;
    document.getElementById("score").textContent = "Score: Human" + humanScore + "-" + computerScore + "Computer";
    if (humanScore === 5 || computerScore === 5) {
        document.getElementById("winner").textContent =
            humanScore === 5
                ? "Congratulations! You won the game!"
                : "Sorry, you lost the game!";

        
    }
}


document.getElementById("rock").addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);
    updateResults(roundResult);
});

document.getElementById("paper").addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);
    updateResults(roundResult);
});

document.getElementById("scissors").addEventListener("click", () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);
    updateResults(roundResult);
});



