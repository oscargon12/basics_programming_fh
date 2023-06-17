const hiArrow = ( nombre ) => {
console.log(`Hola ${nombre}`);
}

hiArrow('Oscar');

//Si la arrow no tiene un RETURN explicito
//'Va retonar undefined

const sumar = ( a,b ) => { 
    return a + b;
}

console.log( sumar(1,2) );

//Si solo voy a usar un return
const sumar2 = (a,b) => a+b;

console.log( sumar2(2,5) );

//Retornando un numero random (Una línea)
const getRandom = () => Math.random();

console.log( getRandom() );