//Cuando cargue el DOM aplicara estilos a ciertos elementos del fichero HTML
$(() => {
  $('ul li').first().css('background', 'red');
  $('ul li').last().css('background', 'blue');
  $('ul').find('#3').css('background', 'yellow'); // Filter by id
});
