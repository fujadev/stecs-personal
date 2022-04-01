import React, { useState } from 'react'
import { stecsItems } from '../../../config/utility';
import StecsImage from '../../../assets/img/stecs-demo-image.png';
import StecsInsightImage from '../../../assets/img/stecs-insight-img.png';
import ChartView from '../../../components/ChartView';
import ContactForm from '../../../components/ContactForm';
import Header from '../../../components/Header';
import FAQ from '../../../components/FAQ';
import StecsCards from '../../../components/StecsCards';
import Footer from '../../../components/Footer';

const Home = () => {

  const [completed, setCompleted] = useState(false);
  const [counter, setCounter] = useState(2500);

  /*  @Func handleCompleted  
        set completed to true;
  */
  const handleCompleted = () => {
    setCompleted(true)
    setCounter(counter + 1);
  }

  return (
    <>
      <Header />
      <main>
        <section className='section-view about' id='about-us'>
          <div className='section-title'>
            <h3>About Stecs</h3>
          </div>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-7'>
                <div className='section-info-wrapper'>
                  <div className='section-info-inner-wrapper'>
                    <h4>The Bank for an ethical lifestyle</h4>
                    <p>Ever been lost as to what you spent money on? Such days are over with Stecs. You get insights on how you spend your earnings. Compare and track your spending periodically to meet your financial goals.</p>
                    <div className='btn-set center'>
                      <button className='btn btn-primary'>Join the waiting list</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='wrap-stecs-item animate__animated animate__slideInRight'>
                  <ul>
                    {
                      stecsItems.map((stItems, i) => (
                        <li key={i} data-aos="zoom-in-left"
                          data-aos-easing="linear">
                          <div className='icon-wrapper'><span className="-icon"><i className={stItems.icon}></i></span></div>
                          <div className='icon-info'>
                            <h6>{stItems.title}</h6>
                            <p>{stItems.desc}</p>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-view insight'>
          <div className='container'>
            <div className='row align-items-center reversed'>
              <div className='col-md-7'>
                <div className='infor-content' data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">
                  <h4>Insights on Your Spendings</h4>
                  <p>Ever been lost as to what you spent money on? Such days are over with Stecs. You get insights on how you spend your earnings. Compare and track your spending periodically to meet your financial goals.</p>
                </div>
              </div>
              <div className='col-md-4' data-aos="fade-fade-up-left">
                <div className='image-cap'>
                  <img src={StecsInsightImage} alt='Stecs Insights on Your Spendings' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-view savings'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-4'>
                <div className='image-cap'>
                  <img src={StecsImage} alt='Stecs Saving and Investing' />
                </div>
              </div>
              <div className='col-md-8 animate__animated animate__slideInRight'>
                <div className='infor-content r' data-aos="zoom-in-up">
                  <h4>Saving and Investing just got easier and better </h4>
                  <p>With our unique saving and investing vault system where you put your funds into a vault depending on your goal and when you need the funds, we can help you plan your finances towards achieving your short term, mid-term and long term goals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-view pad'>
          <div className='container'>
            <div className='row align-items-center reversed has-dot'>
              <div className='col-md-8'>
                <div className='infor-content'>
                  <h4>Stecs Community Savings (Peers)</h4>
                  <p>Get the opportunity to save with your family, friends and associates towards a particular need. All Stecs users get an end-to-end automatic update on their collective savings. </p>
                </div>
              </div>
              <div className='col-md-4 animate__animated animate__slideInRight'>
                <div className='image-cap'>
                  <img src={StecsImage} alt='Stecs community saving' />
                </div>
              </div>
              <div className='col-md-12 sm-hide'>
                <div className='btn-set center'>
                  <button className='btn btn-primary'>Join the waiting list</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <StecsCards />
        <section className='faq' id="faq">
          <FAQ />
        </section>
        <section>
          <div className='container'>
            <div className='section-title'
              data-aos="fade-up"
              data-aos-easing="linear">
              <h3>Join the  Stecs Community</h3>
              <p>Get early access to create your account first</p>
            </div>
            <div className={`row ${completed ? 'completed' : ''}`}>
              <div className={`col-md-${completed ? '12' : '4'}`}>
                <ChartView counter={counter} />
                <div className={`success-info-wrapper ${completed ? '' : 'completed-off'}`} >
                  <h2>You just joined the early access Geng! It’s time to spread the word!</h2>
                  <p>Tell a friend about Stecs</p>
                  <div className='copy-code'>
                    https://stecs.ng
                    <button className='btn btn-primary'>Copy</button>
                  </div>
                </div>
              </div>
              <div className={`col-md-8 ${completed ? 'completed-off' : ''}`} >
                <div className={`animate__animated ${completed ? 'animate__fadeOutDown' : 'animate__fadeInRight'}`}>
                  <ContactForm handleCompleted={handleCompleted} />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home;
