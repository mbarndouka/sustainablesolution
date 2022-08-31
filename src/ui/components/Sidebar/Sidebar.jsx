import './Sidebar.css';
import X from '../../../assets/x.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import List from '../../../assets/list.svg';

export default function Sidebar() {
    const [isClose, setIsClose] = useState(true);

  return (
    <div className='sidebar'>
        <div className="closebtn" onClick={()=> setIsClose(!isClose)}>
        <img src={X} alt="" />
        <span>Close</span>
        </div>

        <ul>
            <li> <Link className='point' to="/">Home</Link> </li>
            <li> <Link className='point' to="">About us</Link> </li>
            <li> <Link className='point' to="/Contactus">Contact us</Link> </li>
        </ul>
        
    </div>
  )
}
