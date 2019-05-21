import React from "react";
import { connect } from "react-redux";
import { addNewTodo, toggleTodos } from "../actions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


class TodosList extends React.Component {
  state = {
    newTodo: ""
  };

 handleChange = e => {
   e.preventDefault();
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
            {todo.task}
            {todo.completed && <i className="fa fa-check" />}
          </h4>
        ))}
      </div>
      <input
        type="text"
        onChange={this.handleChange}
        value={this.state.newTodo}
        placeholder="Add item"
      />
      <button onClick={this.addNewTodo}>Add new item</button>
     </>
   );
 }
}


const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapActionToProps = {
  addNewTodo,
  toggleTodos
};


export default connect(mapStateToProps, mapActionToProps)(TodosList);
