import './signupsponsor.css'
import SecondF from '../../components/Secondfooter/SecondF';
import Logos from '../../../assets/Vector2.svg';
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import getFormData from '../../../utils/get-form-data';
import { UserRepositoryImpl } from '../../../Data/repository/user-repository';


export default function Sponsor() {
  const [showPassword, setShowPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const Navigate = useNavigate();
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
    // console.log(formData);
    // setIsloading(true);
    const resp = await userRepository.registerUser(formData);
    // setIsloading(false);
    // if(resp = false){
    //   Navigate('/Signin')
    // }
    console.log("response: ", resp);
  }

  const handleShowPassword =(e)=>{
    e.preventDefault();
    setShowPassword((value) => !value);
  }

  return (
    isLoading ? <h1>Is loading</h1> :
    <div className='sponsor'>
      <img src={Logos} alt="logo-company" className='logo33'/>
      <form onSubmit={submitUserData} action="POST" className='retrive'>
        <h1>Sign up to start helping out</h1>
        <div className='googleapplle'>
          
        </div>
        <p className='line'>or</p>
        <div className="retrive-first">
          <input name='firstName' type="text" className='retrive-1' placeholder='First name'/>
          <input name='secondName' type="text" className='retrive-2' placeholder='Last name'/>
        </div>
        <input name="email" type="email" className='retrive-3' placeholder='Work email address'/>
        <div className="handleP">
        <input name='password' type={showPassword ? "text" : "password"} className='retrive-4' placeholder='Password'/>
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
                    />
                  </div>
                )}
        </div>
        <input type="hidden" name="roles" value="sponsor" />
        <select name='location' id='country' className='Select1'>
          <option value="Rwanda"> Rwanda</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Burundy">Burundy</option>
        </select>
        <div className='script-bottom'>
          <input type="checkbox" id="send"  value="send"/>
          <label htmlFor="send"> Send me emails with tips on how to connect with schools that meet my interests.</label>
        </div>
        <button type="submit" className='sbmtBtn'> Create my account</button>
        <p className='p1'>Already have an account? <Link to="/Signin" className='link3'> Log in</Link></p>
      </form>
        <SecondF />
    </div>
  )
}
