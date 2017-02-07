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

    this.state = {
      onOff: false
    };
  }

  // simulate switching a power button.
  togglePower() {
    let onOff = this.state.onOff;

    onOff = !onOff;

    this.setState({ onOff });
  }

  render() {
    return (
      <div className="App">
        <Game power={this.state.onOff} togglePower={this.togglePower}/>
      </div>
    );
  }
}

export default App;
