import { useState, useEffect } from 'react';

function MiApi({area,filtro }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipe();
  }, [area]);



  const fetchRecipe = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
      }
    } catch (error) {
      console.error("Hubo un error al buscar la receta:", error);
    }
  };

  const filteredRecipes = recipes.filter(recipe => recipe.strMeal.toLowerCase().includes(filtro.toLowerCase()));
  return (
    <div className='row'>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.idMeal} className='col-4'>
            <h4>{recipe.strMeal}</h4>
            <img className="meal-image" src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
        ))
      ) : (
        <p>Cargando recetas...</p>
      )}
    </div>
  );
}

export default MiApi;
