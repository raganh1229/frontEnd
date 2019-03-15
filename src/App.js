import React, { Component } from 'react';
import './App.css';
import Header from "./Header.js";
import Body from "./Body.js";

class App extends Component {  
  render() {
    return (
      <div className="App">
        <Header className="App-header">
        </Header>
        <Body className="Body">
        </Body>
      </div>
    );
  }
}

export default App;
