import './App.css';
import { useState } from 'react';
import { HangImage } from './components/HangImage';
import {letters} from './helpers/letters';

function App() {

  // const word: string = 'COMPUTADORA'
  const [word] = useState('COMPUTADORA');
  // Si quiero permitir que la palabra se actualice cambio el formato de vaiable a useState
  const [hidderWord, setHiddenWord] = useState('_ '.repeat(word.length)); //setHiddenWord es la funcion para actualizar la palabra
  //el setHiddenWord cambia el estado y las va sumando las letras al array hiddenWordArray
  // El .repeat(word.lengt) me dirá cuantos caracteres tiene la palabra
  const [attemps, setAttemps] = useState(0);

  const checkLetter = (letter: string) => {
    //console.log(letter)

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

  return (
    <div className="App">
      {/* Images */}
      <HangImage imageNumber={attemps}/> 
      {/* imageNumber es una prop que se conecta con: 🔹 */}
      
      {/* hidden word */}
      <h3>{ hidderWord }</h3>
      {/* Este hiddenWord se actualiza con el useState */}
      
      {/* tries counter */}
      <h3>Intentos: {attemps}</h3>
      
      {/* buttons */}
      {
        letters.map( (letter) => (
          <button 
          key={ letter }
          onClick={ () => checkLetter(letter) }>
            { letter }
          </button>
        ))
      }
      
    </div>
  )
};

export default App;