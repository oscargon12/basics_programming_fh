/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de strngs
 * @returns {Array} Retorna la carta que fue pedida
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}