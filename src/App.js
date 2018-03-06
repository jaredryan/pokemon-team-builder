import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Start from './Start';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/start" component={Start}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
