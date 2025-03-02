// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigoInput = document.getElementById('amigo')
const amigosList = document.getElementById('listaAmigos')
const resultadoSorteo = document.getElementById('resultado')


const agregarAmigo = () => {
  console.log(amigoInput.value)
  if ( amigoInput.value === '' ) {
    alert('Por favor ingresa un nombre de amigo')
    return
  }
  agregarElementoHijoLista(amigoInput.value, amigosList)
  amigoInput.value = ''
}


const sortearAmigo = () => {
  const amigosList = document.querySelectorAll('#listaAmigos li')
  console.log({ amigosList })
  if (amigosList.length === 0) {
    alert('Por favor ingresa un nombre de amigo')
    return
  }

  const numeroAleatorio = Math.floor(Math.random() * amigosList.length);
  agregarElementoHijoLista(amigosList[numeroAleatorio].outerText, resultadoSorteo)
}

const agregarElementoHijoLista = (value, padre) => {
  const nuevoAmigo = document.createElement('li');
  nuevoAmigo.textContent = value;
  padre.appendChild(nuevoAmigo)
}