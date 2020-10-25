
function clickSubmit() {
  var reg = new RegExp("@");;
  let usuario = document.getElementById("usuario").value;
  let clave = document.getElementById("clave").value;

  if (usuario == "") { 

    alert('No ha ingresado un usuario');

  } else if (!reg.test(usuario)) { 

    alert('Falta el arroba en el usuario');

  } else if (clave == "") {

    alert('No ha ingresado una clave');

  } else {
    alert('Bienvenido');
  }
}

