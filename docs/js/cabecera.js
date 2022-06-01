(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space

  document.addEventListener('DOMContentLoaded', function() {
  
    const botonApendice = document.getElementById("apendiceMovil");
    function ocultar() {
      let coleccion = document.getElementById("nav-mobile").getElementsByTagName('a');
      for (var i = 0; i < coleccion.length; i++) {
        coleccion[i].tabIndex = 0;
      }
    }
  
    botonApendice.onclick = ocultar;
  });