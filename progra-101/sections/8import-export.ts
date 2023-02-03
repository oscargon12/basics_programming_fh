import { addTwoNumbers, DivideTwoNumbers, SubstractTwoNumbers, TimesTwoNumbers } from "../helpers/math_gelpers";

console.log('Hola Mundo!!!');

let num1:number = 10;
let num2:number = 20;

let totalAdd:number = addTwoNumbers(num1, num2);
let totalSubstract:number = SubstractTwoNumbers(num1, num2);
let totalTimes:number = TimesTwoNumbers(num1, num2);
let totalDivide:number = DivideTwoNumbers(num1, num2);


console.log(`Total Suma: ${totalAdd}`)
console.log(`Total Resta: ${totalSubstract}`)
console.log(`Total Mult: ${totalTimes}`)
console.log(`Total Divi: ${totalDivide}`)