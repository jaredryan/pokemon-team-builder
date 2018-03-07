import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeSlot1 } from './redux';

class SingleBattles extends Component {
    constructor() {
        super();
        this.state = {
            movesWasClicked: false
        }
        
        this.handleMoveClick = this.handleMoveClick.bind(this);
        this.determineAttackStrengths = this.determineAttackStrengths.bind(this);
        this.determineAttackWeaknesses = this.determineAttackWeaknesses.bind(this);
        this.determineDefenses = this.determineDefenses.bind(this);
    }
    
    handleMoveClick() {
        this.setState(prevState => {
            return {
                movesWasClicked: !prevState.movesWasClicked
            }
        })
    }
    
    determineAttackStrengths(type) {
        switch (type) {
            case "normal":
                return "none";
            case "fire":
                return "grass, ice, bug, steel";
            case "water":
                return "fire, ground, rock";
            case "electric":
                return "water, flying";
            case "grass":
                return "water, ground, rock";
            case "ice":
                return "grass, ground, flying, dragon";
            case "fighting":
                return "normal, ice, rock, dark, steel";
            case "poison":
                return "grass, fairy";
            case "ground":
                return "fire, electric, poison, rock, steel";
            case "flying":
                return "grass, fighting, bug";
            case "psychic":
                return "fighting, poison";
            case "bug":
                return "grass, psychic, dark";
            case "rock":
                return "fire, ice, flying, bug";
            case "ghost":
                return "psychic, ghost";
            case "dragon":
                return "dragon";
            case "dark":
                return "psychic, ghost";
            case "steel":
                return "ice, rock, fairy";
            case "fairy":
                return "fighting, dragon, dark";
        }
    }
    
    determineAttackWeaknesses(type) {
        switch (type) {
            case "normal":
                return "rock: 1/2, ghost: 0, steel: 1/2";
            case "fire":
                return "fire: 1/2, water: 1/2, rock: 1/2, dragon: 1/2";
            case "water":
                return "water: 1/2, grass: 1/2, dragon: 1/2";
            case "electric":
                return "electric: 1/2, grass: 1/2, ground: 0, dragon: 1/2";
            case "grass":
                return "fire: 1/2, grass: 1/2, poison: 1/2, flying: 1/2, bug: 1/2, dragon: 1/2, steel: 1/2";
            case "ice":
                return "fire: 1/2, water: 1/2, ice: 1/2, steel: 1/2";
            case "fighting":
                return "poison: 1/2, flying: 1/2, psychic: 1/2, bug: 1/2, ghost: 0, fairy: 1/2";
            case "poison":
                return "poison: 1/2, ground: 1/2, rock: 1/2, ghost: 1/2, steel: 0";
            case "ground":
                return "grass: 1/2, flying: 0, bug: 1/2";
            case "flying":
                return "electric: 1/2, rock: 1/2, steel: 1/2";
            case "psychic":
                return "psychic: 1/2, dark: 0, steel: 1/2";
            case "bug":
                return "fire: 1/2, fighting: 1/2, poison: 1/2, flying: 1/2, ghost: 1/2, steel: 1/2, fairy: 1/2";
            case "rock":
                return "fighting: 1/2, ground: 1/2, steel: 1/2";
            case "ghost":
                return "normal: 0, dark: 1/2";
            case "dragon":
                return "steel: 1/2, fairy: 0";
            case "dark":
                return "fighting: 1/2, dark: 1/2, fairy: 1/2";
            case "steel":
                return "fire: 1/2, water: 1/2, electric: 1/2, steel: 1/2";
            case "fairy":
                return "fire: 1/2, poison: 1/2, steel: 1/2";
        }
    }
    
