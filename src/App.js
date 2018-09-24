import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
    this.reset = this.reset.bind(this)
  }
  add() {
    let number = this.state.number
    number++
    this.setState ({number})
  }
  subtract() {
    let number = this.state.number
    if(number > 0) {
      number--
    }
    this.setState ({number})
  }
  reset() {
    
    this.setState ({number : 0})
  }
  render() {
    return (
      <div className="App">
        <div className="accountant">
          <div className="number">{this.state.number}</div>
          <div className="containerBottom">
            <div 
            className="bottom bottom__subtract"
            onClick={this.subtract}
            >-</div>
            <div 
            className="bottom bottom__reset"
            onClick={this.reset}
            >0</div>
            <div 
            className="bottom bottom__add"
            onClick={this.add}
            >+</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
