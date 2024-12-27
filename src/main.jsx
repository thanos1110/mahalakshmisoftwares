import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import About from "./About.jsx";
import Career from "./Career.jsx";
import Products from "./Products.jsx";
import Navbar from "./Navbar.jsx";
import Contact from "./Contact.jsx";
import './index.css'
import Features from "./Features.jsx";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/products" element={<Products />} />
      <Route path="/features" element={<Features />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>
);