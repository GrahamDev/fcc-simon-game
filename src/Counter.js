import React from 'react'

class Counter extends React.Component {
  render () {
    let count = this.props.counter;

    if (this.props.counter <= 9) {
      count = "0" + count;
    }

    return(
      <span className="counter">
        <span>{count}</span>
      </span>
    )
  }
}

export default Counter;
