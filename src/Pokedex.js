import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search, addPokemon, removePokemon, addPokemontoPotential, removePokemonfromPotential } from './redux';
import PokedexResult from './PokedexResult';

class Pokedex extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSearch(e) {
        e.preventDefault();
        // Axios call + add to list (add this to reducers)
        this.props.search(this.state.searchInput.toLowerCase())
        this.setState({
            searchInput: ""
        })
    }
    
    handleChange(e) {
        this.setState({
            searchInput: e.target.value
        })
    }
    
  render() {      
      const pokedexResult = (Object.keys(this.props.searchResult).length !== 0 && (<PokedexResult data={this.props.searchResult} />));
      
    return (
      <div className="pokedexContainer">
        <h3>Search</h3>
        <form onSubmit={this.handleSearch}>
            <input 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.searchInput}
                placeholder="Pokemon Name"
            />
        </form>
        {this.props.loading ? 
            <div className="loading"></div>
            : this.props.error !== "" ? 
                <p>{this.props.error}</p>
                : pokedexResult}
      </div>
    );
  }
}

export default connect(state => state, { search, addPokemon, removePokemon, addPokemontoPotential, removePokemonfromPotential })(Pokedex);
