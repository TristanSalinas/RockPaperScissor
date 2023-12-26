let choice = ["rock", "paper", "scissors"]
let computerWins = 0;
let playerWins = 0;


const playRound = function(playerChoice) {
    let computerChoice = getComputerChoice();
    
    
    

    switch (true) {
        //en cas d'égalité :
        case (playerChoice === computerChoice) :
            uiText.innerText = "Score : " + playerWins +"/"+ computerWins +"\n Nobody won, you both chosed : "+ playerChoice + "! Let's remake the round";
        return playRound();
        //sinon
        case (playerChoice === "rock") : 
            switch (true) {
                case (computerChoice === "paper") :
                    computerWins += 1;
                    uiText.innerText ="Score : " + playerWins +"/"+ computerWins + "\nyou lose, computer chose paper";
                break;

                case (computerChoice === "scissors") :
                    playerWins += 1;
                    uiText.innerText ="Score : " + playerWins +"/"+ computerWins + "\nyou win, computer chose scissors";
                break;
            }
        break;

        case (playerChoice === "paper") : 
            switch (true) {
                case (computerChoice === "rock") :
                    playerWins += 1;
                    uiText.innerText ="Score : " + playerWins +"/"+ computerWins + "\nyou win, computer chose rock";
                break;
                case (computerChoice === "scissors") :
                    computerWins += 1;
                    uiText.innerText ="Score : " + playerWins +"/"+ computerWins + "\nyou lose, computer chose scissors";
                break;
            }
        break;

        case (playerChoice === "scissors") : 
            switch (true) {
                case (computerChoice === "rock") :
                    computerWins += 1;
                    uiText.innerText ="Score : " + playerWins +"/"+ computerWins + "\nyou lose, computer chose rock";
                break;
                case (computerChoice === "paper") :
                    playerWins += 1;
                    uiText.innerText ="Score : " + playerWins +"/"+ computerWins + "\nyou win, computer chose paper";
                break;
            }
        break;      
    }
}



const gameBox = document.querySelector('#gameBox');
const uiText = document.createElement('p');

const rockButton = document.createElement('button');
rockButton.textContent = "Rock" ;
rockButton.addEventListener("click", function() {
    playRound("rock");
});

const paperButton = document.createElement('button');
paperButton.textContent = "Paper" ;
paperButton.addEventListener("click", function() {
    playRound("paper");
});

const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissor" ;
scissorsButton.addEventListener("click", function() {
    playRound("scissors");
    
});



function getComputerChoice () {
    return choice [Math.floor(Math.random() * choice.length)];
}







gameBox.append(uiText);

gameBox.append(rockButton);
gameBox.append(paperButton);
gameBox.append(scissorsButton);



