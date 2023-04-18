import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
