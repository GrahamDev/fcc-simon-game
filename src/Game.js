import React from 'react';
import PowerButton from './PowerButton';
import StrictButton from './StrictButton';
import Counter from './Counter';
import SeqButton from './SeqButton';
import StartButton from './StartButton';
import ResetButton from './ResetButton';

class Game extends React.Component {
  render () {
    const buttons = this.props.buttons;

    return (
      <div className="container">
        <div className="game-controls">
          <h2 className="title">Simon</h2>
          <PowerButton
            power={this.props.power}
            togglePower={this.props.togglePower}
          />
          <StartButton
            startButton={this.props.startButton}
          />
          <StrictButton
            strict={this.props.strict}
            toggleStrict={this.props.toggleStrict}
          />
          < ResetButton
            toggleReset={this.props.toggleReset}
          />
          <Counter counter={this.props.counter}/>
        </div>
        {
          buttons.map((button) => {
            return (
              <SeqButton key={button.id}
                seqButtonDown={this.props.seqButtonDown}
                seqButtonUp={this.props.seqButtonUp}
                params={button} />
            )
          })
        }

      </div>
    )
  }
}

export default Game;
