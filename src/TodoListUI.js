import React, { Component } from 'react';
import { Button, Input, List } from "antd";

const TodoListUI = (props) => {
  return (
  <div style={{ marginTop: "10px", marginLeft: "10px" }}>
    <div>
      <Input
        onChange={props.handleChange}
        placeholder="Todolist"
        value={props.inputValue}
        style={{ width: "300px", marginRight: "10px" }}
      />
      <Button type="primary" onClick={props.handleClick}>提交</Button>
    </div>

    <List
      style={{ width: "300px", marginTop: "10px" }}
      bordered
      dataSource={props.list}
      renderItem={(item) => <List.Item onClick={(index)=>{props.handleItemDelete(index)}} >{item}</List.Item>}
    />
  </div>
  )
}

export default TodoListUI 