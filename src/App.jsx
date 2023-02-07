import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from "./Pages/ListPage";
import IngredientsPage from "./Pages/IngredientsPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />}/>
          <Route path="/:value" element={<IngredientsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
