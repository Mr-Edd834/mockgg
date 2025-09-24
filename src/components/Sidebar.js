import React, { useState } from "react";
import {
  LayoutDashboard,
  Heart,
  ClipboardList,
  ShoppingBasket,
  Settings,
  Bike,
} from "lucide-react"; // <-- icon pack
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState("dashboard");
  

  const menuItems = [
    { id: "dashboard", icon: <LayoutDashboard size={24} />, label: "Dashboard",path:"/" },
     { id: "favorite", icon: <Heart size={24} />, label: "Favorite",path:"/favorites" },
      { id: "bills", icon: <ShoppingBasket size={24} />, label: "Checkout", path:"/checkout" },
    { id: "food-order", icon: <Bike size={24} />, label: "My Orders",path:"/myorder" },
   
    { id: "order-history", icon: <ClipboardList size={24} />, label: "Order History",path:"/orderhistory" },
  
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
                <Link to={item.path} >
                <span className="menu-icon">{item.icon}</span>
                </Link>
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
              <Link to={item.path} >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
