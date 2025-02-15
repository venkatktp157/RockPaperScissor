let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let resultText = "";

    if (playerChoice === computerChoice) {
        resultText = "It's a Tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText = `You Win! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    } else {
        resultText = `You Lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }

    document.getElementById("result").textContent = resultText;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}
