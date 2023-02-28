export const numbersArr:number[] = [2,5,3,4,49,5,35,75,2,3,99]

let higherNum:number = 0;

for(let i = 0; i < numbersArr.length; i++){
    if(higherNum < numbersArr[i]){
        higherNum = numbersArr[i]
    }
}

console.log(`El numero mayor es ${higherNum}`);