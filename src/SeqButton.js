// Component for the buttons around the outside of the game.

import React from 'react'

class SeqButton extends React.Component {
  render () {
    const params = this.props.params;

    return (
      <div>
        <button>{params.baseColor}</button>
      </div>
    )
  }
}

export default SeqButton;
