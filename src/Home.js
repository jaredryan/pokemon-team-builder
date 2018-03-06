import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to Pokémon Team Builder!</h1>
        <div className="thumbnails">
            <Link to="/start/pokedex" className="thumbnail">
                <div className="thumbnailContainer">
                    <div className="pokedexThumbnail"></div>
                </div>
                <h2>See if a Pokémon deserves a spot on your team.</h2>
            </Link>
            <Link to="/start/singlebattles" className="thumbnail">
                <div className="thumbnailContainer">
                    <div className="singleThumbnail"></div>
                </div>
                <h2>Set up a team for single battles.</h2>
            </Link>
            <Link to="/start/doublebattles" className="thumbnail">
                <div className="thumbnailContainer">
                    <div className="doubleThumbnail"></div>
                </div>
                <h2>Set up a team for double battles.</h2>
            </Link>
        </div>
      </div>
    );
  }
}

export default Home;
