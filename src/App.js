import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.css';

import { TREES, STEPS, ROCKS } from './constants';
import Callout from './Callout';
import SymbolGuide from './SymbolGuide';
import PlateName from './PlateName';

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

  toggleSymbolGuide = ev => {
    ev.preventDefault();
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
        <div className="header">
          <h1 className="siteName">The Vault</h1>

          <a className="navLink" href="#" onClick={this.toggleSymbolGuide}>
            <span>Symbol callouts</span>
          </a>

          <a
            className="navLink"
            href="https://rivengaze.firebaseapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Riven gaze</span> <i className="far fa-external-link" />
          </a>

          <a
            className="navLink"
            href="https://www.twitter.com/joshhunt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" /> <span>@joshhunt</span>
          </a>
        </div>

        <div className="main">
          <div className="plates">
            {PLATES.map(plate => (
              <div className="plate" key={plate}>
                <div className="plate-title">
                  <PlateName className="plate-title-input" id={plate} />
                </div>

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

        <Modal
          isOpen={showSymbolGuide}
          onRequestClose={this.toggleSymbolGuide}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="ModalOverlay"
          closeTimeoutMS={300}
        >
          <SymbolGuide />

          <p>
            <small>
              Thanks to{' '}
              <a
                href="https://www.twitter.com/lowlines"
                target="_blank"
                rel="noopener noreferrer"
              >
                @lowlines
              </a>{' '}
              for the symbol graphics
            </small>
          </p>

          <p>
            <button className="symbolButton" onClick={this.toggleSymbolGuide}>
              Close symbol guide
            </button>
          </p>
        </Modal>
      </div>
    );
  }
}

export default App;
