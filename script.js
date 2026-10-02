const formTarea = document.getElementById("tarea")
const nombreTarea = document.getElementById("nombre-tarea")
const listaTareas = document.getElementById("lista-tareas")
const btnEnviar = document.getElementById("btn-submit")

formTarea.addEventListener("submit", function (SubmitEvent){
    SubmitEvent.preventDefault()  /*Esta linea frena la recarga de la pagina*/ 

    const NuevaTarea = document.createElement("li")
    NuevaTarea.textContent = nombreTarea.value  /*ponerle al li el texto que escribio el usuario o sea la tarea*/ 
    listaTareas.appendChild(NuevaTarea)  /*mete el li dentro del ul*/

})