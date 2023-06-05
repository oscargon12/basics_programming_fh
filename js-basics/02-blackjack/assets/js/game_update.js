(() => { //Funcion autoinvocada para dar seguridad al archivo

    let deck            = [];
    const cardTypes     = ['C', 'D', 'H', 'S'],
          specialCards = ['A', 'J', 'Q', 'K'];

    let playerPoints = 0,
        machinePoints = 0;

    //TODO Voy en el miunto 5 dela primera optimizacion


    //Referencias del html
    const takeCardBtn = document.querySelector('#takeCard'),
          stopGameBtn = document.querySelector('#btnStop'),
          newGameBtn = document.querySelector('#newGameBtn');

    const pointsTagHTML = document.querySelectorAll('small'),
          divPlayerCards = document.querySelector('#player-cards'),
          divPcCards = document.querySelector('#pc-cards');

    const startGame = () => {
        createDeck();
    }

    //Función que rellena el deck de cartas automáticamente
    const createDeck = () =>{

        deck = [];
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
        return _.shuffle(deck); //sirve para volverrandom el orden de un array
    }

    createDeck();

    //Funcion que permite tomar una carta
    const takeCard = () => {

        /* const takenCard = deck[deck.length -1];
        deck.pop(); */
        if(deck.length === 0){
            throw 'No hay cartas en el deck'
        }

        return takenCard = deck.pop();
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

    //Turno de la computadora
    //se dispara por dos condiciones (jugador 1 pierde || detiene el juego)
    //Entonces se dispara una rutina que llegue hasta 21
    const pcTurn = ( minimumPoints ) => {
        //el usuario no va a presionar el botó, la rutina debe activarse sola
        //Por eso el dowhile
        do {
            const card = takeCard(); //capturo una carta 

            machinePoints += cardValue( card )

            pointsTagHTML[1].innerText = machinePoints; //Siempre que oprima el boton, muestre el nuevo valor
            const imgCard = document.createElement('img');
            imgCard.src = `assets/cartas/${ card }.png`;
            imgCard.classList.add('card')
            divPcCards.append(imgCard);

            if(minimumPoints > 21){ //Si los puntos del jugador son mayores a 21
                break;
            }

        } while ( (machinePoints < minimumPoints) && (minimumPoints <= 21) ); //Condicion para activar el turno del pc

        setTimeout(() => {

            if ( playerPoints === machinePoints ){
                alert('Nadie gana')
            } else if (minimumPoints > 21){
                alert('Computadora gana')
            } else if (machinePoints > 21){
                alert('Jugador gana')
            } else {
                alert('Compu gana')
            }
        }, 100)
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

        pointsTagHTML[0].innerText = playerPoints; //Siempre que oprima el boton, muestre el nuevo valor
        
        //Mostrando cartas
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cartas/${ card }.png`;
        divPlayerCards.append(imgCard);

        //Añadiendo estilos a la imagen carta
        imgCard.classList.add('card')

        if(playerPoints > 21){
            console.warn('lo siento perdiste')
            takeCardBtn.disabled = true
            stopGameBtn.disabled = true;
            pcTurn( playerPoints ); //Dispara función de turno de la pc
        } else if (playerPoints === 21) {
            console.warn('ganaste') //solo si es21 exacto
            pcTurn( playerPoints );
            takeCardBtn.disabled = true
            stopGameBtn.disabled = true;
        }
    });

    //pcTurn( 16 ); // el parametro son los puntos del jugador

    //Bloquear botones y disparar el turno de la pc
    const stopGame = () => {
        takeCardBtn.disabled = true;
        stopGameBtn.disabled = true;
        pcTurn( playerPoints ); //Dispara función de turno de la pc
    }

    stopGameBtn.addEventListener('click', stopGame );

    //Nuevo juego resetear todo
    //Volver a crear el deck
    //Borrar cartas del dom
    //resetear los puntajes
    //Habilitar botones

    newGameBtn.addEventListener('click', () => {
        console.clear();
        console.log('juego reseteado');

        //nuevo deck
        deck = []
        deck = createDeck();

        //Puntajes en 0
        playerPoints = 0;
        machinePoints = 0;
        pointsTagHTML[0].innerText = playerPoints;
        pointsTagHTML[1].innerText = machinePoints;

        takeCardBtn.disabled = false;
        stopGameBtn.disabled = false;

        divPlayerCards.innerHTML = ''
        divPcCards.innerHTML = ''
    });
})();