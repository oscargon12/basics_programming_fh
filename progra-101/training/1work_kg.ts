export const kgConvert = (pounds:number = 0) =>{

    try {
        if (pounds < 0){
            throw new Error('Las libras deben ser mayores a 0')
        }

        let kilograms = pounds * 0.453592;
        console.log(`${pounds} libras son ${kilograms} kilos`);
        return kilograms;
    }
    catch(error){
        console.log(`Se presentó este error: ${error}`)
    }
}

kgConvert(2)