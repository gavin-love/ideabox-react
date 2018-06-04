import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Title: '',
      Body: ''
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IdeaBox-React</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
