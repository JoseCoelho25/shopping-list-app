import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListsPage from './Pages/ListsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListsPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
