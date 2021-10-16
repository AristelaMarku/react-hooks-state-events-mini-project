import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList,setTaskLIst]=useState(TASKS)
  const [selectedCategory, setSelectedCategory]=useState('All')
  
 //console.log(taskList)

  function handleDelete(taskToDelete,cateToDelete){
    let newArray=taskList.filter((oneTask)=>{
      // console.log(oneTask)
      if(!(oneTask.text ===taskToDelete && oneTask.category===cateToDelete)){
        return oneTask;
      }
    })
    setTaskLIst(newArray)
   } 

   function handleSelectCategory(category){
     
     const array = TASKS.filter((task)=>{
     if(category==="All"){
       return true
     }else if(task.category===category){
       return task
     }
   })
      setSelectedCategory(category)
      setTaskLIst(array)
   }


   function handleOnSubmit(newTaskToEnter){
    setTaskLIst([...taskList,newTaskToEnter])

   }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={CATEGORIES} selected={selectedCategory} handleSelectCategory={handleSelectCategory}/>
      <NewTaskForm category={CATEGORIES} handleOnSubmit={handleOnSubmit}/>
      <TaskList taskList={taskList} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
