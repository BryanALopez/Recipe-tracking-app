import React from "react";
import "./App.css";

function Recipe({recipe, deleteRecipe}) {
  
  const handleDeleteRecipe = (event) => deleteRecipe(recipe);
  
  return (
          <tr>
            <td className="smallCol">{recipe.name}</td>
            <td className="smallCol">{recipe.cuisine}</td>
            <td className="smallCol"><img className="img" src={recipe.photo}/></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td>
              <button name="delete" onClick={handleDeleteRecipe}>Delete</button>
            </td>
          </tr>
  );
}

export default Recipe;