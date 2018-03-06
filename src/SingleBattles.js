import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleBattles extends Component {
    constructor() {
        super();
        
        this.determineAttackStrengths = this.determineAttackStrengths.bind(this);
        this.determineAttackWeaknesses = this.determineAttackWeaknesses.bind(this);
        this.determineDefenseStrengths = this.determineDefenseStrengths.bind(this);
        this.determineDefenseWeaknesses = this.determineDefenseWeaknesses.bind(this);
    }
    
    determineAttackStrengths() {
        
    }
    
    determineAttackWeaknesses() {
        
    }
    
    determineDefenseStrengths() {
        
    }
    
    determineDefenseWeaknesses() {
        
    }
    
    mapPokemontoSlot(pokemon) {
        let types = "";
        
        for (let i = 0; i < pokemon.types.length; i++) {
            if (pokemon.types[i].slot === 1) {
                types = pokemon.types[i].name + ", " + types
            } else {
                types += pokemon.types[i].name;
            }
        }
        types = types.slice(0, types.length - 2);
        
        const stats = pokemon.stats.map((stat, i) => {
            return (<li>
                        <h6>{stat.stat.name}: {stat.base_stat}</h6>
                    </li>);
        });
        
        const frontImage = {
            background: `url(${pokemon.front_default}) no-repeat center center`
        }
        
        const backImage = {
            background: `url(${pokemon.back_default}) no-repeat center center`
        }
        
        return (
          <div className="pokemon">
            <h4>{pokemon.name}</h4>
            <div className="frontImage" style={frontImage}></div>
            <div className="backImage" style={backImage}></div>
            <h5>Stats:</h5>
            <ul>
                {stats}
            </ul>
            <h5>Types:</h5>
            <p>{types}</p>
            <h5>Attacking Strengths and Weaknesses:</h5>
            <h5>Defense Strengths and Weaknesses:</h5>
            <button onClick={this.props.removeSlot1}>Remove</button>
          </div>
        );
    }
    
    
    
  render() {
      const slot1 = (Object.keys(this.props.slot1).length !== 0 && this.mapPokemontoSlot(this.props.slot1, 1));
      
    return (
      <div className="singleBattleContainer">
        <h3>Pokemon Analysis:</h3>
        {slot1}
      </div>
    );
  }
  }

export default connect(state => state, {})(SingleBattles);
