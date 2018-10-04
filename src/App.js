import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Callout from './Callout';

class App extends Component {
  state = { key: 0 };

  setKey = () => {
    this.setState({ key: this.state.key + 1 });
  };

  render() {
    return (
      <div className="App" key={this.state.key}>
        <header className="App-header">
          <table>
            <thead>
              <tr>
                <td>Trees</td>
                <td>Steps</td>
                <td>Rocks</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Callout />
                </td>
                <td>
                  <Callout />
                </td>
                <td>
                  <Callout />
                </td>
              </tr>
            </tbody>
          </table>

          <button className="resetButton" onClick={this.setKey}>
            Reset
          </button>
        </header>
      </div>
    );
  }
}

export default App;
