import React, { Component } from "react";
import Child from './Child';


class Parent extends Component {
  constructor() {
    super()
    this.state = {
      ParentText: 'ParentText',
      takeData: '',
      count:0,
      // list:[1,2,3]
    }

  }
  updateParent = (text) => {
    this.setState({
      takeData: text,
    })

  }
  updateCount = () => {
    this.setState({
      count:this.state.count + 2
    })

  }

  render() {
    return (
      <div>
        <hr />
        <h1>{this.state.count}</h1>
        <h1>Parent</h1>
        <h3>{this.state.takeData}</h3>
        <Child text={this.state.ParentText} sendData={this.updateParent}  up = {this.updateCount}/>
      </div>
    )
  }
}




export default Parent;