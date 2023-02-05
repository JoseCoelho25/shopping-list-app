import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from "./Pages/ListPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
