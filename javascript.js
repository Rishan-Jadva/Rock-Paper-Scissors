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
function round(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection){
        case "rock":
            if(computerSelection==="Paper"){
                return "You Lose! Paper beats Rock";
            }
            else if(computerSelection==="Rock"){
                return "You Tied!";
            }
            else{
                return "You Won! Rock beat Scissors";
            }
        case "scissors":
            if(computerSelection==="Paper"){
                return "You Win! Scissors beats Paper";
            }
            else if(computerSelection==="Rock"){
                return "You Lose! Rock beats Scissors";
            }
            else{
                return "You Tied!";
            }
        case "paper":
            if(computerSelection==="Paper"){
                return "You Tied";
            }
            else if(computerSelection==="Rock"){
                return "You Won! Paper beats Rock";
            }
            else{
                return "You Lose! Scissors beats Paper";
            }
        default:
            return "Error!"
    }
}
let choice = getComputerChoice();
console.log(choice);
