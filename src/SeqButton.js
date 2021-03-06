// Component for the buttons around the outside of the game.

import React from 'react'
// var classNames = require('classnames');
import classNames from 'classnames';

class SeqButton extends React.Component {
  btnDown(e) {
    const id = this.props.params.id;
    this.props.seqButtonDown(id);
  }

  btnUp(e) {
    const id = this.props.params.id;
    this.props.seqButtonUp(id);
  }

  render () {
    const params = this.props.params;
    const btnClass = classNames({
      'btn-div': true,
      [`btn-${params.name}`]: true,
      [`btn-${params.name}-pressed`]: params.isPressed,
      'btn-active': params.isActive
    });

    return (
      <div>
        <div className={btnClass}
          onMouseDown={(e) => this.btnDown(e)}
          onMouseUp={(e) => this.btnUp(e)}>

        </div>

      </div>
    )
  }
}

export default SeqButton;
