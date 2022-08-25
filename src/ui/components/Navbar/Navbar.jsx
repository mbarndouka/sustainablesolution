import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Vector1.svg';
import Button from '../button/index'
import List from '../../../assets/list.svg';
import "@fontsource/lexend";

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="navbar-first">
        <Link className="first-link" to="/Sidebar"> <img src={List} alt="" /> 
        <span>Menu</span></Link>
      </div>
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
