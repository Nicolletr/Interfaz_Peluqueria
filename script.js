const nombre = document.getElementById("myname");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const dia = document.getElementById("fecha");
const proceso = document.getElementById("tratamiento");
const mensaje = document.getElementById("message");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");
form.addEventListener("submit", (e) => {
e.preventDefault();
let condicion = validacionForm();
if (condicion) {
enviarFormulario();
}
});
function validacionForm() {
form.lastElementChild.innerHTML = "";
let condicion = true;
listInputs.forEach((element) => {
element.lastElementChild.innerHTML = "";
});
//validar el nombre si es que no ingresa ningun dato
if (nombre.value.length < 1 || nombre.value.trim() == "") {
mostrarMensajeError("myname", "Nombre no valido*"); //para mostrar el mensaje de error
condicion = false;
}
if (correo.value.length < 1 || correo.value.trim() == "") {
mostrarMensajeError("email", "Correo no valido*");
condicion = false;
}
if (//si el usuario ingresa un numero de telefono menor a 10 digitos
celular.value.length != 10 ||
celular.value.trim() == "" ||
isNaN(celular.value)
) { //mostrar el siguiente mensaje
mostrarMensajeError("mobile", "Celular no valido*");
condicion = false;
}//el usuario minimo debe ingresar un dato
if (mensaje.value.length < 1 || mensaje.value.trim() == "") {
    mostrarMensajeError("message", "Mensaje no valido*"); //para mostrar el mensaje de error
    condicion = false;
}
return condicion;
}
function mostrarMensajeError(claseInput, mensaje) {
let elemento = document.querySelector(`.${claseInput}`);
elemento.lastElementChild.innerHTML = mensaje;
}
//una vez enviado el formulario se muestra
function enviarFormulario() {
form.reset();
form.lastElementChild.innerHTML = "Enviado con Exito!!";
}