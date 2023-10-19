function getComputerChoice(){
    let result = Math.floor(Math.random()*3);
    switch(result){
        case 0:
            return "Scissors"
        case 1:
            return "Paper"
        case 2:
            return "Rock"
    }
}
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection){
        case "rock":
            if(computerSelection==="Paper"){
                return "You Lose!";
            }
            else if(computerSelection==="Rock"){
                return "You Tied!";
            }
            else{
                return "You Won!";
            }
        case "scissors":
            if(computerSelection==="Paper"){
                return "You Win!";
            }
            else if(computerSelection==="Rock"){
                return "You Lose!";
            }
            else{
                return "You Tied!";
            }
        case "paper":
            if(computerSelection==="Paper"){
                return "You Tied!";
            }
            else if(computerSelection==="Rock"){
                return "You Won!";
            }
            else{
                return "You Lose!";
            }
        default:
            return "Error!"
    }
}
function getPlayerChoice(){
    return prompt("Rock, Paper or Scissors?");
}
function game(){
    let count = 0;
    let playerScore=0;
    let computerScore=0;
    while (count<5){
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        outcome = playRound(playerSelection, computerSelection);
        if(outcome==="You Won!"){
            playerScore++;
        }
        else if(outcome==="You Lose!"){
            computerScore++;
        }
        count++
        console.log(outcome);
        console.log("Your Score: "+playerScore);
        console.log("Computer Score: "+computerScore);
    }
    if(playerScore>computerScore){
        console.log("Player Wins")
    }
    else if(playerScore==computerScore){
        console.log("You Tied the Game")
    }
    else{
        console.log("Computer Wins")
    }
}
game();