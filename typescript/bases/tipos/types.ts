// (()=>{})() función anonima autoinvocada
//Aisla los archivos

(() => {
    // **NUmber **
    const villians: number = 20;
    
    //villians.
    
    //**String **
    const hero: string = 'Batman';
    //hero.
    
    //**Tipo any**
    //(tratar de no usarlo)
    let avengers: any;
    let exists;
    let power;

    avengers = 'Dr strange';
    console.log((avengers as string).charAt(0));
    //(avengers as string) casteo hacia string

    avengers = 150.23245;
    console.log(<number>avengers.toFixed(2));
    //(<number>avengers) casteo hacia float 

    //** Array **
    const numbers: number[] =  [1,2,3,4,5,6,7,8,9,0]
    //numbers: number[] me dice que es un arreglo de solo numeros   


    //** Enums **
    //ayuda a trabajar con valores que tengan un valor semantico, ejem:

    //Define los valores minimo (1), medio (5) y máximo (10) del volumen
    enum AudoLevel{
        min = 1,
        medium = 5,
        max = 10
    }

    //Luego en otra variable
    let currentAudio:AudoLevel = AudoLevel.medium;
    console.log(currentAudio)
})()