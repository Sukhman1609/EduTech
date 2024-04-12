import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div>
    <footer className="footer-container">
      <div className="footer-section">
        <h4>EduTech</h4>
        <ul>
          <li><NavLink to="/about">EduTech Business</NavLink></li>
          <li><NavLink to="/blog">Teach on EduTech</NavLink></li>
          <li><NavLink to="/careers">Get the app</NavLink></li>
          <li><NavLink to="/press">About us</NavLink></li>
          <li><NavLink to="/press">Contact us</NavLink></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Categories</h4>
        <ul>
          <li><NavLink to="/categories/business">Business</NavLink></li>
          <li><NavLink to="/categories/development">Development</NavLink></li>
          <li><NavLink to="/categories/finance">Finance</NavLink></li>
          <li><NavLink to="/categories/it-software">IT & Software</NavLink></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li><NavLink to="/help">Help & Support</NavLink></li>
          <li><NavLink to="/affiliate">Affiliate</NavLink></li>
          <li><NavLink to="/terms">Terms</NavLink></li>
          <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
        </ul>
      </div>

      

      <div className="footer-section1">
        <p>&copy; 2023 EduTech. All rights reserved.</p>
      </div>
      <div>
        <img src='https://ue.ucdavis.edu/sites/g/files/dgvnsk4711/files/UE%20Logo-01_1.png' alt='' style={{width:'50px', position:'relative',top:'200px',right:'1340px'}}/>
      </div>
    </footer>
    
    </div>
  );
}

export default Footer;
