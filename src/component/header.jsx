import { useState } from 'react';
import '../style/header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='header'>
      <div className="logo">Amit Dubal</div>
      <div className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="menu-btn" onClick={() => {setOpen(!open)}}>
        <img src="./menu.png" alt="menu" />
      </div>
      <div className={`menu ${open ? "open" : ""}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="button">
        <button><a href="#contact">Contact Me</a></button>
      </div>
    </div>
  );
};

export default Header;