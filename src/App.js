import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Callout from './Callout';

const PLATES = ['trees', 'steps', 'rocks'];

class App extends Component {
  state = {
    key: 0,
    callouts: {
      trees: null,
      rocks: null,
      steps: null
    }
  };

  setKey = () => {
    this.setState({
      key: this.state.key + 1,
      callouts: {
        trees: null,
        rocks: null,
        steps: null
      }
    });
  };

  setCallout(plate, callout) {
    this.setState({
      callouts: {
        ...this.state.callouts,
        [plate]: callout
      }
    });
  }

  render() {
    const { callouts } = this.state;

    return (
      <div className="App" key={this.state.key}>
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
    );
  }
}

export default App;
