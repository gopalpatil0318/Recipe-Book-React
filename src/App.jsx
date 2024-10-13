import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-teal-800 mb-12">
          Recipe Book
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500">
                <h2 className="text-2xl font-semibold text-white">Create Your Recipe</h2>
              </div>
              <div className="p-6">
                <RecipeForm addRecipe={addRecipe} />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500">
                <h2 className="text-2xl font-semibold text-white">Your Recipe Collection</h2>
              </div>
              <div className="p-6">
                <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;