const listaordenada = [];
var listaP = document.getElementsByTagName('p');

/**
 * Pregunta al usuario si quiere ordenar las palabras del documento HTML
 */
function mostrarpalabras() {
  var respuesta = window.confirm(
    'Quieres ordenar las palabras? Acepta si quieres / Cancela si no quieres'
  );

  if (respuesta == true) {
    ordenar();
    document.write('<h5>Lista palabras ordenadas</h5>');

    for (var i of listaordenada) {
      document.write(i + '<br /><br />');
    }
  }
}

/**
 * Ordena las palabras del array alfabeticamente
 */
function ordenar() {
  for (var i of listaP) {
    listaordenada.push(i.innerHTML);
    listaordenada.sort();
  }
}

//Pasados 3 segundos pregunta al usuario si ordena las palabras
setTimeout(() => {
  mostrarpalabras();
}, 3000);
