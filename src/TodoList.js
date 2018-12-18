import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';

 class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.props.inputValue}/>
          <button>提交</button>
        </div>
        <ul>
          <li>dell</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue

  }
}

export default connect(mapStateToProps, null)(TodoList);