const fruits = ['apple', 'pear', 'Pineapple'];


//Si imprimo esto, ambas frutas será iguales
//Para dejarlo como es:

const otherFruits = fruits.slice();

// o

const otherFruits2 = [...fruits];

const moreFruits = fruits.push('Mango');

console.table( {fruits, otherFruits, otherFruits2} )