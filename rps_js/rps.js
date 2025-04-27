let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
updateScore();

['rock', 'paper', 'scissors'].forEach(move => {
  document.querySelector(`.js-${move}-button`).addEventListener('click', () => playRound(move));
});

document.body.addEventListener('keydown', e => {
  const keyMove = { r: 'rock', p: 'paper', s: 'scissors' }[e.key];
  if (keyMove) playRound(keyMove);
});


function highlightMove(move) {
  ['rock', 'paper', 'scissors'].forEach(choice => {
    const span = document.querySelector(`.${choice}-text`);
    if (choice === move) {
      span.style.color = 'red'; // Highlight selected move (green)
      span.style.fontWeight = 'bold';
    } else {
      span.style.color = ''; // Reset others
      span.style.fontWeight = '';
    }
  });
}

function playRound(playerChoice) {


  const computerChoice = getComputerChoice();
  const result = decideResult(playerChoice, computerChoice);

  if (result.includes('win')) score.wins++;
  else if (result.includes('lose')) score.losses++;
  else score.ties++;

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();

  document.querySelector('.js-result').textContent = result;
  document.querySelector('.js-moves').innerHTML = `
    You <img src="images/${playerChoice}-emoji.png" class="move-icon">
    <img src="images/${computerChoice}-emoji.png" class="move-icon"> Computer
  `;
  highlightMove(playerChoice);
}

function decideResult(player, computer) {
  if (player === computer) return 'It\'s a tie!';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    return 'You win!';
  }
  return 'You lose!';
}

function getComputerChoice() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * moves.length)];
}

function updateScore() {
  document.querySelector('.js-score').textContent = 
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

const themeButton = document.createElement('button');
themeButton.textContent = 'Switch to Light Mode';
themeButton.className = 'theme-toggle-button';
document.body.appendChild(themeButton);

let darkMode = true;
themeButton.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? '#1a1a1a' : '#f0f0f0';
  document.body.style.color = darkMode ? '#ffffff' : '#000000';
  themeButton.textContent = darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
