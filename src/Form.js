import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      body: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

 updateTitle(event) {
   this.setState({
    title: event.target.value
   })
 }

 updateBody(event) {
   this.setState({
     body: event.target.value
   })
 }

 onSubmit(event) {
  event.preventDefault();
  this.props.getInfo(this.state)
  this.setState({
    title: '',
    body: ''
  })
  event.target.value = ''
}



  render() {
    return(
      <div>
        <input type="text" placeholder="Title" value={this.state.Title} onChange={event => this.updateTitle(event)}/>
        <input type="text" placeholder="Body" value={this.state.Body} onChange={event => this.updateBody(event)}/>
        <button onClick={this.onSubmit}>Save</button>
      </div>
    )
  }
}