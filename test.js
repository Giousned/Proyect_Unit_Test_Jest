// // importar la función sum del archivo app.js
// const { sum } = require('./app.js');

// // comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     //dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//     // esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });


// describe('app.js', () => {
//     test('La suma de 1 + 2 es igual a 3', () => {
//         expect(sum(1,2)).toBe(3);
//     })
// })


// importo las funciones desde app.js
const { fromDollarToYen, fromEuroToDollar, fromYanToPound, fromDollarToEuro } = require('./app.js');


test("One euro should be 1.206 dollars", function(){
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be  yen", function(){
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBeCloseTo(373.04); //1 dollar son 106.6 yen, entonces 3.5 dollares deberian ser = (3.5 * 106.6)
})

test("One yan should be  pounds", function(){
    // hago mi comparacion (la prueba)
    expect(fromYanToPound(3.5)).toBeCloseTo(0.022); //1 yan son 0.0063 pounds, entonces 3.5 yen deberian ser = (3.5 * 0.0063)
})

test("One dollar should be  euros", function(){
    // hago mi comparacion (la prueba)
    expect(fromDollarToEuro(3.5)).toBeCloseTo(2.92); //1 dollar son 0.833 euros, entonces 3.5 dollares deberian ser = (3.5 * 0.833)
})