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

    document.getElementById("cantidadParrafos").tabIndex = 0;
    document.getElementById("cantidadDiv").tabIndex = 0;
    document.getElementById("cantidadItemLista").tabIndex = 0;
  }

  const botonApendice = document.getElementById("apendiceMovil");
  function ocultar() {
    let coleccion = document.getElementById("nav-mobile").getElementsByTagName('a');
    for (var i = 0; i < coleccion.length; i++) {
      coleccion[i].tabIndex = 0;
    }
  }

  botonApendice.onclick = ocultar;
  botonT2.onclick = contar;
});
