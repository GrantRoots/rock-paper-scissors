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

let computer_choice = getComputerChoice()

console.log(computer_choice)