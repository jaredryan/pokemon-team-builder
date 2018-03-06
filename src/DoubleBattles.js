import React, { Component } from 'react';
import { connect } from 'react-redux';

class DoubleBattles extends Component {
  render() {
    return (
      <div>
        Double battles
      </div>
    );
  }
}

export default connect(state => state, {})(DoubleBattles);
