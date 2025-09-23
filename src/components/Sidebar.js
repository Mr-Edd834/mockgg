import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", img:"/Icons/icons8-dashboard-layout-24.png", label: "Dashboard" },
    { id: "food-order", icon: "🛒", label: "Food Order" },
    { id: "favorite", icon: "❤️", label: "Favorite" },
    { id: "message", icon: "💬", label: "Message" },
    { id: "order-history", icon: "🕒", label: "Order History" },
    { id: "bills", Image: "public/Icons/icons8-shopping-basket.gif", label: "Basket" },
    { id: "setting", icon: "⚙️", label: "Setting" }
  ];

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onToggle(newState);
  };

  const handleIconClick = (itemId) => {
    if (isCollapsed) {
      // If sidebar is collapsed, open it and set the active item
      setActiveItem(itemId);
      setIsCollapsed(false);
      onToggle(false);
    } else {
      // If sidebar is open, check if it's the same item
      if (activeItem === itemId) {
        // Same item pressed - collapse the sidebar
        setIsCollapsed(true);
        onToggle(true);
      } else {
        // Different item pressed - just change active item, keep sidebar open
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
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => handleIconClick(item.id)}
              >
                <span className="menu-icon">{item.icon}</span>
              </div>
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
              <div
                key={item.id}
                className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => handleIconClick(item.id)}
              >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;