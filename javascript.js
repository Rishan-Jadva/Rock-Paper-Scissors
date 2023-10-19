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
let choice = getComputerChoice();
console.log(choice);
