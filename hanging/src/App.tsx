import './App.css';
import { useState, useEffect } from 'react';
import { HangImage } from './components/HangImage';
import {letters} from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWord';

function App() {

  // const word: string = 'COMPUTADORA'
  const [word, setWord] = useState(getRandomWord()); //trae cualquier palabra del helper
  // Si quiero permitir que la palabra se actualice cambio el formato de vaiable a useState
  const [hidderWord, setHiddenWord] = useState('_ '.repeat(word.length)); //setHiddenWord es la funcion para actualizar la palabra
  //el setHiddenWord cambia el estado y las va sumando las letras al array hiddenWordArray
  // El .repeat(word.lengt) me dirá cuantos caracteres tiene la palabra
  const [attemps, setAttemps] = useState(0);
  const [lose, setLose] = useState(false); //False es el estado inicial
  const [won, setWon] = useState(false);

  //Determninar si el usuario PIERDE
  useEffect( () => {  //Hook que escucha cuando algo cambia y reacciona
    if(attemps >= 9){
      setLose(true);
    }
    console.log(attemps);

  }, [ attemps ] ); //La funcion hija del effect se dispara cuando los intentos cambien

  //Si el usuario GANA
  useEffect( () => {
    
    const currentHiddenWord = hidderWord.split(' ').join(''); //SE separa por los espacios
    if(currentHiddenWord === word){ //Si esa palabra es igual  la palabra
      setWon( true );
    }
    console.log(setHiddenWord);
  }, [ hidderWord ]);

  const checkLetter = (letter: string) => {
    //console.log(letter)
    if( lose ) return;
    if( won ) return;

    //Existe la letra dentro de la palabra?
    if(!word.includes(letter)){
      console.log(letter + ' No existe')
      setAttemps( Math.min( attemps + 1, 9) ); // Math.min mantiene el valor minimo entre 0 y 9
      return;
    }

    //reemplazando el guion por la letra correcta
    const hiddenWordArray: string[] = hidderWord.split(' '); //separa el hiddenWord en lineas separadas
    console.log(hiddenWordArray);

    for(let i = 0; i < word.length; i++){
      
      //Si la letra de esa posición es igual a letter...
      if(word[i] === letter){
        hiddenWordArray[i] = letter; //cambie el guón por la letra correcta
      }
    }

    console.log(hiddenWordArray);

    setHiddenWord( hiddenWordArray.join(' ') ); //Une los items del array que esten separados por un espacio vacío
    //esta funcion viene del useState
  }

  const newGame =() => {
    console.log('Nuevo juego')

    const newWord = getRandomWord(); //Vuelve a llamar la función de la palabra random

    //Todos los set de los State se reinician
    setWord( newWord ); //setWord cambia word a newWord
    setHiddenWord('_ '.repeat(newWord.length))
    setAttemps(0);
    setLose(false);
    setWon(false);
  }

  return (
    <div className="App">
      {/* Images */}
      <HangImage imageNumber={attemps}/> 
      {/* imageNumber es una prop que se conecta con: 🔹 */}
      
      {/* hidden word */}
      <h3>{ hidderWord }</h3>
      {/* Este hiddenWord se actualiza con el useState */}
      
      {/* tries counter */}
      <h3>Intentos fallidos: {attemps}</h3>
      
      {/* Mensaje si perdió */}
      {/* Lee el state que fue cambiado por el hook */}
      {
        ( lose  ) ? <h3>👎 Perdió, la palabra era {word}</h3> : '' 
      }

      {
        ( won ) ? <h3> 👍 Felicidades! si era la palabra</h3> : ''
      }

      {/* buttons */}
      {
        letters.map( (letter) => (
          <button 
          key={ letter }
          onClick={ () => checkLetter(letter) }
          disabled={lose}>
            { letter }
          </button>
        ))
      }
      <br />
      <br />

      <button onClick={() => newGame()}>
        ¿Nuevo juego?
      </button>
      
    </div>
  )
};

export default App;