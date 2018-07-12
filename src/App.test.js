import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CorgiApp from './components/CorgiApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders CorgiApp without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CorgiApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

