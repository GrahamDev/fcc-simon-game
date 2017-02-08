import React from 'react';
import PowerButton from './PowerButton';
import StrictButton from './StrictButton';
import Counter from './Counter';
import SeqButton from './SeqButton';

class Game extends React.Component {
  render () {
    const buttons = this.props.buttons;

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
        {
          buttons.map((button) => {
             return (
               <SeqButton key={button.id} params={button} />
            )
          })
        }
      </div>
    )
  }
}

export default Game;
