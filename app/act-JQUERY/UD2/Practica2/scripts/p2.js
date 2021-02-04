$(() => {
  var $switcher = $('.switcher');
  var $botonesSwitcherOrig = $('.switcher').children('button');
  var $main = $('main');

  //Por defecto elimina los botones
  $botonesSwitcherOrig.remove();

  //Array que contienen los botones que luego se mostraran por pantalla
  var botones = [
    $('<button class="selected" data-style="default">Defecto</button>'),
    $('<button data-style="narrow">Estrecho</button>'),
    $('<button data-style="large">Grande</button>'),
  ];

  $(botones).each(function (ind, elem) {
    $switcher.append(elem);
  });

  var $botonesSwitcherNuevos = $('.switcher').children('button');

  $botonesSwitcherNuevos.addClass('hidden');

  //Cuando el raton pasa por encima del contenedor se aplica el estilo hover
  $switcher.hover(
    function () {
      $(this).addClass('hover');
    },

    //Cuando sale se elimina el estilo hover
    function () {
      $(this).removeClass('hover');
    }
  );

  //Agrega o elimina la clase hidden cada vez que se hace click en el contenedor
  $switcher.click(function () {
    $botonesSwitcherNuevos.toggleClass('hidden');
  });

  //Cuando se clicke un botón se le aplicara a dicho boton el estilo selected
  $switcher.on('click', 'button', function (evento) {
    //Evita que cuando se haga click en el boton se escondan los tres botones
    evento.stopPropagation();

    $('button').removeClass('selected');

    $(this).toggleClass('selected');

    //Se aplicara un estilo al main en funcion del boton que se seleccione
    if ($(this).text() === 'Grande') {
      $main.removeClass();
      $main.addClass('large');
    } else if ($(this).text() === 'Estrecho') {
      $main.removeClass();
      $main.addClass('narrow');
    } else {
      $main.removeClass();
    }
  });
});
