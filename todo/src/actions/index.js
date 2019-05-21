export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const TOGGLE_TODOS = "TOGGLE_TODOS";

export const addNewTodo = todo => {
  //action here
  return {
    type: ADD_NEW_TODO,
    payload: todo
  };
};

export const toggleTodos = id => {
  console.log(id);
  return {
    type: TOGGLE_TODOS,
    payload: id
  };
};
