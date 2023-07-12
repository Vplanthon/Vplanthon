// Obtener el ID del producto de la URL
const urlParams = new URLSearchParams(
	window.location.search
);
const productId = urlParams.get("id");

// Obtener el formulario de edición
const form = document.getElementById("editarProductoForm");

// Realizar una solicitud GET al backend para obtener los datos del producto
fetch(
	`https://planthong18.pythonanywhere.com/productos/${productId}`
)
	.then((response) => response.json())
	.then((product) => {
		// Llenar los campos del formulario con los datos del producto
		document.getElementById("nombre").value =
			product.nombre;
		document.getElementById("precio").value =
			product.precio;
		document.getElementById("stock").value = product.stock;
		document.getElementById("imagen").value =
			product.imagen;
	})
	.catch((error) => {
		console.error(
			"Error al obtener los datos del producto:",
			error
		);
	});

// Envío del formulario
form.addEventListener("submit", function (event) {
	event.preventDefault(); // Evitar el envío del formulario por defecto

	// Obtener los valores de los campos del formulario
	const nombre = document.getElementById("nombre").value;
	const precio = document.getElementById("precio").value;
	const stock = document.getElementById("stock").value;
	const imagen = document.getElementById("imagen").value;

	// Crear un objeto con los datos del formulario
	const data = {
		nombre: nombre,
		precio: precio,
		stock: stock,
		imagen: imagen,
	};

	// Realizar la solicitud PUT al backend para actualizar el producto
	fetch(
		`https://planthong18.pythonanywhere.com/productos/${productId}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}
	)
		.then((response) => response.json())
		.then((result) => {
			// Manejar la respuesta del backend
			console.log(result);
			// Hacer algo con la respuesta, como redireccionar a otra página
			window.location.href = "index.html";
		})
		.catch((error) => {
			// Manejar errores
			console.error("Error:", error);
		});
});
