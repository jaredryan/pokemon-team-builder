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
        this.props.search(this.state.searchInput)
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
      const pokedexResult = (this.props.searchResult !== {} && <PokedexResult data={this.props.searchResult} />);
      
    return (
      <div>
        <h3>Search</h3>
        <form onSubmit={this.handleSearch}>
            <input type="text" onChange={this.handleChange} value={this.state.searchInput}/>
        </form>
        {this.props.loading ? 
            <div className="loading"></div>
            : pokedexResult}
      </div>
    );
  }
}

export default connect(state => state, { search, addPokemon, removePokemon, addPokemontoPotential, removePokemonfromPotential })(Pokedex);
