import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }






  render() {
    return(
      <div>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Body"/>
        <button>Save</button>
      </div>
    )
  }
}