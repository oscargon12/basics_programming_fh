console.log('Hola Mundo!!!');

const greet = (name:string = 'mundo') => { // = 'mundo' es el argumento por defecto
    console.log(`Hola ${name}`);
}
let firstName:string = 'OscarE';
greet(firstName);

const addTwoNumbers = (num1:number, num2:number = 0):number => {    //El tipo de dato que retorna esta función :number 
    return num1 + num2;     //num2:number = 0 si no entrego el otro argumento, por defecto será 0
}
let total:number = addTwoNumbers(10, 20);   //La variable debe recibir el mismo tipo de dato :number
console.log(`Total: ${total}`)