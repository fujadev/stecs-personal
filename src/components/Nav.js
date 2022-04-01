import React from 'react';
import { Link } from 'react-router-dom';
import StecsLogo from '../assets/img/stecs_logo.png'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light animate__animated" id='stecsNav'>
      <div className='container'>
        <Link className="navbar-brand" to="/">
          <img src={StecsLogo}  alt='stecs-logo'/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#about-us">About Stecs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#faq">FAQs</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;