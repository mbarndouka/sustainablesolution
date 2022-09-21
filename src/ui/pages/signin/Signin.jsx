import './Signin.css';
import SecondF from '../../components/Secondfooter/SecondF';
import Logos from '../../../assets/Vector2.svg';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import Buttongoo from '../../components/buttongoogle/index';
import ButtonApp from '../../components/buttonapple/index'
import { UserRepositoryImpl3 } from '../../../Data/repository/user3-repository';
import getFormData from '../../../utils/get-form-data';


export default function Signin() {
  const [showPassword, setShowPassword] = useState("");
  const userRepo = new UserRepositoryImpl3();
  const navigate = useNavigate();

    const handleShowPassword =(e)=>{
      e.preventDefault();
       setShowPassword((value) => !value);
    }

    const LoginUser = async (evt)=>{
      evt.preventDefault();

      /**
       * @param {HTMLFormElement}
      */

      const form = evt.target;

      /**
       * @type {UserLogin}
       */

      const getData = getFormData(form);
      // console.log(getData)

      const resp = await userRepo.registerLogin(getData);
      if(resp == true){
        navigate("/Dashspon");
      }
    }

  return (
    <div className='Signin'>
      <form action="POST" onSubmit={LoginUser} className='sign-form'>
      <img src={Logos} alt="our logo" className='sign-in'/>
        <h1>Log in to Educat</h1>
        <div className='signin-Goap'>
          <Buttongoo />
          <ButtonApp />
        </div>
        <p className='line1'>or</p>
        <input type="text" name="email"className='signin-retrive' placeholder='Email'/>
        <div className="handlePassword">
          <input type={showPassword ? "text" : "password"}  name="password" className='signin-retrive-password' placeholder='Password'/>
            {showPassword ? (
                        <div className="icon"><AiIcons.AiOutlineEye id="eyeOne" onClick={handleShowPassword}/>
                        </div>
                    ) : (
                        <div className="icon"><AiIcons.AiOutlineEyeInvisible id="eyeTwo" onClick={handleShowPassword}/>
                        </div>
                    )
            }
        </div>
        <Link to="/Fogetpwd" className='forgetPass'>Forget password</Link>
        <button type="submit" className='signin-sbmtBtn'> Log in</button>
        <p className='p1'>Don't have an account? <Link to="/Signup" className='signin-link'> Sign up</Link></p>
      </form>
      <SecondF />
    </div>
  )
}