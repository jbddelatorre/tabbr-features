import React, { Component } from 'react';
import Features from './components/Feature';
import './animate/animate.css'


class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor:'#efefef'}}>
        <Features />
      </div>
    );
  }
}

export default App;
