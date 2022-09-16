import React from 'react';
import './School.css';
import SecondF from '../../components/Secondfooter/SecondF';
import { useState } from 'react';
import Logos from '../../../assets/Vector2.svg';
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import Buttongoo from '../../components/buttongoogle/index';
import ButtonApp from '../../components/buttonapple/index';
import getFormData from '../../../utils/get-form-data';
import { UserRepositoryImpl } from '../../../Data/repository/user-repository';

export default function School() {

    const [showPassword, setShowPassword] = useState("");

    const userRepository = new UserRepositoryImpl();
  /**
   * @param {Event} evt
  */

    const submitUserData = async (evt)=>{
      evt.preventDefault();
      /**
       * @param {HTMLFormElement}
      */
  
      const form = evt.target;
  
      /**
       * @type {import('../../../Data/models/types').UserModel}
      */
  
      const formData = getFormData(form);
      // console.log("okk");
      console.log(formData);
      // setIsloading(true);
      const resp = await userRepository.registerUser(formData);
      console.log("response: ", resp);
    }
  

    const handleShowPassword =(e)=>{
        e.preventDefault();
        setShowPassword((value) => !value);
    }
  return (
    <div className='School'>
        <img src={Logos} alt="logo-company" className='logo33'/>
        <form onSubmit={submitUserData} action="POST" className='retrive'>
            <h1>Sign up to be put in touch with a donor</h1>
            <div className='googleapplle'>
              <Buttongoo />
              <ButtonApp />
            </div>
                <p className='line'>or</p>
                <input type="text" name='firstname'className='retrive-1' placeholder='Name of the school'/>
                <input type="email" name='email' className='retrive-3' placeholder='Work email address'/>
                <div className="handleP">
                    <input type={showPassword ? "text" : "password"} name='password' className='retrive-4' placeholder='Password'/>
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
        <input type="hidden" name="roles" value="school" />
        <input type="hidden" name="secondName" value="schoolName" />
        <select id='country' name='location' className='Select1'>
          <option value="Rwanda" >Rwanda</option>
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
