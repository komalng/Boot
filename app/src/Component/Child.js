import React, { Component } from "react";



class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'ChildText',
    }
  }

  componentWillMount(){
    {this.props.sendData(this.state.text)};
  }
  render() {
    return (
      <div>
        <hr />
        <h1>Child</h1>
        <h3>{this.props.text}</h3>
        <button onClick = {this.props.up}>Click</button>
      </div>
    )
  }
}

export default Child;
