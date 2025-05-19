 
 
import React, { useState } from 'react'; 
import TaskForm from './components/TaskForm'; 
import TaskList from './components/TaskList'; 
import './App.css'; 
 
function App() { 
  const [tasks, setTasks] = useState([]); 
  const [filter, setFilter] = useState('all'); 
 
  // Add a new task 
  const addTask = (task) => { 
    setTasks(tasks.concat([task])); 
  }; 
 
  // Toggle task completion 
  const toggleTaskCompletion = (id) => { 
    setTasks(tasks.map((task) => { 
      if (task.id === id) { 
        return { 
          id: task.id, 
          text: task.text, 
          completed: !task.completed 
        }; 
      } else { 
        return task; 
      } 
    })); 
  }; 
  // Delete a task 
  const deleteTask = (id) => { 
    setTasks(tasks.filter(task => task.id !== id)); 
   
 

}; 
 
  // Filter tasks based on completion status 
  const filteredTasks = tasks.filter(task => { 
    if (filter === 'completed') return task.completed; 
    if (filter === 'pending') return !task.completed; 
    return true; 
  }); 
 
  return ( 
    <div className="App"> 
      <h1>Reminder Application</h1> 
 
      {/* Task Form */} 
      <TaskForm onAddTask={addTask} /> 
 
      {/* Filter Options */} 
      <div className="filter"> 
        <label htmlFor="status-filter">Filter Tasks:</label> 
        <select id="status-filter" onChange={(e) => setFilter(e.target.value)} value={filter}> 
          <option value="all">All Tasks</option> 
          <option value="completed">Completed Tasks</option> 
          <option value="pending">Pending Tasks</option> 
        </select> 
      </div> 
 
      {/* Task List */} 
      <TaskList 
        tasks={filteredTasks} 
        onToggleCompletion={toggleTaskCompletion} 
        onDelete={deleteTask} 
      /> 
 

 
    </div> 
  ); 
} 
export default App; 