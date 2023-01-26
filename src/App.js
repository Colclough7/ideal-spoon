import React, { useState } from "react"
import "./App.css";
import RecipeList from "./RecipeList"
import RecipeData from "./RecipeData"
import RecipeCreate from "./RecipeCreate";
function App() {
   const [data,setData] = useState([...RecipeData])
   const [recipe,setRecipe] = useState({name: '', cuisine: '', photo: '', ingredients: '', preparation: ''
  })
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setRecipe({...recipe, [name]:value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
   const thisRecipe = {...recipe}
   setData([...data,thisRecipe])
    setRecipe({name: '',cuisine: '', photo: '',ingredients: '', preparation: ''})
  }
  

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList data={data} setData={setData}/>
      <RecipeCreate recipe={recipe} setRecipe={setRecipe} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  );
}

export default App;