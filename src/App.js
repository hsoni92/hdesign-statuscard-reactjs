import React, { Component } from 'react';
import StatusCard from './Components/CardLayout/card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatusCard type="success" percentage={30} title="JS001"/>
        <StatusCard type="error" percentage={10} title="JE002"/>
        <StatusCard type="warning" percentage={10} title="JW003"/>
      </div>
    );
  }
}

export default App;
