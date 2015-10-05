////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Tory Burgett Code                */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
        winner = 'player';
    }
    else if ((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'rock')) {
        winner = 'computer';
    }
    else if ((playerMove === 'rock' && computerMove === 'rock') || (playerMove === 'paper' && computerMove === 'paper') || (playerMove === 'scissors' && computerMove === 'scissors')){
        winner = 'tie';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var tieWins = 0;
    var roundNo = 0;

    while (playerWins < 5 && computerWins < 5) {
        var pMove = getPlayerMove();
        var cMove = getComputerMove();
        var wins = getWinner(pMove, cMove);
        if (wins === 'player') {
            playerWins++;
        }
        else if (wins === 'computer'){
            computerWins++;
        }
        else {
            tieWins++;
        }
        
        roundNo++;
        
        console.log("-------");
        console.log("ROUND " + roundNo);
        console.log("You chose " + pMove + ", and the computer chose " + cMove + ". WINNER - " + wins);
        console.log("YOU - " + playerWins + ", COMPUTER - " + computerWins + ", and " + tieWins + " tied games ");
        console.log("-------");
    }

    if (playerWins === 5){
        console.log("YOU WIN!");
    }
    else if (computerWins === 5){
        console.log("YOU LOSE! COMPUTER WINS!");
    }
    return [playerWins, computerWins];
}

playToFive();