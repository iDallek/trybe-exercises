import React from 'react'
import './App.css';
import Pokemon from './Pokemon';
import PokemonList from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        {PokemonList.map((pokemon, index) => (
          <Pokemon info={pokemon} key={index} />
        ))}
      </div>
    )
  }
}

export default App;
