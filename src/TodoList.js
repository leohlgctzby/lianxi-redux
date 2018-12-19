import React from "react";
import { connect } from "react-redux";
import {
  getChangeInputValue,
  getHandleClick,
  getHandleDelete
} from "./store/actionCreators";

const TodoList = props => {
  const {
    inputValue,
    handleDelete,
    changeInputValue,
    handleClick,
    list
  } = props;
  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li onClick={() => {handleDelete(index)}} key={index}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = getChangeInputValue(e.target.value);
      dispatch(action);
    },

    handleClick() {
      const action = getHandleClick();
      dispatch(action);
    },

    handleDelete(index) {
      const action = getHandleDelete(index);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
