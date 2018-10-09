import React, { Component } from 'react';
import { TREES, STEPS, ROCKS } from '../constants';

const PLATE_NAMES = {
  [TREES]: 'Trees',
  [STEPS]: 'Steps',
  [ROCKS]: 'Rocks'
};

const k = id => `plateName_${id}`;

export default class PlateName extends Component {
  static getDerivedStateFromProps(props, state) {
    return {
      plateName: state.customPlateName || PLATE_NAMES[props.id]
    };
  }

  state = {};

  constructor(props) {
    super(props);
    this.state = {
      customPlateName: window.localStorage.getItem(k(props.id))
    };
  }

  onChange = ev => {
    const { value } = ev.target;
    this.setState({ customPlateName: value });
    window.localStorage.setItem(k(this.props.id), value);
  };

  render() {
    const { className } = this.props;
    const { plateName } = this.state;

    return (
      <input className={className} value={plateName} onChange={this.onChange} />
    );
  }
}
