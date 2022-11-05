const choices = ["Rock","Paper","Scissors"];
let playerScore = 0;
let computerScore = 0;
const maxRounds = 3;



const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

document.querySelector(".round-description").innerHTML = `First to score ${maxRounds} points wins the game`; 

rock.addEventListener("click",()=>{
    let playerSelection = "Rock";
    document.querySelector(".player-round-choice").src="./images/rock.gif";
    rock.classList.add("on-click");
    setTimeout(function(){
        rock.classList.remove("on-click");
    },100);
    game(playerSelection);
});

paper.addEventListener("click",()=>{
    let playerSelection = "Paper";
    document.querySelector(".player-round-choice").src="./images/paper.gif";
    paper.classList.add("on-click");
    setTimeout(function(){
        paper.classList.remove("on-click");
    },100);
    game(playerSelection);
});

scissors.addEventListener("click", ()=>{
    let playerSelection = "Scissors";
    document.querySelector(".player-round-choice").src="./images/scissors.gif";
    scissors.classList.add("on-click");
    setTimeout(function(){
        scissors.classList.remove("on-click");
    },100);
    game(playerSelection);
});

function game(playerSelection){
    
        playerSelection = capitalizeFirstLetter(playerSelection);
        computerSelection = getComputersChoice();
        document.querySelector(".round-description").innerHTML = playRound(playerSelection,computerSelection); 
        if(playerScore === maxRounds || computerScore === maxRounds){
        let gameResult = (playerScore > computerScore) ? "You won!" : (computerScore > playerScore) ? "You lost!" : "Its a tie";
        
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
        document.querySelector(".computer-round-choice").src="./images/rock.gif";
    }else if(computersChoice===1){
        document.querySelector(".computer-round-choice").src="./images/paper.gif";
    }else{
        document.querySelector(".computer-round-choice").src="./images/scissors.gif";
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
    document.querySelector(".round-description").innerHTML = `First to score ${maxRounds} points wins the game`;
    document.querySelector(".player-round-choice").src = "./images/test.png";
    document.querySelector(".computer-round-choice").src = "./images/test.png";
}





