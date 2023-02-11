
export const numsTimesTable = (base:number, limit:number = 10) => {
    
    try {
        if (limit <= 0){
            throw new Error('El limite debe ser mayor a 0')
        }
        
        for(let i = 1; i <= limit; i++){
            let result:number = i * base;
            console.log(result)
        }
    } catch (error) {
        console.log(`Se produjo el siguiente error ${error}`)   
    }
}
