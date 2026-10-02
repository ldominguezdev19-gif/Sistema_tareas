const formTarea = document.getElementById("tarea")
const nombreTarea = document.getElementById("nombre-tarea")
const listaTareas = document.getElementById("lista-tareas")
const btnEnviar = document.getElementById("btn-submit")

/*
console.log(listaTareas)
console.log(formtarea)
console.log(btnEnviar) = addEventListener
console.log(nombreTarea)
*/

formTarea.addEventListener("submit", function (SubmitEvent){
    SubmitEvent.preventDefault()
    console.log(nombreTarea.value)
})