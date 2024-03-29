/**
 * Esta funcion separa el valor numerico del string de la carta
 * @param {String} carta Ejemplo: 4C
 * @returns {Number} Retorna un valor numerico de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1); //Separa los numeros del string, desde el item 0 del string, hasta antes del último
    
    let valorCartaReturn = ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
    
    console.log(valorCartaReturn);
    return valorCartaReturn
}