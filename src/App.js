import React, { Component } from 'react';
import Form from './Form';
import Ideas from './Ideas';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Title: '',
      Body: ''
    }
    this.getInfo = this.getInfo.bind(this);
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
        <Ideas 
          title={this.state.Title}
          body={this.state.Body}
        />
      </div>
    );
  }
}

export default App;
