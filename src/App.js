import React, {useState , useEffect} from "react";
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
const App=()=> {
  const [tasks,setTasks]=useState([]);
  const [editingTask , setEditingTask]=useState(null);
  useEffect (() => {
    const savedTasks=JSON.parse (localStorage.getItem('tasks')) || []
setTasks(savedTasks)
 },[])
 useEffect (() => {
 localStorage.setItem('tasks',JSON.stringify(tasks)) 
},[])
const addTask=(task)=>{
  setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
}
const UpdateTask=(updatedTask)=>{
  setTasks(tasks.map(task=>(task.id === updatedTask.id ? updatedTask : task)));
}
const deleteTask=(id)=>{
  if (window.confirm('Are you sure you want to delete this task?'))
 { setTasks(tasks.filter(task=>task.id !== id))}
}
const toggleComplete=(id)=>{
  setTasks(tasks.map(task=>(task.id===id ?{...task,completed:!task.completed}:task)))
}
  return (
   <div>
    <h1>ToDo-List</h1>
    <TaskForm
    onAddTask={addTask}
    onUpdateTask={UpdateTask}
    editingTask={editingTask}
    />
    <TaskList
    tasks={tasks}
    ondeleteTask={deleteTask}
    ontoggleComplete={toggleComplete}
    onEditTask={setEditingTask}
    />
   </div> 
  );
}

export default App;


