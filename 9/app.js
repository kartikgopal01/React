import React from "react"; 
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"; 
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
import "./App.css"; 
const App = () => { 
  return ( 
    <Router> 
      <nav className="nav"> 
        <NavLink to="/" end className="nav-link">Home</NavLink> 
        <NavLink to="/about" className="nav-link">About</NavLink> 
        <NavLink to="/contact" className="nav-link">Contact</NavLink> 
      </nav> 
 
      <div className="page-content"> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes> 
      </div> 
    </Router> 
  ); 
}; 
 
export default App; 