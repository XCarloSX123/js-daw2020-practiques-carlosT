var capa1 = document.getElementById('capa1');
var capa2 = document.getElementById('capa2');

//Se aplica opacidad al 50% cuando se arrastra capa1
capa1.addEventListener('drag', () => {
  capa1.style.opacity = '50%';
});

capa1.addEventListener('dragend', () => {
  capa1.style.opacity = '100%';
});

//Se aplica color de fondo rojo a capa2 cuando capa1 se posiciona encima de capa2
capa2.addEventListener('dragenter', () => {
  capa2.style.backgroundColor = 'red';
});

//Cuando capa1 se suelta sobre capa2, capa1 desaparece y capa2 cambia su color de fondo y su texto
capa2.addEventListener('dragleave', () => {
  capa2.style.backgroundColor = 'white';
});

capa2.addEventListener('dragover', function (event) {
  event.preventDefault();
});

capa2.addEventListener('drop', () => {
  capa1.style.display = 'none';
  capa2.style.backgroundColor = 'yellow';
  capa2.innerHTML = 'Lo has logrado!';
});
