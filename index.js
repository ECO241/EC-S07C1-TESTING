/**
 *  Podemos exportar funciones, variables, objetos, etc.
 *  y realizar posteriormente su importación en otros archivos.
 *  para ello, utilizamos el método module.exports
 * 
 *  y después los probamos en archivos *.test.js
 * 
 */

/** Funciones de prueba */

function suma(x, y) {
    return x + y;
}

function resta(x, y) {
    return x - y;
}

function multiplicacion(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

// Ejemplos de uso de valores externos
const datos = {uno: 1};
datos['dos'] = 2;
console.log(datos);

// Ejemplo de uso de valores externos
const value = 0.1 + 0.2;
if(value === 0.3) {
    console.log('Es igual a 0.3');
}   else {
    console.log('No es igual a 0.3');
}
// por qué? 0.1 + 0.2 = 0.30000000000000004
console.log(value);

module.exports = {suma, resta};
