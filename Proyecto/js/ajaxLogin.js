document.querySelector('#formulario_login')
  .addEventListener('submit', e => {
    e.preventDefault();
    var email = validacionEmail();
    var contraseña = validacionContraseña();

    if (email && contraseña) {
      // Codigo.
    }
  })

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