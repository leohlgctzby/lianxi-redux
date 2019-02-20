import React from "react";
import { connect } from "react-redux";
import {
  changeInputValue,
  handleClick,
  handleDelete
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
        <input type="text" value={inputValue} onChange={(e) => {changeInputValue(e)}} />
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


export default connect(
  state => ({
    inputValue: state.inputValue,
    list: state.list
  }),
  { changeInputValue,
    handleClick,
    handleDelete}
)(TodoList);
