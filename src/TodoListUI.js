import React, { Component } from 'react';
import { Button, Input, List } from "antd";

export default class TodoListUI extends Component {
  render(){
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <Input
          onChange={this.props.handleChange}
          placeholder="Todolist"
          value={this.props.inputValue}
          style={{ width: "300px", marginRight: "10px" }}
        />
        <Button type="primary" onClick={this.props.handleClick}>提交</Button>
      </div>

      <List
        style={{ width: "300px", marginTop: "10px" }}
        bordered
        dataSource={this.props.list}
        renderItem={(item, index) => <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}} >{item}</List.Item>}
      />
    </div>
    )
  }
}