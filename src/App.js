import React, { Component } from 'react';
import Form from './Form';
import Ideas from './Ideas';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
    this.getInfo = this.getInfo.bind(this);
  }
  
  
  getInfo(idea) {
    this.setState({
      ideas: [...this.state.ideas, idea]
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
          ideas={this.state.ideas}
        />
      </div>
    );
  }
}

export default App;
