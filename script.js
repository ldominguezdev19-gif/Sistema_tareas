const formMateria = document.getElementById("materia");
const nombreMateria = document.getElementById("nombre-materia");
const contenedorMateria = document.getElementById("contenedor-materias");
const opcionesMateria = document.getElementById("lista-materia");
const nombreTarea = document.getElementById("nombre-tarea");
const formTarea = document.getElementById("tarea");

const listaMateria = [];
const listaTareas = [];

function mostrarMaterias() {
  contenedorMateria.innerHTML = "";
  opcionesMateria.innerHTML = "";

  listaMateria.forEach(function (materia) {
    const nuevaMateria = document.createElement("h2");
    nuevaMateria.textContent = materia;

    const caja = document.createElement("section");
    caja.classList.add("materia");
    caja.appendChild(nuevaMateria); /* mete el titulo dentro de la caja */

    /* lista de tareas de esta materia */
    const lista = document.createElement("ul");

    listaTareas.forEach(function (tarea) {
      if (tarea.materia === materia) {
        const item = document.createElement("li");

        if (tarea.completada == true) {
          item.classList.add("completada");
        }

        const texto = document.createElement("span");
        texto.classList.add("texto");
        texto.textContent = tarea.texto;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");

        const btnEliminar = document.createElement("button");
        btnEliminar.type = "button";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", function (evento) {
          evento.stopPropagation();
          const posicion = listaTareas.indexOf(tarea);
          listaTareas.splice(posicion, 1);
          mostrarMaterias();
        });

        acciones.appendChild(btnEliminar);

        item.addEventListener("click", function () {
          tarea.completada = !tarea.completada;
          mostrarMaterias();
        });

        item.appendChild(texto);
        item.appendChild(acciones)
        lista.appendChild(item);
      }
    });

    caja.appendChild(lista); /* mete la lista dentro de la caja */
    contenedorMateria.appendChild(caja); /* mete la caja dentro de la pagina */

    const opcion = document.createElement("option");
    opcion.textContent = materia;
    opcion.value = materia;
    opcionesMateria.appendChild(opcion);
  });
}

mostrarMaterias();

formMateria.addEventListener("submit", function (SubmitEvent) {
  SubmitEvent.preventDefault();
  listaMateria.push(nombreMateria.value);
  nombreMateria.value = "";
  mostrarMaterias();
});

formTarea.addEventListener("submit", function (SubmitEvent) {
  SubmitEvent.preventDefault();
  listaTareas.push({
    materia: opcionesMateria.value,
    texto: nombreTarea.value,
    completada: false,
  });
  nombreTarea.value = "";
  mostrarMaterias();
});
