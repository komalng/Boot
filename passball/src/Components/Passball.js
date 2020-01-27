import React from 'react';
import Button from './Button';

class Passball extends React.Component {
  constructor() {
    super();
    this.state = {
      redBall: '0',
      greenBall: ''
    }
  }

  changeHandle = (passBall) => {
    if (this.state.redBall === '') {
      this.setState({
        redBall: passBall,
        greenBall: ''
      });
    }
    else {
      this.setState({
        greenBall: passBall,
        redBall: ''
      });
    }

  }
  render() {
    let { redBall, greenBall } = this.state;
    const mystyle = {
      width: "7%",
      float: "left",
      margin: " 0.8rem",
      height: '20px',
      textAlign: 'center',
      border: "1px solid black"

    }
    return (
      <div >
        <div style={mystyle}>
          {redBall}
        </div>
        <div style={mystyle}>
          {greenBall}
        </div>
        <br />
        <br />
        <Button passBall={this.changeHandle} />
      </div>
    );
  }

}

export default Passball;