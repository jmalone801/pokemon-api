import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const onClickHandler = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setPokemon(res.results);
    })
  .catch(err => console.log(err))
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
