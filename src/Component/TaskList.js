

import React from "react";
import TaskItem from "./TaskItem";



const TaskList=({tasks,onToggleComplete,onDeleteTask,onEditTask})=>{
    return(
        <div>
            {tasks.map(task=>(

                <TaskItem Key={task.id}
                task={task}
                onDelete={() => onDeleteTask(task.id)}
          onToggleComplete={() => onToggleComplete(task.id)}
          onEdit={() => onEditTask(task)}
 />

            )
            )}
        </div>
    )
}

export default TaskList;