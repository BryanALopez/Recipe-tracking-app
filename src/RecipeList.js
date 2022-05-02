import React, { useState } from "react";
import Recipe from "./Recipe";

function RecipeList({currentRecipes, setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
 
  const deleteRecipe = (recipe) => setRecipes(currentRecipes.filter( currentRecipe => recipe !== currentRecipe ));
  const recipes = currentRecipes.map( 
    (recipe, index) => <Recipe key={`${index}`} recipe={recipe} deleteRecipe={deleteRecipe}/> 
  );
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recipes}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
