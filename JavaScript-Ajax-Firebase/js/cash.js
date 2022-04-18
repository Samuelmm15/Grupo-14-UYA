var usuario1={
  mod_pago_: "Crédito",
  descuento: 30,
  prod_compra: [
    {
      precio: 5,      
    },
    {
      precio: 2,
    }    
  ]
}
  
document.addEventListener('DOMContentLoaded', function () {
    const botonT4 = document.getElementById("botonT4");
    function GetTotal() {
        document.getElementById("titulo_").innerHTML = "<h4><br>Importe y fecha</h4>";
        document.getElementById("pago_").innerHTML = "Modo de pago: " + usuario1.mod_pago_;
        var sum = 0;
        var fecha_pago = "";
        var hoy = new Date();
        var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
        for (var i = 0; i < usuario1.prod_compra.length; i++) {
            sum += usuario1.prod_compra[i].precio;
        }
        if (usuario1.mod_pago_ !== "Crédito"){
            fecha_pago = fecha + ' ' + hora;
        }else{fecha_pago = "dentro de 7 días laborables";}

        document.getElementById("fecha_").innerHTML = "Fecha de pago: " + fecha_pago;
        document.getElementById("total_desc_").innerHTML = "Total (aplicando descuento): " + (sum - (sum * (usuario1.descuento / 100))) + "€";
    }
    botonT4.onclick = GetTotal;
});