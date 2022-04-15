
document.querySelector('form')
  .addEventListener('submit', e => {
      e.preventDefault()
      const data = Object.fromEntries(
          new FormData(e.target )
    )
    alert(JSON.stringify(data))
});

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

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

function validacionDNI()  {
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
    alert('ERROR: El formato del DNI es incorrecto.');
    return false;
  }
  return true
}