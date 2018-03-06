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
                        data={pokemon}
                        type={type}
                  />);
       })
    }
    
  render() {
      const chosenList = this.mapPokemon(this.props.chosen, "chosen");
      const potentialList = this.mapPokemon(this.props.potentials, "potentials");
       
    return (
      <div className="listContainer">
        <div className="chosenList">
            <h3>Chosen Pokémon</h3>
            <ul className="list">
                {chosenList}
            </ul>
        </div>
        <div className="potentialList">
            <h3>Pokémon with Potential</h3>
            <ul className="list">
                {potentialList}
            </ul>
        </div>
      </div>
    );
  }
}

export default connect(state => state, {})(List);
