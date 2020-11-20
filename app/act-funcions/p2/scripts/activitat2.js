window.onload = function preguntar() {
  //Definimos las variables
  var palabra;
  var contador = 0;
  const mapa = new Map();
  const lista = [];

  //Bucle con stop cuando la variable 'palabra' sea null
  do {
    palabra = window.prompt("Escribe una palabra");

    //Agrega la palabra escrita por consola al array en la posicion indicada por 'contador' con la condicion que 'palabra' no sea null
    if (palabra !== null) {
      lista[contador] = palabra;
      contador++;
    } else {
    }
  } while (palabra !== null);

  //Usa la funcion reduce para comparar las palabras del array. Cuando una ocurrencia se repita, eliminara la repetida y se sumara 1 al contador de la palabra introducida
  lista.reduce((contadornombre, word) => {
    contadornombre[word] = (contadornombre[word] || 0) + 1;

    //Agrega la palabra y su contador al map
    mapa.set(word, contadornombre[word]);

    //Retorna el contador 'contadornombre'
    return contadornombre;
  }, {});

  //Mostrar el contenido del map
  console.log(mapa);
};
