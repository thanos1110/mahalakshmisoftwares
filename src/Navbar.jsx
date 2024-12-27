import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '/Mahalakshmi.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
        <li><Link to="/" className="navlink">Home</Link></li>
        <li><Link to="/about" className="navlink">About</Link></li>
        <li><Link to="/career" className="navlink">Career</Link></li>
        <li><Link to="/products" className="navlink">Products</Link></li>
        <li><Link to="/features" className="navlink">Features</Link></li>
        <li><Link to="/contact" className="navlink">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
