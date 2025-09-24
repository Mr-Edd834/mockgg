import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Heart,
  Clock,
  ShoppingBasket,
  Settings,
} from "lucide-react"; // <-- icon pack
import "./Sidebar.css";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", icon: <LayoutDashboard size={24} />, label: "Dashboard",path:"/" },
    { id: "food-order", icon: <ShoppingCart size={24} />, label: "Food Order",path:"/checkout" },
    { id: "favorite", icon: <Heart size={24} />, label: "Favorite",path:"/favorites" },
    { id: "order-history", icon: <Clock size={24} />, label: "Order History",path:"/orderhistory" },
    { id: "bills", icon: <ShoppingBasket size={24} />, label: "Basket", path:"/myorder" },
    { id: "setting", icon: <Settings size={24} />, label: "Setting",path:"/profile" },
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
              <div
                key={item.id}
                className={`menu-item ${activeItem === item.id ? "active" : ""}`}
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
                className={`menu-item ${activeItem === item.id ? "active" : ""}`}
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
