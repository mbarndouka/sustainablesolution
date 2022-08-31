import React from 'react';
import './School.css';
import SecondF from '../../components/Secondfooter/SecondF';
import { useState } from 'react';
import Logos from '../../../assets/Vector2.svg';
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function School() {

    const [showPassword, setShowPassword] = useState("");

    const handleShowPassword =(e)=>{
        e.preventDefault();
        setShowPassword((value) => !value);
    }
  return (
    <div className='School'>
        <img src={Logos} alt="logo-company" className='logo33'/>
        <form action="" className='retrive'>
            <h1>Sign up to be put in touch with a donor</h1>
            <div className='googleapplle'>
          
            </div>
                <p className='line'>or</p>
                <input type="text" className='retrive-1' placeholder='Name of the school'/>
                <input type="email" className='retrive-3' placeholder='Work email address'/>
                <div className="handleP">
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
        <select id='country' value='country' className='Select1'>
          <option value="Rwanda" selected>Rwanda</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Burundy">Burundy</option>
        </select>
        <button type="submit" className='sbmtBtn'> Create my account</button>
        <p className='p1'>Already have an account? <Link to="/Signin" className='link3'> Log in</Link></p>
      </form>
        <SecondF /> 
    </div>
  )
}
