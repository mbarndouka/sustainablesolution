import './Signup.css';
import SecondF from '../../components/Secondfooter/SecondF';
import Logos from '../../../assets/Vector2.svg';
import Group2 from '../../../assets/Group2.png';
import Group from '../../../assets/Group.svg';
import Square from '../../components/Square/index';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="Signup">
        <img className='signupimg' src={Logos} alt="" />
        <div className="signup-body">
          <h1>Join as a sponsor or a school</h1>
          <form className="body-form">
            <Square>
              <div className='btn-z'>
                <img src={Group} alt="" />
              </div>
              <span>I&#8217;m a Sponsor</span>
            </Square>
            <Square> 
            <div className='btn-t'>
                <img src={Group2} alt="" />
              </div>
              <span>As school</span>
            </Square>
          </form>
          <p>Already have an account? <Link to="/Signin" className='Connect'>Log in</Link></p>
        </div>
        <div className='now'>
          <SecondF />
        </div>
    </div>
  )
}