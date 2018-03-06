import React from 'react';
import { connect } from 'react-redux';
import { addPokemon, addPokemontoPotential } from './redux';

const PokedexResult = props => {
    let types = "";
    
    for (let i = 0; i < props.data.types.length; i++) {
        if (props.data.types[i].slot === 1) {
            types = props.data.types[i].name + ", " + types
        } else {
            types += props.data.types[i].name;
        }
    }
    types = types.slice(0, types.length - 2);
    
    const moves = props.data.moves.map((move, i) => {
        return (<li>
                    <a href={move.move.url}>{move.move.name}</a>
                </li>);
    });
    
    const stats = props.data.stats.map((stat, i) => {
        return (<li>
                    <h6>{stat.stat.name}: {stat.base_stat}</h6>
                </li>);
    });
    
    const frontImage = {
        background: `url(${props.data.front_default}) no-repeat center center`
    }
    
    const backImage = {
        background: `url(${props.data.back_default}) no-repeat center center`
    }
    
    return (
      <div className="pokedexResult">
        <h4>{props.data.name}</h4>
        <div className="frontImage" style={frontImage}></div>
        <div className="backImage" style={backImage}></div>
        <h5>Types:</h5>
        <p>{types}</p>
        <h5>Stats:</h5>
        <ul>
            {stats}
        </ul>
        <h5>Moves:</h5>
        <ul>
            {moves}
        </ul>
        <button onClick={props.addPokemon}>Add to Chosen List</button>
        <button onClick={props.addPokemontoPotential}>Add to Potential List</button>
      </div>
    );
};

export default connect(state => state, { addPokemon, addPokemontoPotential })(PokedexResult);
