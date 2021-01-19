var video = document.querySelector('#video');
var tiempo = document.querySelector('#tiempo');

//Al hacer click se reproducira o se pausara el video
video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

//Al hacer click se mostrara la duracion del video en minutos:segundos
video.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  //Almaceno la duracion del video en segundos
  var duracion = parseInt(video.duration);
  var minutos = '';
  var segundos = '';

  if (video.tiempo > 59) {
    minutos = duracion / 60;

    segundos = minutos / 60;
  } else {
    minutos = 0;
    segundos = duracion;
  }

  //Muestra la duracion por pantalla
  tiempo.textContent = 'Duracion: ' + minutos + ':' + segundos;
});
