import React from 'react';

class PowerButton extends React.Component {
  handleClick(e) {
    this.props.togglePower();
  }

  render () {
    return (
      <div>
        <h2>Power Button</h2>
        <button onClick={(e) => this.handleClick(e)}>
          {this.props.power ? "On" : "Off"}
        </button>
      </div>
    )
  }
}

export default PowerButton;
