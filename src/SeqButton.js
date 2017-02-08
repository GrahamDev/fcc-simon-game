// Component for the buttons around the outside of the game.

import React from 'react'
// var classNames = require('classnames');
import classNames from 'classnames';

class SeqButton extends React.Component {
  render () {
    const params = this.props.params;
    const btnClass = classNames({
      [`btn-${params.name}`]: true,
      'btn-pressed': params.isPressed,
      'btn-active': params.isActive
    });

    return (
      <div>
        <button className={btnClass}>{params.name}</button>
      </div>
    )
  }
}

export default SeqButton;
