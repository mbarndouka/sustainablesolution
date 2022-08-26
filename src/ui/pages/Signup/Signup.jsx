import './Signup.css';
import SecondF from '../../components/Secondfooter/SecondF';
import Logo from '../../../assets/Vector2.svg';
import Square from '../../components/Square/index';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="Signup">
        <img src={Logo} alt="" />
        <div className="signup-body">
          <h1>Join as a sponsor or a school</h1>
          <form className="body-form">
            <Square></Square>
            <Square> </Square>
          </form>
          <p>Already have an account? <Link to="/Signin" className='connect'>Log in</Link> </p>
        </div>
        <SecondF />
    </div>
  )
}