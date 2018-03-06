import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleBattles extends Component {
  render() {
    return (
      <div>
        Single battles
      </div>
    );
  }
}

export default connect(state => state, {})(SingleBattles);
