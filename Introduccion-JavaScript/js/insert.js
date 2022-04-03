(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {
  const buttonText = document.getElementById("button");
  function addRecomendation() {
    const insertedText = document.getElementById("insertedText").value;
    document.getElementById("Recomendation").innerHTML = ' '+insertedText;
  }
  buttonText.onclick = addRecomendation;
});
