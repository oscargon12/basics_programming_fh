let a = 10,
    b = 20,
    c = 30,
    d = 40,
    x = a + b;
//Se pueden definir varis variables con un solo let (en diferentes líneas)

console.log('a', a);
console.log('b' + ' ' + b);
console.log( {c} ); //Esto es una locura, imprime: {c: 10}
console.log(`x ${x}`);
console.log('%c Impresion', 'color: orange; font-weight: bold;') //Impresion con css
console.table([a, b, c, d, x]) //imprime una tabla

let e = 'Hola ',
    f = 'Spiderman';

const message = e + f;