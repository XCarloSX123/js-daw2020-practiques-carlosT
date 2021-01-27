$(() => {
  //Aplica estilo horizontal a las listas de nivel superior de la lista con id selected-plays
  $('ul#selected-plays > li').addClass('horizontal');

  //Elementos li hijos de las listas se les aplica el estilo sub-level
  $('ul#selected-plays > li > ul').addClass('sub-level');

  //Se aplica el estilo big-letter a la primera letra del los elementos de nivel superior
  $('ul.clear-after > li').addClass('big-letter');

  //Aplica el estilo mailto a los links que su href empiece por mailto
  $("li > a[href^='mailto']").addClass('mailto');

  //Aplica el estilo pdflink a los links que su href termine en pdf
  $("li > a[href$='pdf']").addClass('pdflink');

  //Aplica el estilo henrylink a los limks que su href empiece en http y tambien contengan la palabra henry
  $("li > a[href^='http'], a[href~='henry'").addClass('henrylink');

  //Aplica el estilo alt a las filas impares hijas de una tabla
  $('table  tr:nth-child(odd)').addClass('alt');

  //Selecciona las obras que contengan la palabra Henry y se le aplica el estilo highlight
  $('table tr > td:contains("Henry")').addClass('highlight');

  //Aplica el estilo highlight a la celda siguiente de la celda que contenga Henry como texto
  $('table tr > td:contains("Henry")').next().addClass('highlight');

  //Aplica el estilo highlight en la primera tabla a todas las celdas siguientes a la celda que contenga el texto "et"
  $('table:nth-of-type(1) tr > td:contains("et")')
    .nextAll()
    .addClass('highlight');
});
