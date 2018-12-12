import React, { Component } from "react";
import { connect } from 'react-redux'
import { getInputChangeAction } from './store/actionCreator'
import { connect } from 'react-redux'

class Todolist extends Component {

  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={handleInputChange}  />
          <button onClick={this.handleClick}>提交</button>
        </div>
          <ul>
            <li>
              输入内容
            </li>
          </ul>              
        
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleClick() {
      const action = ""
      dispatch(action)
    },

    handleInputChange(e){
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Todolist)
