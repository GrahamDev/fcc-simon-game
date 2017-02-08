import React from 'react'

class StrictButton extends React.Component {
  handleClick(e) {
    this.props.toggleStrict();
  }

  render () {
    return (
      <div>
        <h2>Stict Button</h2>
        <button onClick={(e) => this.handleClick(e)}>
          {this.props.strict ? "Strict On" : "Strict Off"}
        </button>
      </div>
    )
  }
}

export default StrictButton;
