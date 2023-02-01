import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ListsPage from './Pages/ListsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/listpage" element={<ListsPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
