import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store";
import { getHandleClick, getHandleChange,getHandleItemDelete } from './store/actionCreators'
import TodoListUI from './TodoListUI'

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange)
    console.log(this.state);
  }
  render() {
    return (
    <TodoListUI 
    inputValue={this.state.inputValue}
    list={this.state.list}
    handleChange={this.handleChange}
    handleClick={this.handleClick}
    handleItemDelete={this.handleItemDelete}
    />)  
  }

  handleClick = () => {
    const action = getHandleClick();
    store.dispatch(action);
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  handleChange = (e) => {
    const action = getHandleChange(e.target.value);
    store.dispatch(action);
    console.log(e.target.value);
  }

  handleItemDelete(index){
    const action = getHandleItemDelete(index);
    store.dispatch(action);
  }
}
