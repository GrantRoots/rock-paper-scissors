function getComputerChoice() {

    let random = Math.random() * 2;
    random = Math.round(random);

    if (random === 0) {
        return 'rock';
    }
    else if (random === 1) {
        return 'paper';
    }
    else if (random === 2) {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('Rock Paper or Scissors?').toLowerCase();

    if (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = getHumanChoice();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock');
        computerChoice++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beats Paper');
        computerChoice++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors');
        computerChoice++;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors');
        humanChoice++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats Rock');
        humanChoice++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beats Paper');
        humanChoice++;
    }
}

let computerChoice = getComputerChoice()

let humanChoice = getHumanChoice()

console.log(computerChoice)
console.log(humanChoice)

let computerScore = 0
let humanScore = 0