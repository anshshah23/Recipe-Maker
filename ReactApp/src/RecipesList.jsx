import Recipe from "./Recipe";
const RecipeList = ({Recipes,loading}) => {
    return (  
       <div className="RecipeList">
         <h1 className="header">📝Recipes📝</h1>
        <ul className="recipeContainer">
           {loading ? (
            <li>
              <div className="loader"></div>

            </li>
          ) : (
            Recipes.length === 0 ? (
              <li>No Recipes</li>
            ) : (
              Recipes.map(recipe => (
                <Recipe  {...recipe} value={recipe.value} title={recipe.title} key={recipe.id}  />
              ))
            )
          )}
        </ul>
       </div>
    );
}
 
export default RecipeList;