import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {recipes.length === 0 ? (
        <p className="text-center text-teal-600 col-span-2 text-lg">Your cooking journey begins here. Add your first recipe!</p>
      ) : (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            deleteRecipe={deleteRecipe}
          />
        ))
      )}
    </div>
  );
}

export default RecipeList;