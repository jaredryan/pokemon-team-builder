import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokedex from './Pokedex';
import SingleBattles from './SingleBattles';
import DoubleBattles from './DoubleBattles';
import List from './List';

class Start extends Component {
  render() {
    return (
      <div className="startContainer">
        <Switch>
            <Route path="/start/pokedex" component={Pokedex}/>
            <Route path="/start/singlebattles" component={SingleBattles}/>
            <Route path="/start/doublebattles" component={DoubleBattles}/>
        </Switch>
        <List />
      </div>
    );
  }
}

export default Start;
