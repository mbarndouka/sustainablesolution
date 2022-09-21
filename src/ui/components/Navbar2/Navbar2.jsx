import './Navbar2.css';
import List from '../../../assets/list-copy.svg';
import Logo from '../../../assets/Vector.svg';
import Avatar from '../../../assets/avatar.png';
import {FiBell} from 'react-icons/fi'


export default function Navbar2(){
    return(
        <header className="Navbar2">
            <div className='first-nav2'>
                <img className='nature' src={List} alt="menu" />
                <span>Menu</span>
            </div>
            <div className='second-nav'>
                <img src={Logo} alt="" />
            </div>
            <div className='third-nav'>
                <FiBell size="25px"/>
                <img className='avatar-img' src={Avatar} alt="imgper" />
            </div>
        </header>
    );
}