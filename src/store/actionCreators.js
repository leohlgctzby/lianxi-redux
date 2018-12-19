import { ADD_ITEM, DELETE_ITEM, CHANGE_INPUT_VALUE } from "./actionTypes";

export const getChangeInputValue = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getHandleClick = () => ({
  type: ADD_ITEM
});

export const getHandleDelete = index => ({
  type: DELETE_ITEM,
  index
});
