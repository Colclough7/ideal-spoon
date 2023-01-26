import React, { useState } from "react";
import './Recipe.css'





function Recipe({data,setData}){
  const deleteRecipe = (index)=>{
    let newRecipe = data.filter((item,i) => i !== index)
     setData((data)=>newRecipe)
   }
 return(
  <tbody>
      {data.map((recipe,index)=>{
        const {photo,name,cuisine,ingredients,preparation} = recipe
        return(
      <tr key={index} className="text-section">
       <td>{name}</td>
       <td>{cuisine}</td>
       <td><img src={photo} width="175" alt={name}/></td>
            <td className="content_td"><p>{ingredients}</p></td>    
            <td className="content_td"><p>{preparation}</p></td>    
       <td>
        <button name="delete" onClick={()=>deleteRecipe(index)}>Delete</button>
       </td>
      </tr> 
        )
      })}
</tbody>
  )
}




export default Recipe




