import { useState, useEffect } from 'react';

function MiApi({ area, filtro }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchRecipe();
  }, [area]);



  const fetchRecipe = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      const data = await response.json();
      if (data.meals) {
        const sortedMeals = data.meals.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
        setRecipes(sortedMeals);
      }
    } catch (error) {
      console.error("Hubo un error al buscar la receta:", error);
    } finally {
      setIsLoading(false);  
    }
  };

  const filteredRecipes = recipes.filter(recipe => recipe.strMeal.toLowerCase().includes(filtro.toLowerCase()));
  return (
    <div className='row'>
      {isLoading ? (
        <p>Cargando...</p>
      ) : filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.idMeal} className='col-lg-4 col-md-6 col-sm-12 mt-3'>
            <h4>{recipe.strMeal}</h4>
            <img className="meal-image img-fluid" src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
        ))
      ) : (
        <p>No se encontraron recetas</p>
      )}
    </div>
  );
}

export default MiApi;
