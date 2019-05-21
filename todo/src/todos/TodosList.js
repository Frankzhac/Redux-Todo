import React from "react";
import { connect } from "react-redux";
import { addNewTodo, toggleTodos } from "../actions";


class TodosList extends React.Component {
  state = {
    newTodo: ""
  };

 handleChane = e => {
   this.setState({
     newTodo: e.target.value
   });
 };

 addNewTodo = e => {
   e.preventDefault();
   this.props.addNewTodo(this.state.newTodo);
   this.setState({
     newTodo: ""
   });
 };

 toggleTodos = (e, id) => {
   e.preventDefault();
   this.props.toggleTodos(id);
 };

 render() {
   console.log(this.props);
   return (
     <>
      <h1>Redux ToDo</h1>
      <div className="todo-list">
        {this.props.todos.map(todo => (
          <h4 onClick={e => this.toggleTodos(e, todo.id)} key={todo.id}>
            {todo.done && <i className="fas fa-check-square" />}
            {todo.title}
        ))}
      </div>
     </>
   )
 }



}
