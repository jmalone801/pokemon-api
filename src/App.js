import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);


  const onClickHandler = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
            setPokemon(response.data.results)
        })
  }

  return (
    <div className="App"> 
      <h1>Names of Pokemon!!</h1>
      <button onClick={ onClickHandler } className='btn-success'>Fetch Pokemon</button>

      <ol>
        {
          pokemon.map((poke, i) => {
            return <li key={i} >{ poke.name }</li>
          })
        }
      </ol>

    </div>
  );
}

export default App;
