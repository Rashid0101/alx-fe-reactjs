import { useState } from "react";
import { useRecipeStore } from "../store/recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return;

    addRecipe({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
        style={{
          display: "block",
          marginBottom: "1rem",
          padding: "0.5rem",
          width: "100%",
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
        rows="4"
        style={{
          display: "block",
          marginBottom: "1rem",
          padding: "0.5rem",
          width: "100%",
        }}
      ></textarea>
      <button type="submit" style={{ padding: "0.5rem 1rem" }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
