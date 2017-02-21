import React from 'react';

class StartButton extends React.Component {
  handleClick() {
    this.props.startButton();
  }

  render () {
    return (
      <div>
        <h2>Start</h2>
        <button onClick={(e) => this.handleClick(e)}>Start</button>
      </div>
    )
  }
}

export default StartButton;
