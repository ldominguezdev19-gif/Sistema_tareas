const formTarea = document.getElementById("tarea")
const nombreTarea = document.getElementById("nombre-tarea")
const listaTareas = document.getElementById("lista-tareas")
const btnEnviar = document.getElementById("btn-submit")

formTarea.addEventListener("submit", function (SubmitEvent){
    SubmitEvent.preventDefault()

    const NuevaTarea = document.createElement("li")
    NuevaTarea.textContent = nombreTarea.value
    listaTareas.appendChild(NuevaTarea)

})