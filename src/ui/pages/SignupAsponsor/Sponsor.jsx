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
      </form>
        <SecondF />
    </div>
  )
}
