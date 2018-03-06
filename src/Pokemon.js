import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePokemon, removePokemonfromPotential } from './redux';

class Pokemon extends Component {
    constructor() {
        super();
        this.handleChosenDelete = this.handleChosenDelete.bind(this);
        this.handlePotentialDelete = this.handlePotentialDelete.bind(this);
    }

    handleChosenDelete() {
        this.props.removePokemon(this.props.data.id)
    }

    handlePotentialDelete() {
        this.props.removePokemonfromPotential(this.props.data.id)
    }

    render() {
        return (
          <div className="pokemon">
            <h3>{this.props.data.name}</h3>
            {this.props.type === "chosen" ?
                <button onClick={this.handleChosenDelete}>Remove</button>
                : <button onClick={this.handlePotentialDelete}>Remove</button>
            }
          </div>
        );
    }
};

export default connect(state => state, { removePokemon, removePokemonfromPotential })(Pokemon);
