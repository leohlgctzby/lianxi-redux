const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if(action.type === "change_input_value"){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    console.log(newState.inputValue);
    return newState;
  }

  if(action.type === "add_item"){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    console.log(newState);
    return newState;
  }
  return state;
}