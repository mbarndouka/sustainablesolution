import './Dashspon.css';
import Navbar2 from '../../components/Navbar2/Navbar2';

export default function Dashspon() {
  return (
    <div className='dash'>
      <Navbar2/>
      {/* <div className="alert">
        helo
      </div> */}
      <div className="contain">
        <p className='parg'>Finding a school to sponsor?</p>
        <input  className="button-conn"type="button" value="Connect"/>
      </div>
    </div>
  )
}
