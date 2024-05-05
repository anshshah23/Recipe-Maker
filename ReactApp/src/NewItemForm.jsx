import { useState } from "react";

const NewItemForm = ({onSubmit}) => {
 
    const [newItem,setNewItem]=useState("");

    function handleSubmit(e){
        e.preventDefault();
       
        if(newItem) {
          setNewItem("");
          onSubmit(newItem);
        }
      }
    return (  
        <div className="newItemForm">
            <p>Add ingredients you have.Click the generate to get recipe suggestions. Popular: onion, potato, chciken, nutella</p>
            <form onSubmit={handleSubmit} className="new-item-from">
            <div className="form-row">
                
                <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item" />
                <button className="btn addBtn">+</button>
            </div>
            </form>
        </div>
    );
}
 
export default NewItemForm;