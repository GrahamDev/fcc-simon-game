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

    this.state = {
      // power button
      onOff: false,
      // strict mode,
      strictButton: false,
      // count of moves made
      counter: 0,
      // color buttons in the game
      // TODO: get the correct highColor for when the button is pressed
      buttons: [
        { id: 0, baseColor: "yellow", highColor: "white", isPressed: false, isActive: false },
        { id: 1, baseColor: "red", highColor: "white", isPressed: false, isActive: false },
        { id: 2, baseColor: "green", highColor: "white", isPressed: false, isActive: false },
        { id: 3, baseColor: "blue", highColor: "white", isPressed: false, isActive: false },
      ]
    };
  }

  // simulate switching a power button.
  togglePower() {
    let onOff = this.state.onOff;

    onOff = !onOff;

    this.setState({ onOff });
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
        />
      </div>
    );
  }
}

export default App;
