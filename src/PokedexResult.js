import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPokemon, addPokemontoPotential, clearSearch } from './redux';

class PokedexResult extends Component {
    constructor() {
        super();
        this.state = {
            movesWasClicked: false
        }
        
        this.handleMoveClick = this.handleMoveClick.bind(this);
    }
    
    handleMoveClick() {
        this.setState(prevState => {
            return {
                movesWasClicked: !prevState.movesWasClicked
            }
        })
    }
    
    render() {
        let types = "";
        
        for (let i = 0; i < this.props.data.types.length; i++) {
            if (this.props.data.types[i].slot === 1) {
                types = this.props.data.types[i].type.name + ", " + types
            } else {
                types += this.props.data.types[i].type.name + ", ";
            }
        }
        types = types.slice(0, types.length - 2);
        
        const moves = this.props.data.moves.map((move, i) => {
            return (<li key={i + move.move.name}>
                        <a href={move.move.url}>{move.move.name}</a>
                    </li>);
        });
        
        const stats = this.props.data.stats.map((stat, i) => {
            return (<li key={i + stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>);
        });
        
        const abilities = this.props.data.abilities.map((ability, i) => {
            return (<li key={i + ability.ability.name}>
                        <a href={ability.ability.url}>{ability.ability.name}</a>
                    </li>);
        });
        
        const frontImage = {
            background: `url(${this.props.data.sprites.front_default}) no-repeat center center`
        }
        
        const name = this.props.data.name[0].toUpperCase() + this.props.data.name.slice(1);
        
        return (
          <div className="pokedexResult">
            <h4>{name}</h4>
            <div className="frontImage" style={frontImage}></div>
            <h5>Type(s)</h5>
            <p>{types}</p>
            <h5>Abilities</h5>
            <ul>
                {abilities}
            </ul>
            <h5>Stats</h5>
            <ul>
                {stats}
            </ul>
            <div onClick={this.handleMoveClick}>
                <h5>Moves</h5>
                {this.state.movesWasClicked ?
                    <ul>{moves}<h6>(Click to close)</h6></ul> :
                    <h6>(Click to expand)</h6>}
            </div>
            <button onClick={this.props.addPokemon}>Add to Chosen List</button>
            <br/>
            <button onClick={this.props.addPokemontoPotential}>Add to Potential List</button>
            <br/>
            <button onClick={this.props.clearSearch}>Clear</button>
          </div>
        );
    }
};

export default connect(state => state, { addPokemon, addPokemontoPotential, clearSearch })(PokedexResult);
