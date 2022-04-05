import React from 'react'

const FAQ = () => {
  return (
    <div className='container'>
      <div className='section-title' data-aos="fade-up"
        data-aos-easing="linear">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='wrap-faq'>
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <button className="accord-btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Is Stecs for Muslims only?
                    <span className='toggle-accordion'></span>
                  </button>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                  No. Our products and services are available to everyone.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <button className="accord-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How is Stecs Regulated?
                    <span className='toggle-accordion'></span>
                  </button>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                  All the necessary steps to ensure this is in process.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <button className="accord-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What makes Stecs different from the conventional banks?
                    <span className='toggle-accordion'></span>
                  </button>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                  Stecs will be operating as a non-interest entity whose structure and processes have to be in line with Islamic principles.                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <button className="accord-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    When is Stecs Launching?
                    <span className='toggle-accordion'></span>
                  </button>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                  <div className="card-body">
                  While it is difficult to give a definite date, a launch before the end of the year is feasible.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='infor-content no-padding'>
            <h4>Still have any questions?</h4>
            <p>If you cannot find answer to your questions in our FAQ, you can always <a className='link-it' href='/'>contact us</a>. and get all your questions answered!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