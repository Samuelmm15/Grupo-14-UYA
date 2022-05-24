
document.addEventListener('DOMContentLoaded', function() {
  const buttonText = document.getElementById("button");
  function addRecomendation() {
    const insertedText = document.getElementById("insertedText").value;
    document.getElementById("Recomendation").innerHTML = ' '+insertedText;
  }
  buttonText.onclick = addRecomendation;
});


