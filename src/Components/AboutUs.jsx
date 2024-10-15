import React from 'react'
import './AboutUS.css'
//   image import
import about from '/src/imges/aboutus.png'

function AboutUs() {
  
  return (
    <div>
      
      <div className="container about-us">
            <div data-aos="zoom-out"
    data-aos-offset="0"
    data-aos-delay="200"
    data-aos-duration="5000"
    data-aos-once="false"
    className="about-us-img ">
              <img src={about} alt="Welcome" />
            </div>
            <div className="about-us-content ms-5">
              <h1 class="" data-aos="fade-right"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    
    >About US</h1>
              <div data-aos="fade-right"
    data-aos-offset="0"
    data-aos-delay="80"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    class="shenai-private-software">
                Shenai private software solutions is  ai and software company
                we embark the power of AI to make solutions for the problems of
                AI to make solutions for the problems covering the domains of
                AI,ML,DL data science for various industries we wish to make the
                concept ideas of innovation into existence.
              </div>
            </div>
          </div>
    </div>
  )
}

export default AboutUs
