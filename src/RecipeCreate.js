import React, { useState } from "react";

function RecipeCreate({currentRecipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
    name: "name",
    cuisine: "cuisine",
    photo: "photo",
    ingredients: "ingredients",
    preparation: "preparation"
  };
  
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...initialFormState });
  
    const newRecipe = {
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation
    };
    setRecipes([...currentRecipes, newRecipe]);
  };
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
