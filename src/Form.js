import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      Title: '',
      Body: ''
    }
  }

 updateState(title, body) {
   this.setState({
    Title: title.target.value,
    Body: body.target.value
   })
 }

 onSubmit(event) {
  event.preventDefault;
  this.props.getInfo(this.state.Title, this.state.Body)
 }



  render() {
    return(
      <div>
        <input type="text" placeholder="Title" value={this.state.Title} onChange={title => this.updateState(title)}/>
        <input type="text" placeholder="Body" value={this.state.Body} onChange={body => this.updateState(body)}/>
        <button>Save</button>
      </div>
    )
  }
}