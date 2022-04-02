const insertedText = document.querySelector('.insertedText');
const buttonText = document.querySelector('.button');
const recomendation = document.querySelector('.Recomendation');
function addRecomendation() {
  recomendation.textContent = insertedText.value;
}
buttonText.addEventListener('click', addRecomendation);