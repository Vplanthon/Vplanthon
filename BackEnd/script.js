// solicitud HTTP GET
fetch("https://planthong18.pythonanywhere.com/productos")
	.then((response) => response.json())
	.then((data) => {
		// Llenamos la tabla con los datos recibidos
		const tableBody = document.querySelector(
			".product-table tbody"
		);

		data.forEach((product) => {
			const row = document.createElement("tr");

			const iconCell = document.createElement("td");
			iconCell.innerHTML = '<img src="/img/planta.png">';
			row.appendChild(iconCell);

			const idCell = document.createElement("td");
			idCell.textContent = product.id;
			row.appendChild(idCell);

			const nombreCell = document.createElement("td");
			nombreCell.textContent = product.nombre;
			row.appendChild(nombreCell);

			const precioCell = document.createElement("td");
			precioCell.textContent = product.precio;
			row.appendChild(precioCell);

			const stockCell = document.createElement("td");
			stockCell.textContent = product.stock;
			row.appendChild(stockCell);

			const imagenCell = document.createElement("td");
			const imagen = document.createElement("img");
			imagen.src = product.imagen;
			imagenCell.appendChild(imagen);
			row.appendChild(imagenCell);

			const editCell = document.createElement("td");
			const editLink = document.createElement("a");
			editLink.href = `editarProducto.html?id=${product.id}`;
			editLink.innerHTML = '<img src="/img/editar.png">';
			editCell.appendChild(editLink);
			row.appendChild(editCell);
			/*---------------------------------------------------------------------------------*/

			/*---------------------------------------------------------------------------------*/
			const deleteCell = document.createElement("td");
			const deleteIcon = document.createElement("span");
			deleteIcon.className = "delete-icon";
			deleteIcon.innerHTML =
				'<img src="/img/eliminar.png">';
			deleteCell.appendChild(deleteIcon);
			row.appendChild(deleteCell);

			deleteCell.addEventListener("click", () => {
				const productId = product.id; // ID del producto a eliminar

				// solicitud HTTP DELETE al backend
				fetch(
					`https://planthong18.pythonanywhere.com/productos/${productId}`,
					{
						method: "DELETE",
					}
				)
					.then((response) => {
						if (response.ok) {
							// Eliminación exitosa
							row.remove();
						} else {
							// mensaje de error en caso de que la eliminación falle
							console.error(
								"Error al eliminar el producto:",
								response.status
							);
						}
					})
					.catch((error) => {
						console.error(
							"Error al eliminar el producto:",
							error
						);
					});
			});

			tableBody.appendChild(row);
		});
	})
	.catch((error) => {
		console.error(
			"Error al obtener los datos del backend:",
			error
		);
	});

// Obtener el formulario
const form = document.getElementById("nuevoProductoForm");

// envío del formulario
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

	// Realizar la solicitud POST al backend
	fetch(
		"https://planthong18.pythonanywhere.com/productos",
		{
			method: "POST",
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
