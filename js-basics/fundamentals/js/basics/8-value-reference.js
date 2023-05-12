const fruits = ['apple', 'pear', 'Pineapple'];


//Si imprimo esto, ambas frutas será iguales
//Para bloquear que 'Mango' se duplique como debe ser:

const otherFruits = fruits.slice();

// o

const otherFruits2 = [...fruits];

const moreFruits = fruits.push('Mango');

console.table( {fruits, otherFruits, otherFruits2} )