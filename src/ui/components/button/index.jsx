import './index.css';

export default function Index(props) {
  return <div className='button'>
    {props.children}
  </div>
}