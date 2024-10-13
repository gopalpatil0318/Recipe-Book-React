import React, { useState } from 'react';

function RecipeForm({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { id: Date.now(), title, ingredients, instructions };
    
    addRecipe(newRecipe);
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-teal-700 mb-1">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-teal-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 transition duration-300 text-gray-700"
          required
          placeholder="Enter a catchy title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-teal-700 mb-1">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-teal-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 transition duration-300 text-gray-700"
          rows="4"
          required
          placeholder="List your ingredients here"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-teal-700 mb-1">Cooking Instructions</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-teal-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 transition duration-300 text-gray-700"
          rows="4"
          required
          placeholder="Share your cooking steps"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-300 transform hover:scale-105"
      >
        Add to Collection
      </button>
    </form>
  );
}

export default RecipeForm;