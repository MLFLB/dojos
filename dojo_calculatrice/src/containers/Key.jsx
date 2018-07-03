import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pressKey, evalResult } from '../actions';

class Key extends Component {
  onClickKey() {
    if (this.props.value !== "=") {
      this.props.pressKey(this.props.value);
    } else {
      this.props.evalResult(this.props.input)
    }
  }

  render() { 
    return (
      <div className="Key" onClick={() => this.onClickKey()}>
        {this.props.value}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  input: state.input
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ pressKey, evalResult }, dispatch);
}
 
export default connect(mapStateToProps, matchDispatchToProps)(Key);