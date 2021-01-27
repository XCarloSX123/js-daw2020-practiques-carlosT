//Tras pasar 3 segundos se le pregunta al usuario si quiere ordenar la lista
$(() => {
  setTimeout(() => {
    if (window.confirm('Quieres ordenar las palabras?')) {
      $('h5#titulo').text('Lista palabras ordenadas');
      ordenar();
    }
  }, 3000);
});

/**
 * Ordena las palabras del fichero HTML
 */
function ordenar() {
  //Obtiene la lista
  const $listadesordenada = $('ul#desordenadas');

  //Obtiene los elementos hijos de tipo li de la lista
  const $palabras = $listadesordenada.children('li').get();

  //Ordena las palabras en orden alfabetico en el idioma español
  const ordenadas = $palabras.sort((a, b) =>
    $(a).text().localeCompare($(b).text(), 'es')
  );

  //Agrega las palabras ordenadas a la lista
  $.each(ordenadas, (clave, palabra) => {
    $listadesordenada.append(palabra);
  });
}
