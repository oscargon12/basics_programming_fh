let deck            = [];
const cardTypes     = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];

//Función que rellena el deck de cartas automáticamente
const createDeck = () =>{

    //con un for anidado completo la primera parte del nombre del asset
    //(las cartas del 1 al 10)
    for(let i = 2; i <= 10; i++){
        for( let type of cardTypes ){
            deck.push( i + type )
        }
    }

    //Otro for para rear las cartas especiale
    for(let type of cardTypes){
        for(let special of specialCards) {
            deck.push( special + type );
        }
    }
    
    deck = _.shuffle(deck);
    console.log( deck );
    return deck;
}

createDeck();

//Funcion que permite tomar una carta
const takeCard = () => {

    /* const takenCard = deck[deck.length -1];
    deck.pop(); */
    if(deck.length === 0){
        throw 'No hay cartas en el deck'
    }

    const takenCard = deck.pop();
    console.log(takenCard);
    return takenCard;
}
//takeCard();

const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    console.log({value})
}

cardValue('2D');