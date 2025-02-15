let playerScore = 0;
let computerScore = 0;
let lossStreak = 0;  // Track consecutive losses

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice;

    // Adaptive AI: If player loses 3 times in a row, make the game fairer
    if (lossStreak >= 5) {
        if (playerChoice === 'rock') computerChoice = 'scissors';
        else if (playerChoice === 'paper') computerChoice = 'rock';
        else if (playerChoice === 'scissors') computerChoice = 'paper';
        
        lossStreak = 0; // Reset loss streak after favoring the player
    } else {
        computerChoice = choices[Math.floor(Math.random() * 3)];
    }

    let resultText = "";

    if (playerChoice === computerChoice) {
        resultText = "It's a Tie!";
        lossStreak = 0; // Reset streak on tie
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText = `You Win! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
        lossStreak = 0; // Reset loss streak
    } else {
        resultText = `You Lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
        lossStreak++; // Increase loss streak
    }

    document.getElementById("result").textContent = resultText;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}
