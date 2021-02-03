$(() => {
  var $parrafo = $('p');

  //Extraigo el contenido del parrafo
  var texto_parrafo = $parrafo.html().trim();

  //Agrego a un array todos los elementos del parrafo y los separo por un espacio
  var array = texto_parrafo.split(' ');

  //Agrego cada elemento a un span
  var agregar_a_container = array.map((word) => ` <span>${word}</span>`);

  //Inserto el texto dentro del parrafo
  $parrafo.html(agregar_a_container);

  //Evento que aplica color de fondo amarillo y fuente en negrita cuando se haga click en cualquier elemento
  $parrafo.on('click', 'span', function () {
    $(this).css({
      'background-color': 'yellow',
      'font-weight': 'bold',
    });
  });
});
