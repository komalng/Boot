import React from 'react';



class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passBall: '0'
    }
  }
  handleClick = () => {
    this.props.passBall(this.state.passBall);

  }
  render() {
    const mystyle = {
      width: "7%",
      float: "left",
      margin: " 2.0rem",
      height: '20px',
      border: "1px solid black"

    }
    return (

      <div>
        <br />

        <button style={mystyle} onClick={this.handleClick}>Button</button>
      </div>
    )
  }

}

export default Button;