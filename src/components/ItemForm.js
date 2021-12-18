import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")
  
  
 

  function handleSubmit(event) {
    
    event.preventDefault();

    const newItem = {
      id: uuid(), 
      name: name,
      category: category,
    }
    onItemFormSubmit(newItem)
    setName("");

  }

  function handleName (event) {
    setName(event.target.value)
    console.log(event.target.value)
  }

  function handleSelect (event) {
    setCategory(event.target.value)
    console.log(event.target.value)
  }


  return (
    <form 
    className="NewItem" 
    onSubmit={handleSubmit}
    
    >
      <label>
        Name:
        <input t
        ype="text" 
        name="name" 
        value={name}
        onChange={handleName}
        />
      </label>

      <label>
        Category:
        <select 
        name="category" 
        onChange={handleSelect}
        value={category}
        >

          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
