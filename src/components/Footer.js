import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div className="footer-content">
            <div className='social-media'>
              <p>Follow us:</p>
              <ul>
                <li>
                  <Link to='/'><span className='-icon'><i className='facebook-icon'></i></span></Link>
                </li>
                <li>  
                  <Link to='/'><span className='-icon'><i className='twitter-icon'></i></span></Link>
                </li>
                <li>
                  <Link to='/'><span className='-icon'><i className='linkedin-icon'></i></span></Link>
                </li>
                <li>
                  <Link to='/'><span className='-icon'><i className='instagram-icon'></i></span></Link>
                </li>
              </ul>
            </div>
            <div>
              <p>We are currently working on fulfilling all regulatory and Shariah compliance requirements before we can start offering our services publicly. Any information currently presented on this website is for information only and may be subject to change.

                Stecs Financial Technologies  Ltd is registered with CAC with RC Number 1873053.</p>

              <p>Registered office: No 12F Tola Adewumi Street Maryland Estate, Maryland Lagos Nigeria</p>
              <p className='copy-right'>Intellectual Property Protection - <Link to="/">Privacy Policy - Sitemap - Terms of Use - Legal </Link>  ©️2021-2022 stecs.com. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;