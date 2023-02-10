import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from "./Pages/ListPage";
import IngredientsPage from "./Pages/IngredientsPage";
import RecipesPage from "./Pages/RecipesPage";
import AddRecipeIngredientsPage from "./Pages/AddRecipeIngredientsPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />}/>
          <Route path="/:value" element={<IngredientsPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:recipe" element={<AddRecipeIngredientsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
