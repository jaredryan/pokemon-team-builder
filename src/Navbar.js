import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        console.log(this.state.clicked);
        this.setState(prevState => {
            return {clicked: !prevState.clicked}
        })
    }
    
    render() {
        
        const show = this.state.clicked ? {display: "block"} : {display: "none"} 
        return (
          <nav>
                <div className="standard-nav">
                    <Link to="/">
                        <div className="navImage"></div>
                        <h1>Pokémon Team Builder</h1>
                    </Link>
                    <ul>
                        <Link to="/start/pokedex"><li>PokéDex</li></Link>
                        <Link to="/start/singlebattles"><li>Single Battle</li></Link>
                        <Link to="/start/doublebattles"><li>Double Battle</li></Link>
                    </ul>
                </div>
                <div className="dropdown">
                    <Link to="/">
                        <h1>Pokemon Team Builder</h1>
                    </Link>
                    <i className="fa fa-bars dropbtn" onClick={this.handleClick}></i>
    	            <div className="dropdown-content" style={show}>
                        <Link to="/start/pokedex"><li>PokéDex</li></Link>
                        <Link to="/start/singlebattles"><li>Single Battle</li></Link>
                        <Link to="/start/doublebattles"><li>Double Battle</li></Link>
            		</div>
                </div>
          </nav>
      
        );
    }
}

export default Navbar;
