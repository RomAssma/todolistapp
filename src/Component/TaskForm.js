import React, {useState , useEffect} from "react";
const TaskForm = ({onUpdateTask,onAddTask,editingTask}) =>{
const[taskName,setTaskName]=useState('');
const[taskDescription,setTaskDescription]=useState('');
useEffect(()=>{
if (editingTask){
    setTaskName(editingTask.name);
setTaskDescription(editingTask.description);
}else{
  setTaskName('');
  setTaskDescription('');
}

},[editingTask]);
const handleSubmit=(e)=>{
e.preventDefault();
if (!taskName || !taskDescription) {
  alert('Please fill in both fields');
  return;
}
if (editingTask) {
  onUpdateTask({ ...editingTask, name:taskName, description: taskDescription });
} else {
  onAddTask({ name: taskName, description: taskDescription });
}
setTaskName('');
setTaskDescription('');
};

return(
     <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={taskName}
      onChange={(e) => setTaskName(e.target.value)}
      placeholder="Task Name"
    />
    <textarea
      value={taskDescription}
      onChange={(e) => setTaskDescription(e.target.value)}
      placeholder="Task Description"
    />
    <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>

  </form>
  );

};

export default TaskForm;