    determineDefenses(type) {
        const dict = {
            "normal": 1,
            "fire": 1,
            "water": 1,
            "electric": 1,
            "grass": 1,
            "ice": 1,
            "fighting": 1,
            "poison": 1,
            "ground": 1,
            "flying": 1,
            "psychic": 1,
            "bug": 1,
            "rock": 1,
            "ghost": 1,
            "dragon": 1,
            "dark": 1,
            "steel": 1,
            "fairy": 1,
        }
        for (let t of type) {
            switch (t) {
                case "normal":
                    dict["fighting"] *= 2
                    dict["ghost"] *= 0
                    break
                case "fire":
                    dict["fire"] *= 1/2
                    dict["water"] *= 2
                    dict["grass"] *= 1/2
                    dict["ice"] *= 1/2
                    dict["ground"] *= 2
                    dict["bug"] *= 1/2
                    dict["rock"] *= 2
                    dict["steel"] *= 1/2
                    dict["fairy"] *= 1/2
                    break
                case "water":
                    dict["fire"] *= 1/2
                    dict["water"] *= 1/2
                    dict["electric"] *= 2
                    dict["grass"] *= 2
                    dict["ice"] *= 1/2
                    dict["steel"] *= 1/2
                    break
                case "electric":
                    dict["electric"] *= 1/2
                    dict["ground"] *= 2
                    dict["flying"] *= 1/2
                    dict["steel"] *= 1/2
                    break
                case "grass":
                    dict["fire"] *= 2
                    dict["water"] *= 1/2
                    dict["electric"] *= 1/2
                    dict["grass"] *= 1/2
                    dict["ice"] *= 2
                    dict["poison"] *= 2
                    dict["ground"] *= 1/2
                    dict["flying"] *= 2
                    dict["bug"] *= 2
                    break
                case "ice":
                    dict["fire"] *= 2
                    dict["ice"] *= 1/2
                    dict["fighting"] *= 2
                    dict["rock"] *= 2
                    dict["steel"] *= 2
                    break
                case "fighting":
                    dict["flying"] *= 2
                    dict["psychic"] *= 2
                    dict["bug"] *= 1/2
                    dict["rock"] *= 1/2
                    dict["dark"] *= 1/2
                    dict["fairy"] *= 2
                    break
                case "poison":
                    dict["grass"] *= 1/2
                    dict["fighting"] *= 1/2
                    dict["poison"] *= 1/2
                    dict["ground"] *= 2
                    dict["psychic"] *= 2
                    dict["bug"] *= 1/2
                    dict["fairy"] *= 1/2
                    break
                case "ground":
                    dict["water"] *= 2
                    dict["electric"] *= 0
                    dict["grass"] *= 2
                    dict["ice"] *= 2
                    dict["poison"] *= 1/2
                    dict["rock"] *= 1/2
                    break
                case "flying":
                    dict["electric"] *= 2
                    dict["grass"] *= 1/2
                    dict["ice"] *= 2
                    dict["fighting"] *= 1/2
                    dict["ground"] *= 0
                    dict["bug"] *= 1/2
                    dict["rock"] *= 2
                    break
                case "psychic":
                    dict["fighting"] *= 1/2
                    dict["psychic"] *= 1/2
                    dict["bug"] *= 2
                    dict["ghost"] *= 2
                    dict["dark"] *= 2
                    break
                case "bug":
                    dict["fire"] *= 2
                    dict["grass"] *= 1/2
                    dict["fighting"] *= 1/2
                    dict["ground"] *= 1/2
                    dict["flying"] *= 2
                    dict["rock"] *= 2
                    break
                case "rock":
                    dict["normal"] *= 1/2
                    dict["fire"] *= 1/2
                    dict["water"] *= 2
                    dict["grass"] *= 2
                    dict["fighting"] *= 2
                    dict["poison"] *= 1/2
                    dict["ground"] *= 2
                    dict["flying"] *= 1/2
                    dict["steel"] *= 2
                    break
                case "ghost":
                    dict["normal"] *= 0
                    dict["fighting"] *= 0
                    dict["poison"] *= 1/2
                    dict["bug"] *= 1/2
                    dict["ghost"] *= 2
                    dict["dark"] *= 2
                    break
                case "dragon":
                    dict["fire"] *= 1/2
                    dict["water"] *= 1/2
                    dict["electric"] *= 1/2
                    dict["grass"] *= 1/2
                    dict["ice"] *= 2
                    dict["dragon"] *= 2
                    dict["fairy"] *= 2
                    break
                case "dark":
                    dict["fighting"] *= 2
                    dict["psychic"] *= 0
                    dict["bug"] *= 2
                    dict["ghost"] *= 1/2
                    dict["dark"] *= 1/2
                    dict["fairy"] *= 2
                    break
                case "steel":
                    dict["normal"] *= 1/2
                    dict["fire"] *= 2
                    dict["grass"] *= 1/2
                    dict["ice"] *= 1/2
                    dict["fighting"] *= 2
                    dict["poison"] *= 0
                    dict["ground"] *= 2
                    dict["flying"] *= 1/2
                    dict["psychic"] *= 1/2
                    dict["bug"] *= 1/2
                    dict["rock"] *= 1/2
                    dict["dragon"] *= 1/2
                    dict["steel"] *= 1/2
                    dict["fairy"] *= 1/2
                    break
                case "fairy":
                    dict["fighting"] *= 1/2
                    dict["poison"] *= 2
                    dict["bug"] *= 1/2
                    dict["dragon"] *= 0
                    dict["dark"] *= 1/2
                    dict["steel"] *= 2
                    break
            }
        }
        return dict;
    }
    
    mapPokemontoSlot(pokemon) {
        let types = "";
        let typeArray = [];
        let attackStrengths = [];
        let attackWeaknesses = [];
        
        for (let i = 0; i < pokemon.types.length; i++) {
            if (pokemon.types[i].slot === 1) {
                types = pokemon.types[i].type.name + ", " + types
            } else {
                types += pokemon.types[i].type.name + ", ";
            }
            typeArray.push(pokemon.types[i].type.name);
            attackStrengths.push(pokemon.types[i].type.name + ": " + this.determineAttackStrengths(pokemon.types[i].type.name))
            attackWeaknesses.push(pokemon.types[i].type.name + "--" + this.determineAttackWeaknesses(pokemon.types[i].type.name))
        }
        types = types.slice(0, types.length - 2);
        
        const defenseObjects = this.determineDefenses(typeArray);
        const defense = [];
        for (let type in defenseObjects) {
            if (defenseObjects[type] !== 1) {
                defense.push(type + ": " + defenseObjects[type] + "x")
            }
        }
        
        const defenses = defense.map((type, i) => {
            return <li key={i + type}>{type}</li>
        })
        
        const strengths = attackStrengths.map((type, i) => {
            return (<li key={i + type}>
                        {type}
                    </li>);
        });
        
        const weaknesses = attackWeaknesses.map((type, i) => {
            return (<li key={i + type}>
                        {type}
                    </li>);
        });
        
        const moves = pokemon.moves.map((move, i) => {
            return (<li key={i + move.move.name}>
                        <a href={move.move.url}>{move.move.name}</a>
                    </li>);
        });
        
        const stats = pokemon.stats.map((stat, i) => {
            return (<li key={i + stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>);
        });
        
        const abilities = pokemon.abilities.map((ability, i) => {
            return (<li key={i + ability.ability.name}>
                        <a href={ability.ability.url}>{ability.ability.name}</a>
                    </li>);
        });
        
        const frontImage = {
            background: `url(${pokemon.sprites.front_default}) no-repeat center center`
        }
        
        const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
        
        // INSERT AFTER ATTACKING STRENGTHS/WEAKNESSES
        
        
        return (
          <div className="battle">
            <h4>{name}</h4>
            <div className="frontImage" style={frontImage}></div>
            <h5>Types</h5>
            <p>{types}</p>
            <h5>Attacking Strengths</h5>
            <ul>
                {strengths}
            </ul>
            <h5>Attacking Weaknesses</h5>
            <ul>
                {weaknesses}
            </ul>
            <h5>Defense Multipliers</h5>
            <ul>
                {defenses}
            </ul>
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

export default connect(state => state, { removeSlot1 })(SingleBattles);
