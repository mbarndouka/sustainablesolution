import './Signin.css';
import SecondF from '../../components/Secondfooter/SecondF';
import Logos from '../../../assets/Vector2.svg';
import { useState } from 'react';
import * as AiIcons from "react-icons/ai";



export default function Signin() {
  const [showPassword, setShowPassword] = useState("");

    const handleShowPassword =(e)=>{
      e.preventDefault();
       setShowPassword((value) => !value);
    }
  return (
    <div className='Signin'>
      <img src={Logos} alt="our logo" className='sign-in'/>
      <form action="" className='sign-form'>
        <h1>Log in to Educat</h1>
        <div className='signin-Goap'>
          
        </div>
        <p className='line1'>or</p>
        <input type="text" className='signin-retrive' placeholder='Name of the school'/>
        <div className="handlePass">
          <input type={showPassword ? "text" : "password"} className='retrive-4' placeholder='Password'/>
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
      </form>
      <SecondF />
    </div>
  )
}