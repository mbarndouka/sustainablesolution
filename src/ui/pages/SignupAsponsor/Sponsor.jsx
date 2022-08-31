import './signupsponsor.css'
import SecondF from '../../components/Secondfooter/SecondF';
import Logos from '../../../assets/Vector2.svg';

import { Link } from 'react-router-dom';


export default function Sponsor() {
  return (
    <div className='sponsor'>
      <img src={Logos} alt="logo-company" className='logo33'/>
      <form action="" className='retrive'>
        <h1>Sign up to start helping out</h1>
        <div className='googleapplle'>
          
        </div>
        <p className='line'>or</p>
        <div className="retrive-first">
        <input type="text" className='retrive-1' placeholder='First name'/>
        <input type="text" className='retrive-2' placeholder='Last name'/>
        </div>
        <input type="email" className='retrive-3' placeholder='Work email address'/>
        <input type="password" className='retrive-4' placeholder='Password'/>
        <select id='country' value='country' className='Select1'>
          <option value="Rwanda"> Rwanda</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Burundy">Burundy</option>
        </select>
        <div className='script-bottom'>
          <input type="checkbox" id="send" name="send" value="send"/>
          <label for="vehicle1"> Send me emails with tips on how to connect with schools that meet my interests.</label>
        </div>
        <button type="submit" className='sbmtBtn'> Create my account</button>
        <p className='p1'>Already have an account? <Link to="/Signin" className='link3'> Log in</Link></p>
      </form>
        <SecondF />
    </div>
  )
}
