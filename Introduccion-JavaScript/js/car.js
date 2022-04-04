(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


var usuario={
  dni: 65297425,
  año_nac: 2001,
  num_cuenta: 9712,
  mod_pago: "Crédito",
  nombre: "Pepe Francisco Hernández ",
  descuento: 30,
  prod_compra: [
    {
      nombre: "Libro 1",
      precio: 5,      
    },
    {
      nombre: "Libro 2",
      precio: 2,
    }    
  ]
}

document.addEventListener('DOMContentLoaded', function() {
  const botonT3 = document.getElementById("botonT3");
  function GetTotal(){
    document.getElementById("titulo").innerHTML = "<h4><br>Compra Final</h4>";
    document.getElementById("nombre").innerHTML = "Nombre: " + usuario.nombre;
    document.getElementById("año").innerHTML = "Año de Nacimiento: " + usuario.año_nac;
    document.getElementById("descuento").innerHTML = "Descuento: " + usuario.descuento + "%";
    document.getElementById("pago").innerHTML = "Modo de pago: " + usuario.mod_pago;
    var sum = 0;
    var product = "";
      for(var i = 0; i < usuario.prod_compra.length; i++) {    
        sum += usuario.prod_compra[i].precio;      
    	product += usuario.prod_compra[i].nombre;
    	if(i+1 < usuario.prod_compra.length) { // Para que aparezca la coma bien.
    	  product += ", ";
        }
      }
    document.getElementById("productos").innerHTML = "Productos: " + product;  
    document.getElementById("total").innerHTML = "Total (sin aplicar descuento): " + sum + "€";    
    document.getElementById("total_desc").innerHTML = "Total (aplicando descuento): " + (sum - (sum * (usuario.descuento/100))) + "€";    
  }
  botonT3.onclick = GetTotal;
});
