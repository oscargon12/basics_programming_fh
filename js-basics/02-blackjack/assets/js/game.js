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
    console.log( deck );
}

createDeck();