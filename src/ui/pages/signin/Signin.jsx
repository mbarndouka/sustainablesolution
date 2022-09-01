import './Signin.css';
import SecondF from '../../components/Secondfooter/SecondF';
import Logos from '../../../assets/Vector2.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";



export default function Signin() {
  const [showPassword, setShowPassword] = useState("");

    const handleShowPassword =(e)=>{
      e.preventDefault();
       setShowPassword((value) => !value);
    }
  return (
    <div className='Signin'>
      <form action="" className='sign-form'>
      <img src={Logos} alt="our logo" className='sign-in'/>
        <h1>Log in to Educat</h1>
        <div className='signin-Goap'>
          
        </div>
        <p className='line1'>or</p>
        <input type="text" className='signin-retrive' placeholder='Name of the school'/>
        <div className="handlePassword">
          <input type={showPassword ? "text" : "password"} className='signin-retrive-password' placeholder='Password'/>
            {showPassword ? (
                        <div className="icon">
                            <AiIcons.AiOutlineEye
                            id="eyeOne"
                            onClick={handleShowPassword}
                        />
                </div>
                    ) : (
                        <div className="icon">
                         <AiIcons.AiOutlineEyeInvisible
                            id="eyeTwo"
                             onClick={handleShowPassword}
                        /></div>
                )}
        </div>
        <p className='forgetPass'>Forget password</p>
        <button type="submit" className='signin-sbmtBtn'> Log in</button>
          <p className='p1'>Don't have an account? <Link to="/SignAs" className='signin-link'> Sign up</Link></p>
      </form>
      <SecondF />
    </div>
  )
}