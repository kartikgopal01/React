import React,{useState} from 'react' 
function App() {  
    /*Variables */  
   /*1) Variables to hold the tasks */ 
     const [tasks, setTask] = useState([])  
     /*2) Variable to hold the new task */  
     const [newTask, setNewTask] = useState('')  
     /*Arrow Functions */  
      /*1) Add a task */  
     const addTask = () => { 
         if(tasks.trim!==''){  
            setTask(tasks.concat({id:Date.now(), text:newTask, completed:false}))  
            setNewTask('');  
        }  
    };  


    /*2) Mark a particular task Completed using id propertty*/  
    const markComplete = (id) => { 
         setTask(tasks.map((task) => { 
            if(task.id === id){  
                return Object.assign({}, task, {completed: !task.completed})  
            }  
            else { 
                 return task; } }))}; 
 
  /*3) Remove a Task */  
  const removeTask = (id) =>  
    setTask(tasks.filter((task)=> task.id !== id))  
   
return (  
  <div> 
  
    {/*Input text box for taking task name from user */}  
    <input  
        type='text'  
        value={newTask}  
        onChange={(event)=> setNewTask(event.target.value)}  
        style={{marginLeft: '250px', borderRadius: '10px', border: '10px solid green', padding: '10px', 
textAlign:'center'}} > 
    </input>  
 
 
    {/*Button to add task to list or array */}  
    <button onClick={addTask} style={{borderRadius:'10px', backgroundColor: 'orange'}}>Add Task 
</button> 
 
 
    {/*List Of Task using unordered list */}  
     <ul>  
        {tasks.map(task=>  
            <li key={task.id}  
                style={{    color: task.completed? 'green' : 'red',  
                            padding: task.completed? '20px' : '20px',  
                            backgroundColor: task.completed? 'grey': 'orange',  
                            margin: task.completed? '10px' : '10px',  
                            fontSize: task.completed? '30px' : '30px',  
                            fontWeight: task.completed? 'bold' : 'bold',  
                            textDecoration: task.completed? 'line-through' : 'none',  
                            border: task.completed? '4px solid grey' : '6px solid yellow' 
                         }} > 
                            <span onClick={()=> markComplete(task.id)}>{task.text}</span>  
                            <button onClick={()=> removeTask(task.id)}  
                                style={{ backgroundColor:'white', marginLeft:'100px', padding:'10px', 
fontSize:'30px', borderRadius: '10px' }}> 
                                    Delete</button>  
            </li>  
        )}                       
    </ul>  
    </div>  
    )} 
export default App 