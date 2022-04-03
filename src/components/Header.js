import React from 'react'
import Nav from './Nav'
import BannerImage from '../assets/img/stecs-banner-image.png';
import BannerElipseImage from '../assets/img/banner-ellipse.svg';

const Header = () => {
  return (
    <header className='landing-banner'>
      <Nav />
      <div className='stecs-banner'>
        <div className='container'>
          <div className='row reversed'>
            <div className='col-md-6'>
              <div className='banner-info'>
                <p>Built by millenials, For Millenials</p>
                <h1 className='animate__animated animate__slideInLeft'>Nigeria’s first fully <br />
                  Digital Non-Interest Bank</h1>
                <ul>
                  <li><span className='-icon'><i className='checker-icon'></i></span> No interest and hidden fees</li>
                  <li><span className='-icon'><i className='checker-icon'></i></span> Get your business funded</li>
                  <li><span className='-icon'><i className='checker-icon'></i></span> Send and receive money. </li>
                  <li><span className='-icon'><i className='checker-icon'></i></span> Save and Invest</li>
                </ul>
                <div className='btn-set'>
                <a href='/#join'><button className='btn btn-primary'>Get Early Access</button></a>
                </div>
              </div>
            </div>
            <div className='col-md-6 custom-m-view'>
              <div className='custom-banner-wrapper'>
                <img className='ellipse' src={BannerElipseImage} alt='Stecs banner' />
                <img className='banner-img' src={BannerImage} alt='Stecs banner' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header