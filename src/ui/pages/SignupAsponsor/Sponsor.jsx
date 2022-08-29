import './signupsponsor.css'
import SecondF from '../../components/Secondfooter/SecondF';
import Logos from '../../../assets/Vector2.svg';


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
        <input type="select" className='retrive-5' placeholder='Rwanda'/>
      </form>
        <SecondF />
    </div>
  )
}
