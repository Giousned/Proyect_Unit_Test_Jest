// // console.log("Hello World")

// // esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// // solo un registro en consola para nosotros.
// console.log(sum(7,3))

// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)
// module.exports = { sum };


// one euro is:
const ONE_EURO_IS = {
    JPY: 127.9, // japan yen
    USD: 1.2, // us dollar
    GBP: 0.8, // british pound
}

// OPCION A
const fromDollarToYen = (dollars) => fromDollarToEuro(dollars)*ONE_EURO_IS.JPY;

const fromEuroToDollar = (euros) => euros*ONE_EURO_IS.USD;

const fromYanToPound = (yenes) => yenes/ONE_EURO_IS.JPY*ONE_EURO_IS.GBP;

const fromDollarToEuro = (dollars) => dollars/ONE_EURO_IS.USD;

// // OPCION B
// const fromDollarToYen = (dollars) => dollars*ONE_EURO_IS.USD*ONE_EURO_IS.JPY;


// const fromEuroToDollar = (euros) => euros*ONE_EURO_IS.USD;


// const fromYanToPound = (yenes) => yenes/ONE_EURO_IS.JPY*ONE_EURO_IS.GBP;


// const fromDollarToEuro = (dollars) => dollars/ONE_EURO_IS.USD;

module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound, fromDollarToEuro };