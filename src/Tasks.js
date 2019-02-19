import React from 'react';

class Tasks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: "",
      todos: this.props.todos,
      onDeleteTask: this.props.onDeleteTask,
      onCompleteTask: this.props.onCompleteTask,
      onEdit: this.props.onEdit
    }
  }

  handleChange = (id, e) => {
    this.setState(this.state.todos.map(note => {
      if(note.id === id)
        return {
          id: note.id,
          task: e.target.value,
          completed: note.completed
        }

      return note
    }))
  }

  render() {

    return (
      <div>
        {this.state.todos.map(item =>
          <div key={item.id}>
            <input value={this.state.todos.filter(todo => todo.id === item.id)[0].task}
                onChange={this.handleChange.bind(null, item.id)}
                onBlur={this.state.onEdit.bind(null, item.id, this.state.inputValue)}
            />
            <button onClick={this.state.deleteTask.bind(null, item.id)}>X</button>
            <button>OK</button>
          </div>
        )}
      </div>
    )
  }
}

export default Tasks
