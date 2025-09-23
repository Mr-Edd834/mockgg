import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Orderhistory from './Components/Orderhistory';
import Myorder from './Components/Myorder';
import Checkout from './Components/Checkout';
import Favorites from './Components/Favorites';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="App">
      <Sidebar onToggle={setIsCollapsed} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orderhistory" element={<Orderhistory />} />
          <Route path="/myorder" element={<Myorder />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


