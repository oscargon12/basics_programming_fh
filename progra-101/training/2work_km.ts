export const convertKm = (kms:number) => {

    try{

        if(kms < 0){
            throw new Error('Los kilometros deben ser mayores a 0')
        }

        let miles = kms * 0.62
        console.log(`${kms} kilometros son ${miles} millas`)
    }
    catch(error){
        console.log(`Se presento el siguiente error `)
    }
}

convertKm(10);