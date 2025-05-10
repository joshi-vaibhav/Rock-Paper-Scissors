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

//A prompt appears for the user and give his input
function getHumanChoice() {
    humanChoice = prompt("Choose your weapon!! ,rock, paper or scissors!");

    if (humanChoice === null) {
        console.log("You didnt enter anything!");
    }
    else {
        humanChoice = humanChoice.toLowerCase();
        //it makes case insensitive
    }

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;


//Now the game process function, compare the both inputs and give result.
function playRound(computerchoice, humanchoice) {

    if (computerChoice === humanChoice) {
        console.log("This is a draw!");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`Computer Won! ${computerChoice} beats ${humanChoice}`);//it tells who wins and how.
        computerScore++;//it adds 1 score to the winner
        console.log(`Score Y:${humanScore} C:${computerScore}`)
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log(`You Won! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
        console.log(`Score Y:${humanScore} C:${computerScore}`)
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log(`You Won! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
        console.log(`Score Y:${humanScore} C:${computerScore}`)
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`Computer Won! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        console.log(`Score Y:${humanScore} C:${computerScore}`)
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`Computer Won! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        console.log(`Score Y:${humanScore} C:${computerScore}`)
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log(`You Won! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
        console.log(`Score Y:${humanScore} C:${computerScore}`)
    }


}

// Actually Play the game
// Score will be added to the score board
function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(computerSelection, humanSelection);
}


// It will go for 5 rounds then declare a winner
while (humanScore < 5 && computerScore < 5) {
    playGame();//it declares the function with nested function in it.

    if (humanScore === 5) {
        console.log("YOU WIN!!!");
        break;
    } else if (computerScore === 5) {
        console.log("YOU LOOSE")
        break;
    }
}