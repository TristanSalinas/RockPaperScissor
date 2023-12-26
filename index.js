let choice = ["rock", "paper", "scissors"]
let computerWins = 0;
let playerWins = 0;


function getComputerChoice () {
    return choice [Math.floor(Math.random() * choice.length)];
}

function getPlayerChoice () {
    let playerChoice = prompt("Score : " + playerWins +"/"+ computerWins + "\nChose between Rock, Paper or scissors");
    

    if (choice.includes(playerChoice.toLowerCase())){
        return playerChoice.toLowerCase();
    } else {
        alert (playerChoice + " is not a valid answer!");
        return getPlayerChoice();
    }   
}




function playRound () {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    console.log(computerChoice + " " + playerChoice);

    switch (true) {
        //en cas d'égalité :
        case (playerChoice === computerChoice) :
            alert ("Nobody won, you both chosed : "+ playerChoice + "! Let's remake the round");
        return playRound();
        //sinon
        case (playerChoice === "rock") : 
            switch (true) {
                case (computerChoice === "paper") :
                    computerWins += 1;
                    alert ("Score : " + playerWins +"/"+ computerWins + "\nyou lose, computer chose paper");
                break;

                case (computerChoice === "scissors") :
                    playerWins += 1;
                    alert ("Score : " + playerWins +"/"+ computerWins + "\nyou win, computer chose scissors");
                break;
            }
        break;

        case (playerChoice === "paper") : 
            switch (true) {
                case (computerChoice === "rock") :
                    playerWins += 1;
                    alert ("Score : " + playerWins +"/"+ computerWins + "\nyou win, computer chose rock");
                break;
                case (computerChoice === "scissors") :
                    computerWins += 1;
                    alert ("Score : " + playerWins +"/"+ computerWins + "\nyou lose, computer chose scissors");
                break;
            }
        break;

        case (playerChoice === "scissors") : 
            switch (true) {
                case (computerChoice === "rock") :
                    computerWins += 1;
                    alert ("Score : " + playerWins +"/"+ computerWins + "\nyou lose, computer chose rock");
                break;
                case (computerChoice === "paper") :
                    playerWins += 1;
                    alert ("Score : " + playerWins +"/"+ computerWins + "\nyou win, computer chose paper");
                break;
            }
        break;      
    }
}

function game() {


    nbrOfRounds = parseInt(prompt("Chose a number of rounds : "));

    for (i=0; i< nbrOfRounds; i++) {
        playRound();
    }

    alert ("launching another game ?");
    return game();

}

game();
