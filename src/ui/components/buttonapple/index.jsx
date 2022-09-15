import './index.css';
import Qpple from '../../../assets/apple.jpg';


export default function index() {
  return (
    <div className='apple'>
        <img className='appleimg' src={Qpple} alt="" />
        <span>Continue with Apple</span>
    </div>
  )
}