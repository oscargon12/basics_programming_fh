import _ from 'underscore'

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array} Retorna un nuevo deck de cartas
 */
//Esto crea una explicación de la función que se va a exportar, me va a decir qué tipos de datos necesito

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length == 0 ) throw new Error('Tipos de carta es obligatorio como un arreglo de strings');
    if ( !tiposEspeciales || tiposEspeciales.length == 0 ) throw new Error('Tipos de carta es obligatorio como un arreglo de strings');

    let deck = [];
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}