import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="App">
      <Sidebar onToggle={setIsCollapsed} />
      <div className="main-content">
        <h1>Hello, world!</h1>
        <p>Connect your routes to these links as needed.</p>
      </div>
    </div>
  );
}

export default App;


