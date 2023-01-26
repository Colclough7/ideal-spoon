import React from "react";






function RecipeCreate({recipe,setRecipe,handleChange,handleSubmit}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
return (
    <form name="create">
      <table>
        <tbody>
          {/*Table Row*/}
          
          <tr>
            {/*Name Input*/}
            <td>
            <input type="text" id="name" name="name" placeholder="Name" value={recipe.name || ""} onChange={handleChange} />
            </td>
            {/*End Name Input*/}
            
            {/*Cuisine Input*/}
            <td>
            <input type="text" id="cuisine" name="cuisine" placeholder="Cuisine" value={recipe.cuisine || ""} onChange={handleChange}/>
            </td>
            {/*End Cuisine Input*/}
            
             {/*URL Input*/}
            <td>
            <input type="url" name="photo" id="photo" placeholder="URL" pattern="https://.*" value={recipe.photo || ""} onChange={handleChange}/>
            </td>
             {/*End URL Input*/}
            
            {/*Ingredients Text Area*/}
            <td>
              <textarea id="ingredients" name="ingredients" rows="2" cols="20" placeholder="Ingredients" value={recipe.ingredients || ""} onChange={handleChange}/>
            </td>
             {/*End Ingredients Text Area*/}
            
             {/*Preparation Text Area*/}
            <td>
             <textarea id="preparation" name="preparation" rows="2" cols="20" placeholder="Preparation" value={recipe.preparation || ""} onChange={handleChange}/> 
            </td>
            {/*End Preparation Text Area*/}
            
            {/*Submit Button*/}
            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
            {/*End Submit Button*/}
            
          </tr>
          {/*End Table Row*/}
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;