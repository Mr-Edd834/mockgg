import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState("dashboard");

  // Added "path" for routing
  const menuItems = [
    { id: "dashboard", icon: "👤", label: "Home", path: "/" },
     { id: "favorite", icon: "❤️", label: "Favorite", path: "/Favorites" },
      { id: "message", icon: "💬", label: "Checkout", path: "/Checkout" },
     { id: "order-history", icon: "🕒", label: "My Order", path: "/Myorder" },
    { id: "bills", icon: "🧾", label: "Order History", path: "/Orderhistory" },
    { id: "setting", icon: "⚙️", label: "Profile", path: "/Profile" }
   
   
   
  ];

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onToggle(newState);
  };

  const handleIconClick = (itemId) => {
    if (isCollapsed) {
      setActiveItem(itemId);
      setIsCollapsed(false);
      onToggle(false);
    } else {
      if (activeItem === itemId) {
        setIsCollapsed(true);
        onToggle(true);
      } else {
        setActiveItem(itemId);
      }
    }
  };

  return (
    <div className="sidebar-container">
      {isCollapsed ? (
        /* Collapsed Sidebar */
        <div className="sidebar-collapsed">
          <div className="sidebar-header">
            <button className="toggle-btn" onClick={toggleSidebar}>
              →
            </button>
          </div>
          <div className="sidebar-menu">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`menu-item ${activeItem === item.id ? "active" : ""}`}
                onClick={() => handleIconClick(item.id)}
              >
                <span className="menu-icon">{item.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        /* Expanded Sidebar */
        <div className="sidebar-expanded">
          <div className="sidebar-header">
            <h2>GOGRUB</h2>
            <button className="toggle-btn" onClick={toggleSidebar}>
              ←
            </button>
          </div>
          <div className="sidebar-menu">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`menu-item ${activeItem === item.id ? "active" : ""}`}
                onClick={() => handleIconClick(item.id)}
              >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
