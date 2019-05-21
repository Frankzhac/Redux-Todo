import { ADD_NEW_TODO, TOGGLE_TODOS } from "../actions";

const initialState = {
  todos: [
    {
      id: 0,
      task: "Revise Redux material",
      completed: false
    },
    {
      id: 1,
      task: "Take a nap",
      completed: false
    },
    {
      id: 2,
      task: "Workout",
      completed: false
    },
    {
      id: 3,
      task: "Do Laundry",
      completed: false
    },
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_TODO:
    return {
      ...state,
      todos: state.todos.concat({
        id: Date.now(),
        task: action.payload,
        completed: false
      })
    };
    case TOGGLE_TODOS:
    return {
      ...state,
      friends: state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    };
    default:
      return state;
  }
}


export default reducer;
