import React from 'react';
import classNames from 'classnames';

class PowerButton extends React.Component {
  handleClick(e) {
    this.props.togglePower();
  }

  render () {
    const btnClass = classNames({
      [`btn-on`]: this.props.power,
    });

    return (
      <div>
        <h2>Power</h2>
        <button className={btnClass} onClick={(e) => this.handleClick(e)}>
        </button>
      </div>
    )
  }
}

export default PowerButton;
