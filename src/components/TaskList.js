import React from "react";
import Task from "./Task";

function TaskList({taskList,handleDelete}) {



  
 
  return (
    <div className="tasks">
      {taskList.map((task)=>{
       
      return <Task key ={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/>}
      )}
    </div>
  );
}

export default TaskList;
