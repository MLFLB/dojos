import React, { Component } from 'react';
import { connect } from 'react-redux';

class ZoneBottom extends Component {
  render() { 
    return (
      <div className="ZoneBottom">
        {this.props.result.map((res, i) => 
          <div key={i}>
            <span>{res.value}</span>
            <span>{res.expr}</span>
          </div>
        )}
      </div>
    )
  }
}
 
const mapStateToProps = state => ({
  result: state.result
});
 
export default connect(mapStateToProps)(ZoneBottom);