
import {guardarDatos} from "./firebase.js"

 document.querySelector('#formulario_datos')
 .addEventListener('submit', e => {
   e.preventDefault();
   
   if (validacionContraseña() && validacionDNI() && validacionEmail && validacionNumero() && validacionTexto()) {
     const datos = Object.fromEntries(new FormData(e.target ))
     alert(JSON.stringify(datos))
     console.table(datos);
     realizarPost(datos);
     guardarDatos(datos);
   }
 })

 function realizarPost(datos) {
   $.ajax({
     url: 'https://jsonplaceholder.typicode.com/comments',
     type: 'POST',
     async: true,
     data: datos,
     success: function (respuesta) {
       console.log(JSON.stringify(respuesta));
     },
   });
 }

function validacionTexto()  {
var valor = $("#nombre_input").val();
if( valor == null || valor.length == 0 || !/^[A-Z]+$/i.test(valor) ) {
 alert('ERROR: El nombre solo puede contener letras.');
 return false;
}
var valor = $("#pago_input").val();
if( valor == null || valor.length == 0 || !/^[A-Z]+$/i.test(valor) ) {
 alert('ERROR: El metodo de pago solo puede contener letras.');
 return false;
}
return true;
}

function validacionEmail()  {
var valor = $("#email_input").val();
if( valor == null || valor.length == 0 || !/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(valor) ) {
 alert('ERROR: El formato del email es incorrecto.');
 return false
} 
return true;
}

function validacionNumero()  {
var valor = $("#año_input").val();
if( valor == null || valor.length == 0 ||  !/^[0-9]+$/.test(valor) ) {
 alert('ERROR: El año debe ser un número.');
 return false;
}
var valor = $("#cuenta_input").val();
if( valor == null || valor.length == 0 ||  !/^[0-9]+$/.test(valor) ) {
 alert('ERROR: El número de cuenta debe ser un número.');
 return false;
}
return true;
}

function validacionDNI() {
var valor = $("#dni_input").val();
if( valor == null || valor.length == 0 || !/^(\d{8})([-]?)([A-Z]{1})$/.test(valor) ) {
 alert('ERROR: El formato del DNI es incorrecto.');
 return false;
}
return true
}

function validacionContraseña()  {
var valor = $("#contraseña_input").val();
if( valor == null || valor.length == 0 || !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valor) ) {
 alert('ERROR: El formato de la contraseña es incorrecto.');
 return false;
}
return true
}