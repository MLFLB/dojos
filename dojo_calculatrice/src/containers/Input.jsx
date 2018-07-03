import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input
          type="text" 
          placeholder="Entrez une expression à calculer" 
          value={this.props.input}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  input: state.input
});


export default connect(mapStateToProps)(Input);