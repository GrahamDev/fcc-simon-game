import React from 'react'
import classNames from 'classnames';

class StrictButton extends React.Component {
  handleClick(e) {
    this.props.toggleStrict();
  }

  render () {
    const btnClass = classNames({
      [`btn-on`]: this.props.strict,
    });
    return (
      <div>
        <h2>Strict</h2>
        <button className={btnClass} onClick={(e) => this.handleClick(e)}>
        </button>
      </div>
    )
  }
}

export default StrictButton;
