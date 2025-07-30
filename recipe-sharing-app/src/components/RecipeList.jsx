// src/components/Home.jsx or RecipeList.jsx
import { useRecipeStore } from "../recipeStore";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Home = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      <SearchBar />
      <ul>
        {filteredRecipes.length === 0 ? (
          <li>No matching recipes found.</li>
        ) : (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
