import React from 'react';
import PowerButton from './PowerButton'


class Game extends React.Component {
  render () {
    return (
      <div>
        <h1>Game Component</h1>
        <PowerButton
          power={this.props.power}
          togglePower={this.props.togglePower}
        />
      </div>
    )
  }
}

export default Game;
