import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button, Input, List } from "antd";
import store from "./store";
import { getHandleClick, getHandleChange,getHandleItemDelete } from './store/actionCreators'

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange)
    console.log(this.state);
  }
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            onChange={this.handleChange}
            placeholder="Todolist"
            value={this.state.inputValue}
            style={{ width: "300px", marginRight: "10px" }}
          />
          <Button type="primary" onClick={this.handleClick}>提交</Button>
        </div>

        <List
          style={{ width: "300px", marginTop: "10px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)} >{item}</List.Item>}
        />
      </div>
    );
  }

  handleClick = () => {
    const action = getHandleClick();
    store.dispatch(action);
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  handleChange = (e) => {
    const action = getHandleChange(e);
    store.dispatch(action);
    console.log(e.target.value);
  }

  handleItemDelete(index){
    const action = getHandleItemDelete(index);
    store.dispatch(action);
  }
}
