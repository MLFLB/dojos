import React, { Component } from 'react';
import Key from '../containers/Key';

const keys = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'];

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        {keys.map((k,i) => <Key key={i} value={k} />)}
      </div>
    )
  }
}
 
export default Calculator;