console.log("Welcome To Roshombo!\nPick a number between 1 and 3\n1 is rock, 2 is Paper, 3 is Scissors.");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let userInput = parseInt(prompt("Pick a choice 1 - 3"));
    if (userInput >= 1 && userInput <= 3) {
        return choices[userInput - 1];
    } else {
        return null;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === null) {
        return "Invalid choice. Please pick a number between 1 and 3.";
    }

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    const winningCombos = [
        ["Rock", "Scissors"],
        ["Paper", "Rock"],
        ["Scissors", "Paper"]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
        if (humanChoice === winningCombos[i][0] && computerChoice === winningCombos[i][1]) {
            return "win";
        } else if (humanChoice === winningCombos[i][1] && computerChoice === winningCombos[i][0]) {
            return "lose";
        }
    }
}


function playGame() {
    for ( let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        var humanScore, computerScore;
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        let result = playRound(humanChoice,computerChoice);
        //console.log(playRound(humanChoice, computerChoice));
        if (result == "win") {
            console.log("win");
            ++humanScore;
        }else if (result == "lose") {
            console.log("lose");
            ++computerScore;

        }
        else {
            console.log("tie");
            ++computerScore;
            ++humanScore;
        }

    }
    if (humanScore > computerScore) {
        console.log("You won!")
    } else {
        console.log("You lost!")
    }
}

playGame();
