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
    document.getElementById("dni").innerHTML = "DNI: " + usuario.dni;    
    document.getElementById("cuenta").innerHTML = "Nº de Cuenta: " + usuario.num_cuenta;
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

    document.getElementById("titulo").tabIndex = 0;
    document.getElementById("nombre").tabIndex = 0;
    document.getElementById("año").tabIndex = 0;
    document.getElementById("dni").tabIndex = 0;   
    document.getElementById("cuenta").tabIndex = 0;
    document.getElementById("descuento").tabIndex = 0;
    document.getElementById("pago").tabIndex = 0;
    document.getElementById("productos").tabIndex = 0;
    document.getElementById("total").tabIndex = 0;
    document.getElementById("total_desc").tabIndex = 0;
  }
  botonT3.onclick = GetTotal;
});
