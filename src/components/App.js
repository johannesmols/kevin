import React, { Component } from 'react';
import react_logo from '../logo.svg';
import './App.css';
import Diagrams from "./Diagrams";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h3 className="App-title">Willkommen bei der Langzeitstudie zu Matchmaking mit Kevin</h3>
            <p>
              Diese Website veranschaulicht die Langzeitstudie zu Kevin Krätschmer und seiner Auswirkung auf die Qualität der Matchmaking Spiele in "Counter-Strike: Global Offensive".
            </p>
        </header>
      	<Diagrams />
        <footer className="App-footer">
          <p>
            Made with
            <img src={react_logo} className="App-logo-small" alt="React Logo" /> by{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johannesmols/kevin">Johannes Mols</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
