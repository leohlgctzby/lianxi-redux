import React, { Component } from 'react';
import store from './store';
import connect from 'react-redux';

 class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.inputValue}/>
          <button>提交</button>
        </div>
        <ul>
          <li>dell</li>
        </ul>
      </div>
    )
  }
}

export default connect()(TodoList);