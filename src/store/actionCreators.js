import { ADD_ITEM, DELETE_ITEM, CHANGE_INPUT_VALUE } from "./actionTypes";

const getChangeInputValue = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

const getHandleClick = () => ({
  type: ADD_ITEM
});

const getHandleDelete = index => ({
  type: DELETE_ITEM,
  index
});

export const changeInputValue = e => {
  return dispatch => {
    const action = getChangeInputValue(e.target.value);
    dispatch(action);
  };
};

export const handleClick = () => {
  return dispatch => {
    const action = getHandleClick();
    dispatch(action);
  };
};

export const handleDelete = index => {
  return dispatch => {
    const action = getHandleDelete(index);
    dispatch(action);
  };
};
