const secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');

submitButton.addEventListener('click', function() {
  const guess = Number(guessInput.value);
  if (guess === secretNumber) {
    result.textContent = `Parabéns! Você acertou em ${guesses} tentativas.`;
    submitButton.disabled = true;
  } else if (guess > secretNumber) {
    result.textContent = 'Seu palpite é muito alto. Tente novamente.';
    guesses++;
  } else if (guess < secretNumber) {
    result.textContent = 'Seu palpite é muito baixo. Tente novamente.';
    guesses++;
  }
});
