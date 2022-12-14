// importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One Yen should be 0.8 pound" , function(){
    expect(fromYenToPound(1)).toBe(0.8);
})

test("One Dollar should be 127.9 yen" , function(){
    expect(fromDollarToYen(1)).toBe(127.9);
})