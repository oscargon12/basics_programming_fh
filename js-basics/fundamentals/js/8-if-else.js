const today = new Date();
let day = today.getDate();

if( day === 0 ){
    console.log('Es domingo');
} else if (día === 1){
    console.log('Lunes');
}


// *** Logica booleana ***
//Puedo negar lo que retorne la función
const returnTrue = () => {
    return true;
}

console.log( returnTrue() );
console.log( !returnTrue() );


//** Or & And ** */
console.log(  true && true ); //true debe cumplir todo

console.log(true || true); //true se debe cumplir lmenos uno

// Otros usos del OR y AND
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

//Toma el último valor
const a1 = false && 'Hola Mundo' && 150; // false
const a2 = 'Hola' && 'Mundo' && 'soy falso' && true; //true
const a3 = soyFalse || 'ya no soy falso'; //ya no soy falso
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; //
const a5 = soyFalse || soyUndefined || returnTrue() || 'Ya no soy falso de nuevo' || true; //true, por la funcion returnTrue()