let arreglo = [
    true,
    123,
    'Oscar',
    1 + 2,
    function (){},
    () => {},
    {a :1},
    ['X', 'Megaman', 'Zero', 'Dr light'],
]

console.log( arreglo[7][3] );


// *** Arrays methods ***

const videogames = ['zelda', 'Mario', 'Metroid', 'Chrono'];
let lastOne = videogames[videogames.length - 1] //Se dirige al último elemento

//El forEach ejecuta algo, por cada elemeto del array
videogames.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr})
});

//Insertar un elemento al final
let newLength = videogames.push('F-zero')
console.log('push - agrega al final');
console.log(videogames);

//Insertar uo al inicio UNSHIFT
let newLength2 = videogames.unshift('Circus');
console.log('unshift - agrega al inicio');
console.log(videogames);

//Borrar el ultimo
let erasedGame = videogames.pop()
console.log('pop - quita el ultimo');
console.log(videogames);

//Borrar un elemento en una posición especifica
//arr.splice(indice, cuantos)
videogames.splice( 1, 2 ); //Borra 2 desde el segundo
console.log('Elimina un indice especifico');
console.log(videogames);

//Buscar una posicion especifica
let metroidIndex = videogames.indexOf('Metroid');
console.log(metroidIndex);