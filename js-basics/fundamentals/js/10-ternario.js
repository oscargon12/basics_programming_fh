//restaurante: entre semana abre a las 11
//fines de semana a las 9

const day = 0;
const currentHour = 10;

let openHour;
let message;  //está abierto o cerrado

/* if ( day === 0 || day === 6 ){
    console.log('Finde');
    openHour = 9
} else {
    console.log('Entre semana');
    openHour = 11
} */
//👆 Se cambia todo eso por esto:

openHour = ( [0,6].includes( day ) ) ? 9 : 11;
//El includes dice si en ese array está el día, entonces...

/* if( currentHour >= openHour ){
    message = 'Esta abierto'
} else {
    message = `Esta cerrado, hoy abrimos a las ${ openHour }`
} */
//👆 Se cambia todo eso por esto:

message = (currentHour >= openHour) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ openHour }`;

console.log(message);