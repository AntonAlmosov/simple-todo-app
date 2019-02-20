import React from 'react'

const TaskEditing = ({todo, onEdit}) =>

  <div>
    <input
      defaultValue={todo.task}
      onBlur={onEdit.bind(null, todo.id)}
      autoFocus={true}
    />
  </div>

export default TaskEditing
