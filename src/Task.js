import React from 'react'

import TaskEditing from './TaskEditing'

export default (props) => {
  if (props.todo.editing === true) {
    return <TaskEditing {...props}/>
  }
  else
    return <Task {...props} />
}

const Task = ({ todo, onDeleteTask, onCompleteTask, activateEdit }) =>

  <div>
    <span className={todo.completed? "task-completed" : " "}
      onClick={activateEdit.bind(null, todo.id)}>
      {todo.task}
    </span>
    <button onClick={onDeleteTask.bind(null, todo.id)}>X</button>
    <button onClick={onCompleteTask.bind(null, todo.id)}>OK</button>
  </div>
