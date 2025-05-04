import React,{useState} from 'react';



const ToDoList =() => {
   const [tasks,setTasks]=useState([]);
   const [newTask,setNewTask]=useState('');


   const addTask = ()=>{
     if(newTask.trim() === ''){
      return ;
     }

     setTasks([...tasks,{text:newTask,completed:false}]);
     setNewTask('');
   };

    const removeTask=(index)=>{
      const updatedTasks = tasks.filter((_,i)=> 
       i!==index);
      setTasks(updatedTasks);
    };

   return (
    <div>
      <h1>To Do List</h1>
      <input
       type="text" 
       value={newTask} 
       onChange={(e)=>(setNewTask(e.target.value))}
       placeholder="Add a new Task" />
      <button onClick={addTask}> Add Task</button> 
      <ul>
        {tasks.map((task,index) => (
        <li key={index} style={{textDecoration:task.completed?'line-through':'none'}}>
          <span>
            {task.text}
          </span>
          <button onClick={()=>removeTask(index)}>Remove</button> 
        </li>
        ))}
      </ul>

    </div>
   );




};

export default ToDoList;
