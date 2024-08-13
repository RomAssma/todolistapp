import React from 'react';

function TaskItem ({task,onToggleComplete,onDelete,onEdit}){
    return(
      <li className={task.completed ? 'completed' : ''}>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onToggleComplete}>{task.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
      <button onClick={onDelete}>Delete</button>
    </li>
    )
}
export default TaskItem;