import React from "react";
import { useState } from "react/cjs/react.development";

function NewTaskForm({category,handleOnSubmit}) {

  const [form,setForrm]=useState('')
  const [catego,setCategory]=useState('Produce')
  
  function handleOnTaskFormSubmit(e){
    e.preventDefault()
    handleOnSubmit({
      text:form,
      category:catego
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleOnTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={form}  onChange={(e)=>setForrm(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={catego} onChange={(e)=>setCategory(e.target.value)}>
          { category.map((catego)=> <option key={catego}>{catego}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
