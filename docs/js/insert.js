
document.addEventListener('DOMContentLoaded', function() {
  const buttonText = document.getElementById("botonT5");
  
  function add() {
    const insertedText = document.getElementById("insertedText").innerText;
    document.getElementById("Recomendation").innerText = ' ' + insertedText;
    document.getElementById("Recomendation").tabIndex = 0;
  }

  buttonText.onclick = add();
});
