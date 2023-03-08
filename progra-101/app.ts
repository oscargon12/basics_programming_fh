console.log('Hola Mundo!!!');

const max = (num1:number = 0, num2:number = 0, num3:number = 0, ) => {
    let higherNum:number = 0;

    /* const numsArr:number[] = [num1, num2, num3];
    for(let i = 0; i <= numsArr.length; i++){
        if(higherNum < numsArr[i]){
            higherNum = numsArr[i]
        }
    } */

    if(num1 > num2 && num1 && num3){
        higherNum = num1
    }
    else if(num2 > num1 && num2 && num3){
        higherNum = num2
    }
    else if(num3 > num2 && num3 && num1){
        higherNum = num3
    }

    return higherNum;
}

let maxValue = max(77, 21, 8);
console.log(maxValue);