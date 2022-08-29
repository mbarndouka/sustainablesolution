import React, { Component } from 'react'
import './Footer.css'
import Logo from '../../../assets/Vector1.svg'
import Button from '../button/index'

export class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className="footer-first">
          <img src={Logo} alt="" />
          <form className='send-info'>
            <input placeholder='Email address'/>
            <Button>Submit</Button>
          </form>
        </div>
        <div className="footer-second">
          <h1>About</h1>
          <p>Team</p>
          <p>How Educat works</p>
        </div>
        <div className="repon">
          <div className="repo-logo">
            <img src={Logo} alt="logo" />
          </div>
            <div className="dernier">
            <h1>About</h1>
            <p>Team</p>
            <p>How Educat works</p>
          </div>
          <form className='send-info'>
            <input placeholder='Email address'/>
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default Footer