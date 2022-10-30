const choices = ["Rock","Paper","Scissors"];
let playerScore = 0;
let computerScore = 0;

function game(){
    
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your choice: ");
        playerSelection = capitalizeFirstLetter(playerSelection);
        computerSelection = getComputersChoice();
        let roundResult = playRound(playerSelection,computerSelection);
        alert(roundResult);
        console.log(roundResult);
    }

    let gameResult = (playerScore > computerScore) ? "You won!" : (computerScore > playerScore) ? "You lost!" : "Its a tie";
    alert(gameResult);
    console.log(gameResult);
}

function getComputersChoice(){
    let getComputersChoice = Math.floor(Math.random() * 3);
    return choices[getComputersChoice];
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        console.log("PLAYER: " + playerSelection);
        console.log("COMPUTER: " + computerSelection);
        console.log(`playerScore: ${playerScore}`);
        console.log(`computerScore: ${computerScore}`);
        return `Its a tie!`;
    }

    if((playerSelection == "Scissors" && computerSelection == "Paper") || 
       (playerSelection == "Paper" && computerSelection == "Rock") || 
       (playerSelection == "Rock" && computerSelection == "Scissors")){
        console.log("PLAYER: " + playerSelection);
        console.log("COMPUTER: " + computerSelection);
        playerScore++;
        console.log(`playerScore: ${playerScore}`);
        console.log(`computerScore: ${computerScore}`);
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }else{
        console.log("PLAYER: " + playerSelection);
        console.log("COMPUTER: " + computerSelection);
        computerScore++;
        console.log(`playerScore: ${playerScore}`);
        console.log(`computerScore: ${computerScore}`);
        return `You lost! ${computerSelection} beats ${playerSelection}`; 
    }
       
}

function capitalizeFirstLetter(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    return playerSelection[0].toUpperCase() + playerSelection.slice(1);
}

game();



