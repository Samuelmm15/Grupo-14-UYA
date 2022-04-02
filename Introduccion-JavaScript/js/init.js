(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {
  const botonT2 = document.getElementById("botonT2");
  function contar(){
    document.getElementById("cantidadParrafos").innerHTML = document.getElementsByTagName("p").length;
    document.getElementById("cantidadDiv").innerHTML = document.getElementsByTagName("div").length;
    document.getElementById("cantidadItemLista").innerHTML = document.getElementsByTagName("li").length;
  }

  botonT2.onclick = contar;
});
