import {
  CHANGE_INPUT_VALUE,
  LIST_ADD_ITEM,
  LIST_ITEM_DELETE,
  INIT_LIST_ACTION
} from "./actionTypes";
import axios from 'axios'

export const getHandleClick = () => ({ type: LIST_ADD_ITEM });

export const getHandleChange = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getHandleItemDelete = (index) =>({
    type: LIST_ITEM_DELETE,
    index
});

export const initListAction = (data) =>({
  type: INIT_LIST_ACTION,
  data
});

export const getTodoList = () =>{
  return (dispatch) => {
    axios.get('http://localhost:4000/list').then((res)=>{
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);  
      
      })

  }
}