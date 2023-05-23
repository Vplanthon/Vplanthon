//Transicion del carrete
document.addEventListener("DOMContentLoaded", function () {
	var carrete = document.querySelector(".carreteImg");
	var imagenes = carrete.querySelectorAll("img");
	var anchoCarrete = carrete.offsetWidth;
	var indiceImagenActual = 0;
	function mostrarSiguienteImagen() {
		indiceImagenActual++;
		if (indiceImagenActual >= imagenes.length) {
			indiceImagenActual = 0;
		}
		var distancia = -1 * anchoCarrete * indiceImagenActual;
		carrete.style.transform =
			"translateX(" + distancia + "px)";
	}
	setInterval(mostrarSiguienteImagen, 5000);
});

// FORMULARIO
var formulario =
		document.getElementsByName("formulario")[0], //[0] Primer elemento, el formulario en si mismo.
	elementos = formulario.elements,
	boton = document.getElementById("b1"); // El boton

// Validamos Nombre

var validarNombre = function (e) {
	if (formulario.nombre.value == 0) {
		// Si el campo id="nombre" del form está vacio
		alert("Completa el campo nombre");
		e.preventDefault(); // Evita elcomportamiento por defecto
	}
	if (formulario.apellido.value == 0) {
		// Si el campo id="nombre" del form está vacio
		alert("Completa el campo apellido");
		e.preventDefault(); // Evita elcomportamiento por defecto
	}
	if (formulario.email.value == 0) {
		// Si el campo id="nombre" del form está vacio
		alert("Completa el campo email");
		e.preventDefault(); // Evita elcomportamiento por defecto
	}
	if (formulario.telefono.value == 0) {
		// Si el campo id="nombre" del form está vacio
		alert("Completa el campo telefono");
		e.preventDefault(); // Evita elcomportamiento por defecto
	}

	if (formulario.mensaje.value == 0) {
		// Si el campo id="nombre" del form está vacio
		alert("Completa el campo mensaje");
		e.preventDefault(); // Evita elcomportamiento por defecto
	}
};

// Se ejecuta al presionar submit e invoca a las tres validaciones

var validar = function (e) {
	// "e" es el evento recibido del form
	validarNombre(e);
};

// Espera que se presione "enviar" y llama a "validar"
// submit es un evento DEL FORM
formulario.addEventListener("submit", validar);
