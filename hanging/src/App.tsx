import './App.css';
import { HangImage } from './components/HangImage';
import {letters} from './helpers/letters';

function App() {

  return (
    <div className="App">
      {/* Images */}
      <HangImage />
      
      {/* hidden word */}
      <h3>_ _ _ _ _ _ _ _ _ _ </h3>
      
      {/* tries counter */}
      <h3>Intentos: 0</h3>
      
      {/* buttons */}
      {
        letters.map( (letter) => (
          <button key={ letter }>{ letter }</button>
        ))
      }
      
    </div>
  )
};

export default App;