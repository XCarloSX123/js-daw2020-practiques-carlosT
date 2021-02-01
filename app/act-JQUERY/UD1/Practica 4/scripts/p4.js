$(() => {
  let $primero = "<div id='primero'></div>";
  let $href = "<a href='#primero'>Back to the top</a>";

  //Punto 1 (Primera parte): Añado el div para que los links que añadiré después funcionen correctamente
  //$('body').prepend($primero);

  //Punto 1 (Segunda parte): Añado los links para volver al principio del documento después de cada párrafo
  //$('div.chapter p').after($href);

  //Punto 2: Inserto todos los "footnote" antes del footer
  //$('.footnote').insertBefore('div#footer');

  //Punto 3: Hacer lista enumerada de los "footnote"
  //$('.footnote').wrapAll('<ol></ol>');
  //$('.footnote').wrap('<li></li');

  //Punto 4: Insertar los "footnote" y hacer lista enumerada a la vez
  $('div.chapter')
    .after($('.footnote'))
    .nextAll(':not(#footer)')
    .wrapAll('<ol></ol>')
    .wrap('<li></li>');

  //Punto 5 (Primera parte): Añado el div para que los links que añadiré después funcionen correctamente (CON PREPENDTO)
  $($primero).prependTo('body');

  //Punto 5 (Segunda parte): Añado los links para volver al principio del documento después de cada párrafo (CON INSERTAFTER)
  $($href).insertAfter('div.chapter p');
});
