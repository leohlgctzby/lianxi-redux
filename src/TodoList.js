import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.changeInputValue}
          />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          <li>dell</li>
        </ul>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e){
      const action = {
        type: "change_input_value",
        value: e.target.value
      }
      dispatch(action);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
