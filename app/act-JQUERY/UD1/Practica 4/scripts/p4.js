$(() => {
  let $primero = "<div id='primero'></div>";
  let $href = "<a href='#primero'>Back to the top</a>";

  //Punto 1 (Primera parte): Añado el div para que los links que se agreguen funcionen
  //$('body').prepend($primero);

  //Punto 1 (Segunda parte): Agrego los links para volver al principio del documento
  //$('div.chapter p').after($href);

  //Punto 2: Inserto todos los "footnote" antes del footer
  //$('.footnote').insertBefore('div#footer');

  //Punto 3: Hacer lista enumerada de los "footnote"
  //$('.footnote').wrapAll('<ol></ol>');
  //$('.footnote').wrap('<li></li');

  //Punto 4: Inserto los "footnote" y luego hago una lista numerada
  $('div.chapter')
    .after($('.footnote'))
    .nextAll(':not(#footer)')
    .wrapAll('<ol></ol>')
    .wrap('<li></li>');

  //Punto 5 (Primera parte): Añado el div para que los links que se agreguen funcionen
  $($primero).prependTo('body');

  //Punto 5 (Segunda parte): Agrego los links para volver al principio del documento
  $($href).insertAfter('div.chapter p');
});
