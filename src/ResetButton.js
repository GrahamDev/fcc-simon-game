import React from 'react';

class ResetButton extends React.Component {
  handleClick() {
    this.props.toggleReset();
  }

  render () {
    return (
      <div>
        <h2>Reset Button</h2>
        <button onClick={(e) => this.handleClick(e)}>
          <span>Reset</span>
        </button>
      </div>
    )
  }
}

export default ResetButton;
