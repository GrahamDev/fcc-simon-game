import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './Game'

// main component for the game. Compnent will hold the state for the whole
// game, events will rise up to here.

class App extends Component {
  constructor(props) {
    super(props);

    this.togglePower = this.togglePower.bind(this);
    this.toggleStrict = this.toggleStrict.bind(this);
    this.seqButtonDown = this.seqButtonDown.bind(this);
    this.seqButtonUp = this.seqButtonUp.bind(this);

    this.state = {
      // power button
      onOff: false,
      // strict mode,
      strictButton: false,
      // count of moves made
      counter: 0,
      // input lock, default true as game is powered off on load
      inputLocked: true,
      // color buttons in the game
      buttons: [
        { id: 0, name: "yellow", isPressed: false, isActive: false },
        { id: 1, name: "red", isPressed: false, isActive: false },
        { id: 2, name: "green", isPressed: false, isActive: false },
        { id: 3, name: "blue", isPressed: false, isActive: false },
      ]
    };
  }

  // recieve a SeqButtonDown event
  seqButtonDown(id) {
    console.log(id);
  }

  seqButtonUp(id) {
    console.log(id);
  }
  // simulate switching a power button.
  togglePower() {
    let onOff = this.state.onOff;
    let inputLocked = this.state.inputLocked;

    onOff = !onOff;

    if(onOff) {
      inputLocked = false;
    } else {
      inputLocked = true;
    }

    this.setState({ onOff, inputLocked });
  }

  //TODO: decide if strict button should work if power if off
  toggleStrict() {
    let strictButton = this.state.strictButton;

    strictButton = !strictButton;

    this.setState({ strictButton });
  }

  counterReset() {
    let counter = this.state.counter;

    counter = 0;

    this.setState({ counter });
  }

  counterAddOne() {
    let counter = this.state.counter;

    counter += 1;

    this.setState({ counter });
  }

  render() {
    return (
      <div className="App">
        <Game
          power={this.state.onOff}
          togglePower={this.togglePower}
          strict={this.state.strictButton}
          toggleStrict={this.toggleStrict}
          counter={this.state.counter}
          buttons={this.state.buttons}
          seqButtonDown={this.seqButtonDown}
          seqButtonUp={this.seqButtonUp}
        />
      </div>
    );
  }
}

export default App;
