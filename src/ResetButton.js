import React from 'react';

class ResetButton extends React.Component {
  handleClick() {
    this.props.toggleReset();
  }

  render () {
    return (
      <div className="reset-btn-div">
        <h2>Reset</h2>
        <button onClick={(e) => this.handleClick(e)}>
          <span></span>
        </button>
      </div>
    )
  }
}

export default ResetButton;
