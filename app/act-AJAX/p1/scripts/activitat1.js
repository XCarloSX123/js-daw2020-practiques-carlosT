const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
  });
}

/**
 * Se recoge y se agrega información con GET y POST con las url que queremos
 * @param {int} numsecs numero de segundos que tardara en mostrar los resultados por pantalla
 * @param {int} user id del usuario extraido del formulario
 */

function procesarFetch(numsecs, user) {
  const BASE_URL_delay = BASE_URL + user + '?delay=' + numsecs;
  let status = document.getElementById('status');
  let email = document.getElementById('email');
  let name = document.getElementById('name');
  let id = document.getElementById('id');

  fetch(BASE_URL_delay)
    .then((response) => {
      //Si la conexion a la url es exitosa devuelvo la informacion en formato json
      if (response.ok) {
        return response.json();

        //En caso contrario devuelvo un error con el estado de la respuesta
      } else {
        throw new Error(response.status);
      }
    })
    .then((mjson) => {
      id.textContent = mjson.data.id;
      email.textContent = mjson.data.email;

      //Envio los datos recogidos a la segunda URL con el metodo POST
      fetch(POSTMAN_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(mjson.data),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          name.innerHTML = json.json.first_name;
          status.textContent = '200';
        });
    })
    .catch((error) => {
      status.textContent = error.message;
    });
}
