import {
  CHANGE_INPUT_VALUE,
  LIST_ADD_ITEM,
  LIST_ITEM_DELETE,
  INIT_LIST_ACTION,
  GET_INIT_LIST
} from "./actionTypes";

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

export const getInitList = () =>({
  type: GET_INIT_LIST
});