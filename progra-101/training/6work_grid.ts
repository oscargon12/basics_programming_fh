export let numsArr:number[] = [1, 2, 3, 4, 5];

//let line:string = '';

for(let i = 0; i < numsArr.length; i++){
    
    let newLine:string = ''; //Nueva línea de string vacía por cada iteracion del 1er for
    for(let j = 0; j < numsArr.length; j++){
        newLine += ` ${numsArr[i] * numsArr[j]}`
    }
    console.log(newLine) 
}