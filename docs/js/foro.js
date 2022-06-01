document.addEventListener('DOMContentLoaded', function() {
    const buttonText = document.getElementById("button");
    
    function addQuestion() {
      const insertedText = document.getElementById("insertedText").value;
      document.getElementById("Question").innerHTML = ' ' + insertedText;
  
      document.getElementById("Question").tabIndex = 0;
    }
    buttonText.onclick = addQuestion;
  });
  