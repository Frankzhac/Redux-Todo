import { ADD_NEW_TODO, TOGGLE_TODOS } from "../actions";

const initialState = {
  todos: [
    {
      task: "Revise Redux material",
      completed: false
    },
    {
      task: "Take a nap",
      completed: false
    },
    {
      task: "Workout",
      completed: false
    },
    {
      task: "Do Laundry",
      completed: false  
    },
  ]
};
