import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '/Mahalakshmi.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar on and off
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Collapse navbar when any link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="navbar-header">
        <img src={Logo} alt="Logo" className="logo" />
        <button className="toggle-button" onClick={toggleNavbar}>
          ☰
        </button>
      </div>
      <ul className={`navbar ${isOpen ? "open" : ""}`}>
        <li className="bg-nav"><Link to="/" className="navlink" onClick={handleLinkClick}>Home</Link></li>
        <li className="bg-nav"><Link to="/about" className="navlink" onClick={handleLinkClick}>About</Link></li>
        <li className="bg-nav"><Link to="/career" className="navlink" onClick={handleLinkClick}>Career</Link></li>
        <li className="bg-nav"><Link to="/products" className="navlink" onClick={handleLinkClick}>Products</Link></li>
        <li className="bg-nav"><Link to="/features" className="navlink" onClick={handleLinkClick}>Features</Link></li>
        <li className="bg-nav"><Link to="/contact" className="navlink" onClick={handleLinkClick}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
