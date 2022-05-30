
import { guardarDatos } from "./firebase.js"

document.querySelector('#formulario_registro')
  .addEventListener('submit', e => {
    e.preventDefault();
    var nombre = validacionNombre();
    var pago = validacionPago();
    var email = validacionEmail();
    var año = validacionAño();
    var cuenta = validacionCuenta();
    var dni = validacionDNI();
    var contraseña = validacionContraseña();

    if (nombre && pago && email && año && cuenta && dni && contraseña) {
      const datos = Object.fromEntries(new FormData(e.target));
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

function validacionNombre() {
  var valor = $("#nombre_input").val();
  if (valor == null || valor.length == 0 || !/^[A-Z]+$/i.test(valor)) {
    document.getElementById("nombre_input").ariaLabel = "ERROR: El nombre solo puede contener letras.";
    document.getElementById("nombre_input").focus();
    document.getElementById("nombre_p").innerText = "ERROR: El nombre solo puede contener letras.";

    return false;
  }
  document.getElementById("nombre_input").ariaLabel = "";
  document.getElementById("nombre_p").innerText = "";
  return true;
}

function validacionPago() {
  var valor = $("#pago_input").val();
  if (valor == null || valor.length == 0 || !/^[A-Z]+$/i.test(valor)) {
    document.getElementById("pago_input").ariaLabel = "ERROR: El metodo de pago solo puede contener letras.";
    document.getElementById("pago_input").focus();
    document.getElementById("pago_p").innerText = "ERROR: El metodo de pago solo puede contener letras.";
    return false;
  }
  document.getElementById("pago_input").ariaLabel = "";
  document.getElementById("pago_p").innerText = "";
  return true;
}

function validacionEmail() {
  var valor = $("#email_input").val();
  if (valor == null || valor.length == 0 || !/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(valor)) {
    document.getElementById("email_input").ariaLabel = "El formato del email es incorrecto, un ejemplo de sería anonimo@gmail.com.";
    document.getElementById("email_input").focus();
    document.getElementById("email_p").innerText = "El formato del email es incorrecto, un ejemplo de sería anonimo@gmail.com.";
    return false
  }
  document.getElementById("email_input").ariaLabel = "";
  document.getElementById("email_p").innerText = "";
  return true;
}

function validacionAño() {
  var valor = $("#año_input").val();
  if (valor == null || valor.length == 0 || !/^[0-9]+$/.test(valor)) {
    document.getElementById("año_input").ariaLabel = "ERROR: El año debe ser un número.";
    document.getElementById("año_input").focus();
    document.getElementById("año_p").innerText = "ERROR: El año debe ser un número.";
    return false;
  }
  document.getElementById("año_input").ariaLabel = "";
  document.getElementById("año_p").innerText = "";
  return true;
}

function validacionCuenta() {
  var valor = $("#cuenta_input").val();
  if (valor == null || valor.length == 0 || !/^[0-9]+$/.test(valor)) {
    document.getElementById("cuenta_input").ariaLabel = "ERROR: El número de cuenta debe ser un número.";
    document.getElementById("cuenta_input").focus();
    document.getElementById("cuenta_p").innerText = "ERROR: El número de cuenta debe ser un número.";
    return false;
  }
  document.getElementById("cuenta_input").ariaLabel = "";
  document.getElementById("cuenta_p").innerText = "";
  return true;
}

function validacionDNI() {
  var valor = $("#dni_input").val();
  if (valor == null || valor.length == 0 || !/^(\d{8})([-]?)([A-Z]{1})$/.test(valor)) {
    document.getElementById("dni_input").ariaLabel = "ERROR: El formato del DNI es incorrecto, debe ser 8 números seguidos de una letra mayúscula.";
    document.getElementById("dni_input").focus();
    document.getElementById("dni_p").innerText = "ERROR: El formato del DNI es incorrecto, debe ser 8 números seguidos de una letra mayúscula.";
    return false;
  }
  document.getElementById("dni_input").ariaLabel = "";
  document.getElementById("dni_p").innerText = "";
  return true
}

function validacionContraseña() {
  var valor = $("#contraseña_input").val();
  if (valor == null || valor.length == 0 || !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valor)) {
    document.getElementById("contraseña_input").ariaLabel = "ERROR: la contraseña ha de tener entre 8 y 12 letras, una mayúscula, un número y una minúscula.";
    document.getElementById("contraseña_input").focus();
    document.getElementById("contraseña_p").innerText = "ERROR: la contraseña ha de tener entre 8 y 12 letras, una mayúscula, un número y una minúscula.";
    return false;
  }
  document.getElementById("contraseña_input").ariaLabel = "La contraseña ha de tener entre 8 y 12 letras, una mayúscula, un número y una minúscula.";
  document.getElementById("contraseña_p").innerText = "";
  return true
}