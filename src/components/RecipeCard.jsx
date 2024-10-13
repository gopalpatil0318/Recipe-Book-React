import React from 'react';

function RecipeCard({ recipe, deleteRecipe }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:shadow-2xl">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-teal-800">{recipe.title}</h2>
          <button
            onClick={() => deleteRecipe(recipe.id)}
            className="p-2 bg-red-100 text-red-500 rounded-full hover:bg-red-200 transition duration-300 transform hover:scale-110"
            aria-label="Delete recipe"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-teal-700 mb-2">Ingredients:</h3>
            <p className="text-gray-600 whitespace-pre-line">{recipe.ingredients}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-teal-700 mb-2">Instructions:</h3>
            <p className="text-gray-600 whitespace-pre-line">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;