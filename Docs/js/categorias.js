const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		categoriaActiva = categoria.dataset.categoria;

		contenedorPreguntas.forEach((contenedor) => {
			if(contenedor.dataset.categoria === categoriaActiva){
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		});
	});
	categoria.addEventListener('keydown', (e) => {
		if (e.keyCode === 13) {
			categorias.forEach((elemento) => {
				elemento.classList.remove('activa');
			});
	
			e.currentTarget.classList.toggle('activa');
			categoriaActiva = categoria.dataset.categoria;
	
			contenedorPreguntas.forEach((contenedor) => {
				if(contenedor.dataset.categoria === categoriaActiva){
					contenedor.classList.add('activo');
				} else {
					contenedor.classList.remove('activo');
				}
			});
		}
	});
});