import React from 'react'
import { specs } from '../config/utility'

const StecsCards = () => {
  return (
    <section className="why-section">
      <div className='container'>
        <div className='section-title' data-aos="fade-up"
          data-aos-easing="linear">
          <h3>Why STECS?</h3>
        </div>
        <div className='row animate__animated animate__slideInRight'>
          {
            specs.map((spec, i) => (
              <div className='col-md-4' key={i}>
                <div className='tecs-card' data-aos="zoom-in-left"
                  data-aos-easing="linear">
                  <span className='-icon'>
                    <i className={spec.icon}></i>
                  </span>
                  <h5>{spec.title}</h5>
                  <p>{spec.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default StecsCards