import React, { Component } from 'react';
import Form from './Form';
import Card from './Card';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Title: '',
      Body: ''
    }
  }

  getInfo(title, body) {
    this.setState({
      Title: title,
      Body: body
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IdeaBox-React</h1>
        </header>
        <Form   getInfo={this.getInfo}/>
      </div>
    );
  }
}

export default App;
