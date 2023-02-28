
export const calcTriangle = (base:number, height:number) => {
    
    try{
        if(base <= 0 || height <=0){
            throw new Error('Los dos valores deben ser mayores a 0')
        }
        let area:number = (base * height) / 2;
        console.log(area)
    }
    catch(error){
        console.log(`Se sio el siguiente error ${error}`)
    }
}

calcTriangle(0, 5)