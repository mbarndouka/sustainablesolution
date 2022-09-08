import './Navbar.css';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Logo from '../../../assets/Vector1.svg';
import Button from '../button/index';
import List from '../../../assets/list.svg';
import "@fontsource/lexend";
import { useState } from 'react';

export default function Navbar() {
  const [isOPen, setIsOpen] = useState(false);

  function handleSideBar() {
    console.log("open side bar");
  }
    
  window.addEventListener("load", handleSideBar);
  

  return (
    <div className='Navbar'>
      <div className="navbar-first" id="sidebarId" onClick={handleSideBar}>
        <img src={List} alt="" /> 
        <span>Menu</span>
      </div>

      <div className="navbar-second">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-third">
        <Link className='third-link' to="/Signin"> Log in</Link>
        <Button> Get started</Button>
      </div>
    </div>
  )
}
