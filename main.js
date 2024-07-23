// pedir nombres, preguntar si quiere agregar y listo

const nombres = [];

function ingresarNombres() {
  let cantidadNombres = parseInt(
    prompt("Ingrese la cantidad de nombres que va a utilizar:")
  );
  for (let i = 0; i < cantidadNombres; i++) {
    let nombre = prompt("Ingrese el nombre de la persona " + (i + 1) + ":");
    nombres.push(nombre);
  }
}

function mostrarNombres() {

    console.log("Los nombres ingresados son: ")

  for (i in nombres) {
    console.log(nombres[i]);
  }
}

ingresarNombres();

while (true) {
  respuesta = confirm("Desea agregar mas nombres?");
  if (respuesta == true) {
    ingresarNombres();
  } else {
    break;
  }
}

mostrarNombres();

alert("Mira la consola! \nListo!");

