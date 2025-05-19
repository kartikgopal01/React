import React from 'react'; 
function TaskList({ tasks, onToggleCompletion, onDelete }) { 
  return ( 
    <ul className="task-list"> 
      {tasks.map((task) => ( 
        <li 
          key={task.id} 
          className={`task-item ${task.completed ? 'completed' : 'pending'}`} 
        > 
          <div> 
            <h3>{task.name}</h3> 
            <p>Due Date: {task.dueDate}</p> 
            {task.description && <p>{task.description}</p>} 
          </div> 
          <div> 
            <button onClick={() => onToggleCompletion(task.id)}> 
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'} 
            </button> 
            <button onClick={() => onDelete(task.id)}>Delete</button> 
          </div> 
        </li> 
 
 
 
 
 

 
      ))} 
    </ul> 
  );} 
export default TaskList; 