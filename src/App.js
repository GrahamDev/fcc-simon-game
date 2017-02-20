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
    this.startButton = this.startButton.bind(this);

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
      // isPressed, controls the view/sound of the button by setting the class
      // wasPressed, allows the game control method to detect if user pressed
      // a button. Button handler will set wasPressed to true, once game control
      // has handled that button press it will set it to false.
      buttons: [
        { id: 0, name: "yellow", isPressed: false, wasPressed: false },
        { id: 1, name: "red", isPressed: false, wasPressed: false },
        { id: 2, name: "green", isPressed: false, wasPressed: false },
        { id: 3, name: "blue", isPressed: false, wasPressed: false },
      ],
      // sequence of button presses in the game
      // TODO: should
      sequence: [],
      // is it the userTurn?
      userMove: false,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log(this.state, nextState);
    if (this.state.userMove === false && nextState.userMove === true) {
      console.log("switching on userMove");
      this.setUserMoveTimeout();
    }
    if (this.state.userMove === true && nextState.userMove === false) {
      this.unSetUserMoveTimeout();
    }
  }

  setUserMoveTimeout() {
    console.log('set user timeout');
  }

  unSetUserMoveTimeout() {
    console.log('cancel user timeout');
  }

  resetGame() {
    this.setState({
      counter: 0,
      inputLocked: true,
      sequence: []
    });
    this.addToSequence();
  }

  startButton() {
    // only works if power is on
    if(!this.state.onOff) { return; }

    console.log("starting game...");
    this.resetGame();

    this.showSequence();
  }

  showSequence() {
    this.setState({ inputLocked: true });

    let index = 0;
    let that = this;

    function nextBtn() {
      let buttons = that.state.buttons;
      buttons[that.state.sequence[index]].isPressed = true;
      that.setState({ buttons });

      setTimeout(function() {
        let buttons = that.state.buttons;
        buttons[that.state.sequence[index]].isPressed = false;
        that.setState({ buttons });
        index++;
      }, 750);
    }

    var id = window.setInterval(() => {
      if (index >= this.state.sequence.length) {
        clearTimeout(id);
        this.setState({ userMove: true, inputLocked: false });
        return;
      }
      nextBtn();
    }, 1000);
  }

  // add a random button to sequence
  addToSequence() {
    let sequence = this.state.sequence;

    const random = Math.floor(Math.random()*4);

    sequence.push(random);

    this.setState({ sequence });
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

    // TODO: inputLocked is not going to be used like this...
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
          startButton={this.startButton}
        />
      </div>
    );
  }
}

export default App;
