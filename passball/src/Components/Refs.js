import React from 'react';


class Refs extends React.Component {
    constructor(props) {
      super(props);
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      this.textInput.current.focus();
      alert(this.textInput.current.value)
    }
  
    render() {
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
  
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }
export default Refs;