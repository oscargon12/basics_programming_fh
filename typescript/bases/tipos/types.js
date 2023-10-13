"use strict";
// (()=>{})() función anonima autoinvocada
//Aisla los archivos
(() => {
    // **NUmber **
    const villians = 20;
    //villians.
    //**String **
    const hero = 'Batman';
    //hero.
    //**Tipo any**
    //(tratar de no usarlo)
    let avengers;
    let exists;
    let power;
    avengers = 'Dr strange';
    console.log(avengers.charAt(0));
    //(avengers as string) casteo hacia string
    avengers = 150.23245;
    console.log(avengers.toFixed(2));
    //(<number>avengers) casteo hacia float 
    //** Tuplas **
    //Define el tipo de dato
    const heroTuple = ['Dr Strange', 100, true];
    heroTuple[0] = 'Ironman';
    //** Array **
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    //numbers: number[] me dice que es un arreglo de solo numeros   
    //** Enums **
    //ayuda a trabajar con valores que tengan un valor semantico, ejem:
    //Define los valores minimo (1), medio (5) y máximo (10) del volumen
    let AudoLevel;
    (function (AudoLevel) {
        AudoLevel[AudoLevel["min"] = 1] = "min";
        AudoLevel[AudoLevel["medium"] = 5] = "medium";
        AudoLevel[AudoLevel["max"] = 10] = "max";
    })(AudoLevel || (AudoLevel = {}));
    //Luego en otra variable
    let currentAudio = AudoLevel.medium;
    console.log(currentAudio);
    // ** Tipo Void **
    //Las funciones tipo void, o vacías no tienen ningún return
    function callBatman() {
    }
    // En arrow functions
    const callSuperman = () => {
    };
    // ** Tipo never **
    //Es una función que va a terminar con un error
    //cannot have a reachable end point
    const errorMsg = (message) => {
        throw new Error(message);
    };
    errorMsg('Auxilio');
    // ** Null & Undefinend **
    let nada = undefined;
})();
