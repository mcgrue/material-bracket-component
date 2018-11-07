import React, { Component } from 'react';
import { TextField } from '@rmwc/textfield';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>BRACKET ZOMG</h1>
        {/* An outlined TextField */}
        <TextField outlined label="outlined..." /><br />
        <TextField outlined label="outlined..." />
      </div>
    );
  }
}

export default App;
