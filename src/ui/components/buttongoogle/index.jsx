import './index.css'
import Qpple from '../../../assets/apple.jpg';
import Google from '../../../assets/google.png';

export default function index() {
  return (
    <div className='google'>
        <img className='googleimg' src={Google} alt="" />
        <span>Continue with Google</span>
    </div>
  )
}