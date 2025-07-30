import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Shows list of recipes
import RecipeDetails from "./RecipeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
