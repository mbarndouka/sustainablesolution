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
  return (
    <div className='Navbar'>
      {!isOPen ?(
      <div className="navbar-first" onClick={()=> setIsOpen(!isOPen)}>
        <img src={List} alt="" /> 
        <span>Menu</span>
      </div>) :(<Sidebar onClick={()=> setIsOpen(isOPen)}/>)
      }

      <div className="navbar-second">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-third">
        <Link className='third-link' to="/Signup"> Register</Link>
        <Link className='third-link' to="/Signin"> Log in</Link>
        <Button> Get started</Button>
      </div>
    </div>
  )
}
