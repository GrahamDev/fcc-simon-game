import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './Game'

// main component for the game. Compnent will hold the state for the whole
// game, events will rise up to here.

class App extends Component {
  constructor(props) {
    super(props);

    this.audio = [
      new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    ];

    this.timeout = null;

    this.togglePower = this.togglePower.bind(this);
    this.toggleStrict = this.toggleStrict.bind(this);
    this.seqButtonDown = this.seqButtonDown.bind(this);
    this.seqButtonUp = this.seqButtonUp.bind(this);
    this.startButton = this.startButton.bind(this);
    this.resetGame = this.resetGame.bind(this);

    this.state = {
      // power button
      onOff: false,
      // strict mode,
      strictButton: false,
      // count of moves made, -1 for power off
      counter: -1,
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
      // index in the sequence as the user inputs it
      sequenceIndex: 0,
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
    let that = this;
    console.log('set user timeout');
    this.timeout = setTimeout(function() {
      // user took too long to play, strict mode, game over
      if (that.state.strictButton) {
        that.setState({
          counter: "!!",
          inputLocked: true
        });
      } else {
        // show sequence again...
        that.setState({ sequenceIndex: 0, inputLocked: true, userMove: false });
        that.showSequence();
      }
    }, 4000)
  }

  unSetUserMoveTimeout() {
    console.log('cancel user timeout');
    clearTimeout(this.timeout);
  }

  resetGame() {
    console.log("reset game...");
    this.unSetUserMoveTimeout();
    this.setState({
      counter: 0,
      inputLocked: true,
      sequence: [],
      sequenceIndex: 0,
      userMove: false,
      buttons: [
        { id: 0, name: "yellow", isPressed: false, wasPressed: false },
        { id: 1, name: "red", isPressed: false, wasPressed: false },
        { id: 2, name: "green", isPressed: false, wasPressed: false },
        { id: 3, name: "blue", isPressed: false, wasPressed: false },
      ],
    });
    // this.addToSequence();
  }

  startButton() {
    // only works if power is on
    if(!this.state.onOff) { return; }

    console.log("starting game...");
    this.resetGame();
    this.addToSequence();
    this.showSequence();
  }

  showSequence() {
    this.setState({ inputLocked: true, userMove: false });

    let index = 0;
    let that = this;

    function nextBtn() {
      let buttons = that.state.buttons;
      buttons[that.state.sequence[index]].isPressed = true;
      that.audio[that.state.sequence[index]].play();
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
    let counter = this.state.counter;

    const random = Math.floor(Math.random()*4);
    sequence.push(random);

    counter++;

    this.setState({ sequence, counter });
  }

  // this function controls most of the gameplay logic =========================
  // recieve a SeqButtonDown event
  seqButtonDown(pressedButton) {
    // don't do anything if input is locked
    if (this.state.inputLocked) { return; }

    // clear timeout
    this.unSetUserMoveTimeout();

    // play audio
    this.audio[pressedButton].play();

    // set css
    let buttons = this.state.buttons;
    buttons[pressedButton].isPressed = true;
    this.setState({ buttons });

    let sequenceIndex = this.state.sequenceIndex
    const correctButton = this.state.sequence[sequenceIndex];
    // check to see if this button press matches the seq...
    if (pressedButton === correctButton) {
      console.log("right");
      sequenceIndex++;
      this.setState({ sequenceIndex });
      this.setUserMoveTimeout();

      // check to see if max sequence length has been reached...
      if (sequenceIndex === 20) {
        console.log("game won");
        this.unSetUserMoveTimeout();
        // halt game
        return;
      }

      // check to see if we are at the end of the seq, if so start another
      // round of the game

      if (sequenceIndex === this.state.sequence.length) {
        sequenceIndex = 0;
        this.setState({ sequenceIndex, inputLocked: true });
        this.addToSequence();
        this.showSequence();
      }

    } else {
      if (this.state.strictButton) {
        let counter = "!!";
        this.setState({ counter, inputLocked: true, userMove: false });
        this.audio[0].play();
        this.audio[2].play();
        // halt game
        return;
      } else {
        // reset so player can try the sequence again
        sequenceIndex = 0;
        this.setState({ sequenceIndex, inputLocked: true, userMove: false});
        this.showSequence();
      }
    }
  }

  seqButtonUp(pressedButton) {
    // unset css
    let buttons = this.state.buttons;
    buttons[pressedButton].isPressed = false;
    this.setState({ buttons });
  }
  // simulate switching a power button.
  togglePower() {
    let onOff = this.state.onOff;
    let counter = this.state.counter;


    onOff = !onOff;
    if (!onOff) {
      counter = -1;
      this.unSetUserMoveTimeout();
    } else {
      counter = 0;
    }


    this.setState({ onOff, counter });
  }

  //TODO: decide if strict button should work if power if off
  toggleStrict() {
    // only works if power is on
    if(!this.state.onOff) { return; }

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
          toggleReset={this.resetGame}
        />
      </div>
    );
  }
}

export default App;
