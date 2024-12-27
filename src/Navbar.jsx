import React from "react";
import { Link } from "react-router-dom";
import Logo  from '/Mahalakshmi.svg'
const Navbar = () => {
  return (
    <nav >
      <ul className="navbar">
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
