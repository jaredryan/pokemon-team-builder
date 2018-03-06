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
        this.props.addToSlot1(this.props.data.id, this.props.type);
    }

    render() {
        let types = "";
        
        for (let i = 0; i < this.props.data.types.length; i++) {
            if (this.props.data.types[i].slot === 1) {
                types = this.props.data.types[i].name + ", " + types
            } else {
                types += this.props.data.types[i].name;
            }
        }
        types = types.slice(0, types.length - 2);
        
        const stats = this.props.data.stats.map((stat, i) => {
            return (<li>
                        <h6>{stat.stat.name}: {stat.base_stat}</h6>
                    </li>);
        });
        
        const frontImage = {
            background: `url(${this.props.data.front_default}) no-repeat center center`
        }
        
        const backImage = {
            background: `url(${this.props.data.back_default}) no-repeat center center`
        }
        
        return (
          <div className="pokemon">
            <h4>{this.props.data.name}</h4>
            <div className="frontImage" style={frontImage}></div>
            <div className="backImage" style={backImage}></div>
            <h5>Types:</h5>
            <p>{types}</p>
            <h5>Stats:</h5>
            <ul>
                {stats}
            </ul>
            {this.props.type === "chosen" ?
                <button onClick={this.handleChosenDelete}>Remove</button>
                : <button onClick={this.handlePotentialDelete}>Remove</button>
            }
            <button onClick={this.addToSlot1}>Add to Slot 1</button>
            <button onClick={this.addToSlot2}>Add to Slot 2</button>
          </div>
        );
    }
};

export default connect(state => state, { removePokemon, removePokemonfromPotential, addToSlot1, addToSlot2 })(Pokemon);
