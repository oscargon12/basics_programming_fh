import { crearDeck } from "./crear-deck";
import { tipos, especiales } from "./tipos";

let deck = crearDeck(tipos, especiales);


// Esta función me permite tomar una carta
export const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}