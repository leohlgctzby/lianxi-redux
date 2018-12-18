import {
  CHANGE_INPUT_VALUE,
  LIST_ADD_ITEM,
  LIST_ITEM_DELETE
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


