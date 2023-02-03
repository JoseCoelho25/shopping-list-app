import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListsPage from './Pages/ListsPage';
import CreateNewList from './Pages/CreateNewList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListsPage />}/>
          <Route path="/createlist" element={<CreateNewList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
