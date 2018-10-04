import React, { Component } from 'react';

import './styles.css';

const BUFFS = {
  left: 'Penumbra',
  right: 'Antumbra'
};

export default class Callout extends Component {
  state = {
    buttonsEnabled: true,
    isSolved: false
  };

  setCallout(callout) {
    this.setState({ callout, buttonsEnabled: false });
  }

  reenableCallout() {
    if (this.state.isSolved) {
      this.setState({ isSolved: false, buttonsEnabled: true });
    } else {
      this.setState({ isSolved: true });
    }
  }

  render() {
    const { buttonsEnabled, callout, isSolved } = this.state;

    const buttons = (
      <div className="callout-buttons">
        <div className="callout-split" onClick={() => this.setCallout('left')}>
          Left
        </div>
        <div className="callout-split" onClick={() => this.setCallout('right')}>
          Right
        </div>
      </div>
    );

    const calloutElClassName =
      'callout-callout' + (buttonsEnabled ? ' subtle' : '');

    const calloutEl = (
      <div
        className={calloutElClassName}
        onClick={() => this.reenableCallout()}
      >
        <div className="subtle">{callout}</div>
        <div className="callout-callout-buff">{BUFFS[callout]}</div>
      </div>
    );

    return (
      <div className={'callout' + (isSolved ? ' solved' : '')}>
        {callout && calloutEl}
        {buttonsEnabled && buttons}
      </div>
    );
  }
}
