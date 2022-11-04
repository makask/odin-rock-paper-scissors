const choices = ["Rock","Paper","Scissors"];
let playerScore = 0;
let computerScore = 0;



const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click",()=>{
    let playerSelection = "Rock";
    document.querySelector(".player-round-choice").src="./images/rock.png";
    game(playerSelection);
});

paper.addEventListener("click",()=>{
    let playerSelection = "Paper";
    document.querySelector(".player-round-choice").src="./images/paper.png";
    game(playerSelection);
});

scissors.addEventListener("click", ()=>{
    let playerSelection = "Scissors";
    document.querySelector(".player-round-choice").src="./images/scissors.png";
    game(playerSelection);
});

function game(playerSelection){
    
    //for(let i = 0; i < 5; i++){
        playerSelection = capitalizeFirstLetter(playerSelection);
        computerSelection = getComputersChoice();
        document.querySelector(".round-description").innerHTML = playRound(playerSelection,computerSelection);
        //}
        
        if(playerScore === 2 || computerScore ===2){
        let gameResult = (playerScore > computerScore) ? "You won!" : (computerScore > playerScore) ? "You lost!" : "Its a tie";
        //alert(gameResult);
        setTimeout(function(){
            resetGame();
            window.location.reload();
            alert(gameResult + "\n PLAY AGAIN?");
        }, 1000);
    }  
}

function getComputersChoice(){
    let computersChoice = Math.floor(Math.random() * 3);
    if(computersChoice===0){
        document.querySelector(".computer-round-choice").src="./images/rock.png";
    }else if(computersChoice===1){
        document.querySelector(".computer-round-choice").src="./images/paper.png";
    }else{
        document.querySelector(".computer-round-choice").src="./images/scissors.png";
    }
    return choices[computersChoice];
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        document.querySelector(".round-result").innerHTML = `Its a tie!`;
        updateScore();
        return `${playerSelection} ties with ${computerSelection}`;
    }

    if((playerSelection == "Scissors" && computerSelection == "Paper") || 
       (playerSelection == "Paper" && computerSelection == "Rock") || 
       (playerSelection == "Rock" && computerSelection == "Scissors")){
        playerScore++;
        updateScore();
        document.querySelector(".round-result").innerHTML = `You won!`;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }else{
        computerScore++;
        updateScore();
        document.querySelector(".round-result").innerHTML = `You lost!`;
        return `You lost! ${computerSelection} beats ${playerSelection}`; 
    }
       
}

function capitalizeFirstLetter(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    return playerSelection[0].toUpperCase() + playerSelection.slice(1);
}

function updateScore(){
    document.querySelector(".player-score").innerHTML = playerScore;
    document.querySelector(".computer-score").innerHTML = computerScore;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    round = 0;
    document.querySelector(".round-result").innerHTML = "PICK YOUR WEAPON";
    document.querySelector(".round-description").innerHTML = "First to score 5 points wins the game";
    document.querySelector(".player-round-choice").src = "./images/test.png";
    document.querySelector(".computer-round-choice").src = "./images/test.png";
}

//<h2 class="round-result">PICK YOUR WEAPON!</h2>
//<h3 class="round-description">First to score 5 points wins the game</h3>
//</div>




