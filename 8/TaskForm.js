 
import React, { useState } from 'react'; 
 
function TaskForm({ onAddTask }) { 
  const [taskName, setTaskName] = useState(''); 
  const [dueDate, setDueDate] = useState(''); 
  const [description, setDescription] = useState(''); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
 
    if (!taskName || !dueDate) return; // Ensure task name and due date are provided. 
 
    const newTask = { 
      id: Date.now(), 
      name: taskName, 
      dueDate, 
      description, 
      completed: false, 
    }; 
 

 

 
    onAddTask(newTask); 
    setTaskName(''); 
    setDueDate(''); 
    setDescription(''); 
  }; 
return ( 
    <form onSubmit={handleSubmit} className="task-form"> 
      <input 
        type="text" 
        placeholder="Task Name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        required 
      /> 
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        required 
      /> 
      <textarea 
        placeholder="Optional description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      ></textarea> 
      <button type="submit">Add Task</button> 
    </form> 
  ); 
} 
export default TaskForm; 