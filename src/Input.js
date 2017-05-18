import React, { Component } from 'react';
import { observer } from 'mobx-react';

const style = {
  borderWidth: 8,
  borderColor: 'black',
  padding: 5,
  width: 275,
  height: 30,
  fontSize: 40,
  fontWeight: 'bold'
}

@observer
class Input extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event) {
    this.props.store.changeGuess(event.target.value);
  }
  
  render() {
    return <input 
             placeholder="GUESS" 
             style={style}	
             onChange={this.onChange}
             value={this.props.store.guess}
          />;
  }
}

export default Input;