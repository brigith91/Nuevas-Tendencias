// Obtener referencias a los elementos del HTML por su ID
const botonAleatorio = document.getElementById('cambiarColorBtn');
const cuerpo = document.getElementById('cuerpo');

// Referencias a los botones de colores fijos (Paso 6)
const btnRojo = document.getElementById('btnRojo');
const btnVerde = document.getElementById('btnVerde');
const btnAzul = document.getElementById('btnAzul');

/**
 * Genera un código de color hexadecimal aleatorio (#RRGGBB).
 */
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Función para cambiar el color de fondo del body.
 * @param {string} color - El color al que cambiar.
 */
function cambiarFondo(color) {
    cuerpo.style.backgroundColor = color;
}

// 1. Funcionalidad para el botón de color aleatorio
botonAleatorio.addEventListener('click', () => {
    const nuevoColor = generarColorAleatorio();
    cambiarFondo(nuevoColor);
});

// 2. Funcionalidad para los botones de colores fijos (Paso 6)
btnRojo.addEventListener('click', () => {
    cambiarFondo('red');
});

btnVerde.addEventListener('click', () => {
    cambiarFondo('green');
});

btnAzul.addEventListener('click', () => {
    cambiarFondo('blue');
});