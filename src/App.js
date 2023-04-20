import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';

import background from './assets/images/phone_frame_cutout.png';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:smbl" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
