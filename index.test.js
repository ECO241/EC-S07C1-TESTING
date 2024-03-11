const {suma} = require('./index');
const {resta} = require('./index');

/**
 * Test de la función resta
 */

test('restar 15 - 5 es igual a 10', () => {
    expect(resta(15, 5)).toBe(10);
});


/**
 * Tests de la función suma
 */
describe('sum module', () => {

    test('sumar 1 + 2 es igual a 3', () => {
        expect(suma(1, 2)).toBe(3);
    });
    
    test('sumar 10 + 20 es igual a 30', () => {
        expect(suma(10, 20)).toBe(30);
    });
    
    test('sumar -11 + 22 es igual a 11', () => {
        expect(suma(-11, 22)).toBe(11);
    });
});


/** 
 * Comportamiento de Jest con valores nulos
 * utilizando los diferentes métodos de comparación (matchers)
 *  */

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});


// Comportamiento de Jest con valores cero

test('cero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

// Comportamiento de Jest con valores de flotantes

test('agregando números de punto flotante', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); Esto no funcionará debido al error de redondeo
    expect(value).toBeCloseTo(0.3); // Esto funciona.
  });