import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FoodOrder from './pages/FoodOrder';
import Favorite from './pages/Favorite';
import Messages from './pages/Messages';
import OrderHistory from './pages/OrderHistory';
import Bills from './pages/Bills';
import Settings from './pages/Settings';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar onToggle={setIsCollapsed} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/food-order" element={<FoodOrder />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


