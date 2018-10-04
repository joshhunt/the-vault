import React, { Component } from 'react';
import './App.css';

import Callout from './Callout';
import SymbolGuide from './SymbolGuide';

const TREES = 'trees';
const STEPS = 'steps';
const ROCKS = 'rocks';

const PLATES = [TREES, STEPS, ROCKS];

class App extends Component {
  state = {
    key: 0,
    showSymbolGuide: false,
    callouts: {
      [TREES]: null,
      [STEPS]: null,
      [ROCKS]: null
    }
  };

  setKey = () => {
    this.setState({
      key: this.state.key + 1,
      callouts: {
        [TREES]: null,
        [STEPS]: null,
        [ROCKS]: null
      }
    });
  };

  toggleSymbolGuide = () => {
    this.setState({ showSymbolGuide: !this.state.showSymbolGuide });
  };

  setCallout(plate, callout) {
    const newCallouts = {
      ...this.state.callouts,
      [plate]: callout
    };

    this.setState({ callouts: newCallouts });
  }

  render() {
    const { callouts, showSymbolGuide } = this.state;

    return (
      <div className="App" key={this.state.key}>
        <div className="main">
          <div className="plates">
            {PLATES.map(plate => (
              <div className="plate" key={plate}>
                <div className="plate-title">{plate}</div>

                <Callout
                  setCallout={callout => this.setCallout(plate, callout)}
                  callout={callouts[plate]}
                />
              </div>
            ))}
          </div>

          <button className="resetButton" onClick={this.setKey}>
            Reset
          </button>
        </div>

        {showSymbolGuide && <SymbolGuide />}

        <button className="symbolButton" onClick={this.toggleSymbolGuide}>
          {showSymbolGuide ? 'Hide' : 'Show'} symbol guide
        </button>
      </div>
    );
  }
}

export default App;
