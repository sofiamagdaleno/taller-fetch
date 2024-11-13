// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// lo cual asegura que el DOM esté cargado antes de ejecutar este código.
// Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // Seleccionamos el div con id "container" para colocar la información en él

/**
 * Función que recibe un array con los datos y los muestra en el DOM.
 * Por cada elemento del array, se crea un párrafo que contiene el nombre y apellido.
 */
function showData(dataArray) {
  dataArray.forEach(item => {
    const nameElement = document.createElement('p');
    nameElement.textContent = `${item.name} ${item.lastname}`;
    container.appendChild(nameElement);
  });
}

fetch(DATA_URL)
  .then(response => response.json())
  .then(data => {
    showData(data.students); 
  })
  .catch(error => console.error('Error al cargar los datos:', error));
