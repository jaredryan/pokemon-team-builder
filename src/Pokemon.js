import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePokemon, removePokemonfromPotential, addToSlot1, addToSlot2 } from './redux';

class Pokemon extends Component {
    constructor() {
        super();
        this.handleChosenDelete = this.handleChosenDelete.bind(this);
        this.handlePotentialDelete = this.handlePotentialDelete.bind(this);
        this.addToSlot1 = this.addToSlot1.bind(this);
        this.addToSlot2 = this.addToSlot2.bind(this);
    }

    handleChosenDelete() {
        this.props.removePokemon(this.props.data.id)
    }

    handlePotentialDelete() {
        this.props.removePokemonfromPotential(this.props.data.id)
    }
    
    addToSlot1() {
        this.props.addToSlot1(this.props.data.id, this.props.type);
    }
    
    addToSlot2() {
        this.props.addToSlot2(this.props.data.id, this.props.type);
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

        const stats = this.props.data.stats.map((stat, i) => {
            return (<li key={i + stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>);
        });

        const frontImage = {
            background: `url(${this.props.data.sprites.front_default}) no-repeat center center`
        }

        const name = this.props.data.name[0].toUpperCase() + this.props.data.name.slice(1);
        
        return (
          <div className="pokemon">
            <h4>{name}</h4>
            <div className="frontImage" style={frontImage}></div>
            <h5>Type(s): <span>{types}</span></h5>
            <h5>Stats</h5>
            <ul>
                {stats}
            </ul>
            <button onClick={this.addToSlot1}>Add to Slot 1</button>
            <button onClick={this.addToSlot2}>Add to Slot 2</button>
            {this.props.type === "chosen" ?
                <button onClick={this.handleChosenDelete} className="delete">Remove</button>
                : <button onClick={this.handlePotentialDelete} className="delete">Remove</button>
            }
          </div>
        );
    }
};

export default connect(state => state, { removePokemon, removePokemonfromPotential, addToSlot1, addToSlot2 })(Pokemon);
