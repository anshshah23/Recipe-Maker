import { useEffect, useState } from "react";
import "./styles.css";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import RecipeList from "./RecipesList";
import axios from "axios";
const App = () => {
  const [output,setOutput]=useState("");
  const [loading,setLoading]=useState(false);
  const [items,setItems]=useState(()=>{

    const localValue = localStorage.getItem("ITEMS");
    if(!localValue){
      return [];
    }
    return JSON.parse(localValue);
  }
  );
  const [recipes,setRecipes]=useState(()=>{

    const localValue = localStorage.getItem("RECIPES");
    if(!localValue){
      return [];
    }
    return JSON.parse(localValue);
  }
  );

 
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(items));
  },[items]);
  useEffect(()=>{
    localStorage.setItem("RECIPES", JSON.stringify(recipes));
  },[recipes]);

  function handleDelete(id){
    const updatedItems=items.filter((item)=>item.id!==id);
    setItems(updatedItems);
  }
  function addItem(item){
    setItems((prevItems)=>[...prevItems,{
      id:crypto.randomUUID(),
      value:item
    }]);
  }
  function handleGenerate(){
    setRecipes((prevItems)=>[...prevItems,{
      id:crypto.randomUUID(),
      title:"Random Recipe Title",
      value:"Random Recipe"
    }]);
    console.log(recipes);
    handleSubmit();
  }
  function clear(){
    setItems([]);
    setRecipes([]);
  }
  const handleSubmit=(e)=>{
    if (e) e.preventDefault();
    let prompt = "Generate recipe suggestions based on ingredients.\n\nIngredients:\n only answer with the given output format \n Ingredients: ";
    if(!items){return;}
    items.map((item)=>{
      prompt+=item.value+", ";
      
    });
    prompt += "\n example Output:\n- Recipe 1: [emoji] [Title] [emoji] \n  [Description or steps]\n- Recipe 2: [Title]\n  [Description or steps]\n- Recipe 3: [Title]\n  [Description or steps]\n...  \n  only answer with the given output format  dont ask any question and give at least 9 recipes  and each title has a emoji about the recipe at start and the end of the title like in the example output as a List recipe1 ";

    let output='';
    setLoading(true);
    const url = `${import.meta.env.VITE_APP_API_URL}/chat`;
    axios.post(url, { prompt })
      .then(response => {
        setOutput(response.data);
        console.log(output);
        handleOutput(response.data);
        setLoading(false);
      }).catch(error => {
        console.log(error);
      });
    

     
  }
  function handleOutput(response){
    
    setRecipes([]);
    const recipeBlocks = response.split('- Recipe');
    console.log(recipeBlocks);
  recipeBlocks.shift();
  console.log(recipeBlocks);
  recipeBlocks.forEach(block => {
    const lines = block.split('\n').filter(line => line.trim() !== '');

    const title = lines[0].trim(); // Extract the recipe title
    const steps = lines.slice(1).map(step => step.trim()); // Extract the recipe steps
    console.log(" "+title +" "+ steps);
    setRecipes((prevItems)=>[...prevItems,{
      id:crypto.randomUUID(),
      title:title,
      value:steps
    }]);
  });
  }

  return ( 
    <div className="Reacthome">
      <h1>🔍Recipe Generator🔍</h1>
      <div className="homePage">
        <div className="ingredients">
        <h1 className="header"> 🛒Add Ingredients 🛒</h1>
          
          <NewItemForm onSubmit={addItem} />
          
          <div className="buttons">
            <button onClick={()=>clear()} className="btn">Clear</button>
            <button onClick={()=>handleSubmit()} className="btn submitBtn">Generate!</button>
          </div>
        </div>
        <div className="ingredients">
          <h1 className="header">🍅Your Ingredients🥔</h1>
          <ItemList items={items} onDelete={handleDelete}/>
        </div>
        
       
      </div>
        <div className="recipes">
         
          <RecipeList Recipes={recipes} loading={loading}/>
        </div>
          

    </div>
   );
}
 
export default App;