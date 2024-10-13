import React from 'react';

function RecipeDetail({ recipe, closeDetail }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" onClick={closeDetail}>
      <div className="relative p-8 w-full max-w-2xl bg-white rounded-3xl shadow-2xl" onClick={e => e.stopPropagation()}>
        <h3 className="text-3xl font-bold text-teal-800 mb-4">{recipe.title}</h3>
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-teal-700 mb-2">Ingredients:</h4>
          <p className="text-gray-700 whitespace-pre-line">{recipe.ingredients}</p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-teal-700 mb-2">Instructions:</h4>
          <p className="text-gray-700 whitespace-pre-line">{recipe.instructions}</p>
        </div>
        <button
          onClick={closeDetail}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;