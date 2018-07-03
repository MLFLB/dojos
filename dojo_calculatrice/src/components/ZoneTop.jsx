import React, { Component } from 'react';
import Input from '../containers/Input';

class ZoneTop extends Component {
  
  onClickInput(e) {
    e.preventDefault();
  }

  onKeyDownInput(e) {
    e.preventDefault();
  }

  render() { 
    return (
      <div className="ZoneTop">
        <Input onClick={(e) => this.onClickInput(e)} onKeyDown={(e) => this.onKeyDownInput(e)}/>
      </div>
    )
  }
}
 
export default ZoneTop;