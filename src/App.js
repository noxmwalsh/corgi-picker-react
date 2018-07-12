import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CorgiApp from './components/CorgiApp';

class App extends Component {
  render() {
    const ids = [0,1,2];
    const CorgiPickers = ids.map((id) =>
      <CorgiApp key={id} appTitle={`Corgi Picker ${id}`} width={200} height={200} />
    );
    const test = 'test';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {CorgiPickers}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
