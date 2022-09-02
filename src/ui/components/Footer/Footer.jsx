import React, { Component } from 'react'
import './Footer.css'
import Logo from '../../../assets/Vector1.svg'

export class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className="footer-first">
          <img src={Logo} alt="" />
          <form className='send-info'>
            <input type='text' placeholder='Email address' className='inputinfi'/>
            <input type="submit" value="Submit" className='inputinfin'/>
          </form>
        </div>
        <div className="footer-second">
          <h1 className='big'>About</h1>
          <p>Team</p>
          <p>How Educat works</p>
        </div>
        <div className="repon">
          <div className="repo-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="dernier">
            <h1 className='big'>About</h1>
            <p>Team</p>
            <p>How Educat works</p>
          </div>
          <form className='send-info'>
            <input placeholder='Email address' className='inputinfi'/>
            <input type="submit" value="Submit" className='inputinfin'/>
          </form>
        </div>
      </div>
    )
  }
}

export default Footer