//ES6

(()=> {

    //**var let variables */
    //NUNCA usar VAR
    const nombre: string = 'Fernando'

    const getName = (): void => {
        console.log('viejo getName');
    }

    // getName = () => { console.log('Nuevo getName') };
    // getName()

    //**Destructuring */

    //Definir el tipo o interfaz tipo Avengers
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers:Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    }

    //Destructuración camvia el formato de esta manera:
    const { poder, vision } = avengers

    console.log( poder.toFixed(2), vision.toUpperCase()  )
    //1500.12
    // PAUL BETTANY

    const printAvenger = ({ ironman, ...resto }:Avengers )=> {
        //imprime a ironman y al resto de items del objeto
        console.log( ironman, resto );
    }

    //**Destructuración de arrays */

    const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.15 ];

    const [ capitan , ironman, seriaUnNumero ] = avengersArr;

})()