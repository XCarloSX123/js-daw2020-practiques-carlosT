//Cuando se haga click en el boton se eliminaran todas las opciones del select
//y se creara una nueva opcion con Valor blanco seleccionada por defecto
$(() => {
  $('button#boton1').click(() => {
    $('select option').remove();
    $('select').append('<option value="Blanco" selected>Blanco</option');
  });
});
