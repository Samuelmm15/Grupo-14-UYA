
document.addEventListener('DOMContentLoaded', function() {
  const buttonText = document.getElementById("button");
  
  function addRecomendation() {
    const insertedText = document.getElementById("insertedText").value;
    document.getElementById("Recomendation").innerHTML = ' '+insertedText;

    document.getElementById("Recomendation").tabIndex = 0;
  }

  buttonText.onclick = addRecomendation();
});


