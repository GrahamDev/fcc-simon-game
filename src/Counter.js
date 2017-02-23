import React from 'react'

class Counter extends React.Component {
  render () {
    let count = this.props.counter;

    if (this.props.counter <= 9) {
      count = "0" + count;
    }

    if (this.props.counter === -1) {
      count = null;
    }

    return(
      <span className="counter">
        <span className="counter-digits">{count}</span>
      </span>
    )
  }
}

export default Counter;
