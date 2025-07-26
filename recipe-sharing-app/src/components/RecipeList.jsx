import { useRecipeStore } from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes yet. Add one!</p>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
