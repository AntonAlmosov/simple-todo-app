import React, { Component } from 'react';
import './App.css';
import CreateTodo from './CreateTodo';
import Tasks from './Tasks';
import uuid from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: uuid.v4(),
          task: 'Create todo app',
          completed: false
        },
        {
          id: uuid.v4(),
          task: 'Dont die',
          completed: false
        }
      ]
    }
  }

  createTask = (value) => {
    const newTask = {
      id: uuid.v4(),
      task: value,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }

  deleteTask = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }

  editTask = (id, value) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id)
        return {
        id: todo.id,
        task: value,
        completed: todo.completed
      }
      return todo
    })
  })
  }

  completeTask = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id)
          return {
            id: todo.id,
            task: todo.task,
            completed: true
          }
          return todo
      })
    })
  }

  render() {
    return (
      <div className="todoApp">
        <CreateTodo createTodo={this.createTask} />
        <Tasks todos={this.state.todos}
          onDeleteTask={this.deleteTask}
          onCompleteTask={this.completeTask}
          onEdit={this.editTask}/>
      </div>
    )
  }
}

export default App;
