import React from 'react';
import PowerButton from './PowerButton';
import StrictButton from './StrictButton';


class Game extends React.Component {
  render () {
    return (
      <div>
        <h1>Game Component</h1>
        <PowerButton
          power={this.props.power}
          togglePower={this.props.togglePower}
        />
        <StrictButton
          strict={this.props.strict}
          toggleStrict={this.props.toggleStrict}
        />
      </div>
    )
  }
}

export default Game;
