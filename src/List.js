import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemon from './Pokemon';

class List extends Component {
    constructor() {
        super();
        this.mapPokemon = this.mapPokemon.bind(this);
    }
    
    mapPokemon(list, type) {
        return list !== [] && list.map((pokemon, index) => {
           return (<Pokemon
                        key={index + pokemon.name}
                        data={pokemon.data}
                        type={type}
                  />);
       })
    }
    
  render() {
      const chosenList = this.mapPokemon(this.props.chosen, "chosen");
      const potentialList = this.mapPokemon(this.props.potentials, "potential");
       
    return (
      <div>
        <div className="chosenList">
            <h3>Chosen Pokémon</h3>
            <ul>
                {chosenList}
            </ul>
        </div>
        <div className="potentialList">
            <h3>Chosen Potentials</h3>
            <ul>
                {potentialList}
            </ul>
        </div>
      </div>
    );
  }
}

export default connect(state => state, {})(List);
