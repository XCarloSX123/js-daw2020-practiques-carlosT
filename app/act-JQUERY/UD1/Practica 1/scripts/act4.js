$(() => {
  //Color de fondo rojo a primer li de la tercera lista
  $('ul').last().find('li').first().css({ background: 'red' });

  //Color de fondo azul a ultimo li de la primera lista
  $('ul').first().find('li').last().css({ background: 'blue' });

  //Color de fondo amarillo a tercer li de la segunda lista
  $('ul').eq(1).find('li').eq(2).css({ background: 'yellow' });
});
