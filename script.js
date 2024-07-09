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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        text.textContent = "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        text.textContent = 'You lose! Scissors beats Paper';
        computerScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        text.textContent = 'You lose! Rock beats Scissors'
        computerScore++;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        text.textContent = 'You win! Rock beats Scissors'
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        text.textContent = 'You win! Paper beats Rock'
        humanScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        text.textContent = 'You win! Scissors beats Paper'
        humanScore++;
    }
    else if (humanChoice == computerChoice) {
        text.textContent = 'It\'s a tie!'
    }
}

function playGame(choice) {
    if (humanScore < 5 && computerScore < 5) {
        let computerChoice = getComputerChoice();
        console.log(choice)
        console.log(computerChoice)
        playRound(choice, computerChoice);
        score.textContent = 'Your score: ' + humanScore + ' Computer Score ' + computerScore
    }
    if (humanScore > computerScore && (humanScore === 5 || computerScore === 5)) {
        winner.textContent = 'Game Over... You win!'
    }
    else if (humanScore === 5 || computerScore === 5){
        winner.textContent = 'Game Over... You lose!'
    }
}

let container = document.querySelector('#container')

let text = document.createElement('div')
text.classList.add('text')

let score = document.createElement('div')
score.classList.add('text')

let winner = document.createElement('div')
winner.classList.add('text')

document.body.appendChild(text)
document.body.appendChild(score)
document.body.appendChild(winner)

let computerScore = 0
let humanScore = 0

container.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playGame('rock');
            break;
        case 'paper':
            playGame('paper');
            break;
        case 'scissors':
            playGame('scissors');
            break;
    }
})