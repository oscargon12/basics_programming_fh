let deck            = [];
const cardTypes     = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    machinePoints = 0;


//Referencias del html
const takeCardBtn = document.querySelector('#takeCard');
const playerPointsTag = document.querySelector('#playerPoints')
const divPlayerCards = document.querySelector('#player-cards');

//Función que rellena el deck de cartas automáticamente
const createDeck = () =>{

    //con un for anidado completo la primera parte del nombre del asset
    //(las cartas del 1 al 10)
    for(let i = 2; i <= 10; i++){
        for( let type of cardTypes ){
            deck.push( i + type )
        }
    }

    //Otro for para rear las cartas especiales
    for(let type of cardTypes){
        for(let special of specialCards) {
            deck.push( special + type );
        }
    }
    
    //el shuffle solo puedo traerlo con la librería underscore
    deck = _.shuffle(deck); //sirve para volverrandom el orden de un array
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
    let value = card.substring(0, card.length - 1); //Separa los numeros del string, desde el item 0 del string, hasta antes del último
    let points = 0;
    //console.log(typeof(value))

    isNaN(value) ?
    points = (value === 'A') ? 11 : 10 
    : points = value * 1;

    return points
}

const takenCardValue = cardValue(takeCard());
console.log(takenCardValue);

// ** DOM **
//Puedo acceder al html así
document.querySelector('#title').innerText = 'Oscar Gonzalez'
'Oscar Gonzalez'

//pero es recomendable almacenar todo en una variable
//Para que no tenga que ir al html de nuevo
const gameTitle = document.querySelector('#title');
gameTitle.innerText = 'Jueguito'

const divBotones = document.querySelector('#botones');

//divBotones
//<div id=​"botones" class=​"col-12 d-flex justify-content-center">​…​</div>​flex<button class=​"btn btn-primary mx-2">​Nuevo juego​</button>​<button class=​"btn btn-light mx-2">​Pedir carta​</button>​<button class=​"btn btn-danger mx-2">​Detener​</button>​</div>​
const newButton = document.createElement('button');

divBotones.append(newButton); //agrega el botón con append

newButton.innerText = ('Destruir baraja')
'Destruir baraja'
newButton
//<button>​Destruir baraja​</button>​
newButton.classList.add('btn') //agrega clases css al tag

newButton.classList.add('btn-success')

const myInput = document.createElement('input');
document.body.append(myInput);
myInput.classList.add('form-control'); //Solo agrega de a una clase
myInput.placeholder = 'Hola mundo';

//*** Eventos ***/
takeCardBtn.addEventListener('click', () => {
    const card = takeCard(); //capturo una carta 
    console.log('Click en boton');

    //Puntos de jugador = puntos de jugador + valor de la carta tomada
    playerPoints += cardValue( card )
    //console.log(`la sumatoria va en ${playerPoints}`)

    playerPointsTag.innerText = playerPoints; //Siempre que oprima el boton, muestre el nuevo valor
    
    //Mostrando cartas
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${ card }.png`;
    divPlayerCards.append(imgCard);

    //Añadiendo estilos a la imagen carta
    imgCard.classList.add('card')

    if(playerPoints > 21){
        takeCardBtn.disabled = true;
    } else if ( playerPoints === 21 ){
        alert('Ganaste !')
    }
});

