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
        <p className='menunav'>Menu</p>
      </div>) :(<Sidebar onClick={()=> setIsOpen(isOPen)}/>)
      }

      <div className="navbar-second">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-third2">
        <Link className='third-link' to="/Signin"> Log in</Link>
        <Link className='third-link1' to="/Signup">Get started</Link>
      </div>
    </div>
  )
}
