import React, { Component } from 'react';

import ZoneLeft from './components/ZoneLeft';
import ZoneTop from './components/ZoneTop';
import ZoneBottom from './containers/ZoneBottom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ZoneLeft />
        <ZoneTop />
        <ZoneBottom />
      </div>
    );
  }
}

export default App;
