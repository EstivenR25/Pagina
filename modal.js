// Es para el botón de abrir y la "X" de cierre
const modal = document.getElementById('modal-historia');
const btnAbrirModal = document.querySelector('.btn-1');
const btnCerrarModal = document.querySelector('.close');

// Este Abre el modal al hacer clic en el botón "HISTORIA"
btnAbrirModal.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    modal.style.display = 'block';
});

//Este  Cierra el modal al hacer clic en la "X"
btnCerrarModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

//Este  Cierra el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

