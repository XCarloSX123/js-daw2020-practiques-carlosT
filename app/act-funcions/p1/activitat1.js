window.onload = function preguntar() {
  //Definimos las variables
  var palabra;
  const lista = new Set();

  //Bucle con stop cuando la variable 'palabra' sea null
  do {
    palabra = window.prompt("Escribe una palabra");

    //Agrega la palabra escrita por consola al set 'lista' con la condicion que no sea null
    if (palabra !== null) {
      lista.add(palabra);
    } else {
    }
  } while (palabra !== null);

  //Variable donde se almacena la conversion del set 'lista' a array
  var resultado = Array.from(lista);

  //Ordena el contenido de 'resultado' en order alfabético en modo descendente (Z a A)
  resultado.sort((a, b) => b.localeCompare(a, "es"));

  //Muestra por consola el contenido de 'resultado'
  console.log(resultado);
};
