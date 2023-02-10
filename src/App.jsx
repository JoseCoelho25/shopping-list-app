import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from "./Pages/ListPage";
import IngredientsPage from "./Pages/IngredientsPage";
import AddRecipePage from './Pages/AddRecipePage';
import AddIngredientsPage from "./Pages/AddIngredientsPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />}/>
          <Route path="/:value" element={<IngredientsPage />} />
          <Route path="/recipes" element={<AddRecipePage />} />
          <Route path="/:recipe" element={<AddIngredientsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
