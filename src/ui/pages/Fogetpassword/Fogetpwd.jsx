import './Frogetpwd.css';
import Navbarthird from '../../components/narbar-third/navbar-third';
import Footer2 from '../../components/Secondfooter/SecondF';
import { UserRepositoryImpl4 } from '../../../Data/repository/user4-repository';
import getFormData from '../../../utils/get-form-data';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Fogetpwd() {

    const userForgot = new UserRepositoryImpl4();
    const navigate = useNavigate();

    const emailUSer = async (evt)=>{
        evt.preventDefault();

        /**
         * @param {HTMLFormElement}
         */

        const form = evt.target;

        /**
         * @type {UserFgpwd}
         */

        const getEmail = getFormData(form);
        console.log(getEmail);
        const resp = await userForgot.forgotPwd(getEmail);
        if(resp === true){
            navigate("/");
        }
        // else(resp === false){
        //     navigate("");
        // }
    }

    

  return (
    <div className='Fogetpwd'>
        <div className="fogert-first">
            <Navbarthird />
        </div>
        <div className="forget-second">
            <div className='Entert'>
                <h1 className='thingFor'>FORGOT PASSWORD</h1>
                <h5 className='thingpour'>Please provide a valid email address.</h5>
            </div>
            <form action="POST" className='Fork' onSubmit={emailUSer}>
                <input type="email" name="email" id="" className='enteremail' placeholder='Enter your email'/>
                <input type="submit" value="Submit"  id="yo"className='btn45'/>
            </form>
        </div>
        <div className="footair">
            <Footer2 />
        </div>
    </div>
  )
}