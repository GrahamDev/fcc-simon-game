import React from 'react';
import PowerButton from './PowerButton';
import StrictButton from './StrictButton';
import Counter from './Counter'

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
        <Counter counter={this.props.counter}/>
      </div>
    )
  }
}

export default Game;
