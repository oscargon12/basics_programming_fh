console.log('Hola Mundo!!!');

const numbersArr:number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5]

let numType:string = '';

for(let i = 0; i < numbersArr.length; i++ ){

    (numbersArr[i] % 2 === 0) ? numType = 'par' : numType = 'Impar';
    console.log(`El numero ${numbersArr[i]} es ${numType}`);
}