/*Trae los elementos del HTML con su ID*/

/*
const formTarea = document.getElementById("tarea")
const nombreTarea = document.getElementById("nombre-tarea")
const listaTareas = document.getElementById("lista-tareas")
const btnEnviar = document.getElementById("btn-submit")

formTarea.addEventListener("submit", function (SubmitEvent){   /*escuchar cuando se envia el formulario*/
/*SubmitEvent.preventDefault()  /*Esta linea frena la recarga de la pagina*/

/*
    const NuevaTarea = document.createElement("li")
    NuevaTarea.textContent = nombreTarea.value  /*ponerle al li el texto que escribio el usuario o sea la tarea*/
/*listaTareas.appendChild(NuevaTarea)  /*mete el li dentro del ul*/
/*nombreTarea.value = ""
})
*/

const formMateria = document.getElementById("materia");
const nombreMateria = document.getElementById("nombre-materia");
const contenedorMateria = document.getElementById("contenedor-materias");
const opcionesMateria = document.getElementById("lista-materia")
const nombreTarea = document.getElementById("nombre-tarea")
const formTarea = document.getElementById("tarea")

const listaMateria = [];
function mostrarMaterias() {
  contenedorMateria.innerHTML = "";
  opcionesMateria.innerHTML = "";
  listaMateria.forEach(function (materia) {
    const nuevaMateria = document.createElement("h2");
    nuevaMateria.textContent = materia;

    const caja = document.createElement("section");
    caja.classList.add("materia");
    caja.appendChild(nuevaMateria); /*mete el titulo dentro de la caja*/
    contenedorMateria.appendChild(caja)    /*mete la caja dentro de la pagina/*/

    const opcion = document.createElement("option")
    opcion.textContent = materia
    opcion.value = materia;
    opcionesMateria.appendChild(opcion)
  });
}
mostrarMaterias();

formMateria.addEventListener("submit", function (SubmitEvent) {
  SubmitEvent.preventDefault();
  listaMateria.push(nombreMateria.value);
  nombreMateria.value = "";
  mostrarMaterias();
});

const listaTareas = []
function mostrarTareas(){
  
  }

  formTarea.addEventListener("submit", function (SubmitEvent){
    SubmitEvent.preventDefault();
    listaTareas.push({nombre: opcionesMateria.value, tarea: nombreTarea.value, completada: false})
    nombreTarea.value = "";
    console.log (listaTareas)
  })
