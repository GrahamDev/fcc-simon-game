import React from 'react'

class Counter extends React.Component {
  render () {
    return(
      <div>
        <h2>Counter</h2>
        <p>{this.props.counter}</p>
      </div>
    )
  }
}

export default Counter;
