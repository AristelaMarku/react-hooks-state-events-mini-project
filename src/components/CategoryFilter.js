import React from "react";

function CategoryFilter({category,selected, handleSelectCategory}) {
  console.log(category)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {category.map((everyCategory)=>{
        return <button key={everyCategory} className={selected === everyCategory ? 'selected': '' }  onClick={()=>handleSelectCategory(everyCategory)}>{everyCategory}</button>
      })}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
