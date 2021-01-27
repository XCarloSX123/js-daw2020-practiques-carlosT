//Cuando se pulse el boton devolvera por pantalla el numero de elementos que hay dentro del segundo div
$(() => {
  $('button#button1').click(() => {
    var elementos = $('div.div').children().length;

    $('div')
      .eq(2)
      .append('<p>Hay ' + elementos + ' elementos dentro del segundo div</p>');
  });
});
