import React,{useEffect} from "react";
import "./Careers.css";
import Footer from "./Footer";
import 'aos/dist/aos.css';
import AOS from "aos";
//import images
import teamwork from "/src/imges/teamwork.png";
import securedfuture from "/src/imges/securedfuture.png";
import learning from "/src/imges/learningoppr.png";
import upgrade from "/src/imges/upgradesjills.png";
import mail from "/src/imges/mail.png";
import call from "/src/imges/call.png";

function Careers() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all animations
      offset: 0,    // Global offset for all animations
      anchorPlacement: 'bottom-bottom', // Global anchor placement for all animations
    });  }, []);
  useEffect(() => {
    // Select all elements with data-aos attribute
    const aosElements = document.querySelectorAll('[data-aos]');
    
    // Loop through and add a class to the parent
    aosElements.forEach((element) => {
      const parent = element.parentElement;
      if (parent) {
        parent.classList.add('delete_extra_space');
      }
    });
  }, []); 
  return (
    <>
      <div className="bg-white">
        <div className="benefits">
          <div data-aos="fade-right"  className="title1">
            BENEFITS <br />
            <h2>Why you Should Join Our Awesome Team</h2>
          </div>
          <div className="contents pb-lg-5">
            <div data-aos="zoom-in" className="uses">
              <div data-aos="flip-left">
                <img src={teamwork} alt="#" />
              </div>
              <div  data-aos="fade-right" className="heading">Team work</div>
              <div  data-aos="fade-right" className="text">
                Teamwork drives out startup's success, combining our strengths
                to innovate and achihve shared goals.
              </div>
            </div>
            <div data-aos="zoom-in" className="uses">
              <div  data-aos="flip-left">
                <img src={securedfuture} alt="#" />
              </div>
              <div  data-aos="fade-right" className="heading">Secured Future</div>
              <div  data-aos="fade-right" className="text">
                Innovative, stay financially diciplined, product IP, build a
                strong team, and adapt to market changes.
              </div>
            </div>
            <div data-aos="zoom-in" className="uses">
              <div  data-aos="flip-left">
                <img src={learning} alt="#" />
              </div>
              <div  data-aos="fade-right" className="heading">Learning Opportunity</div>
              <div  data-aos="fade-right" className="text">
                Embrace challenges, encourage continous learning, faster
                creativity and leverage every experience to grow.
              </div>
            </div>
            <div data-aos="zoom-in" className="uses">
              <div  data-aos="flip-left">
                <img src={upgrade} alt="#" />
              </div>
              <div  data-aos="fade-right" className="heading">Upgrate Skills</div>
              <div  data-aos="fade-right" className="text">
                Invest in skills, embrace tech, stay competitive.
              </div>
            </div>
          </div>
        </div>

        <div className="secondcontent container">
          <h2  data-aos="fade-right">Send your resume to</h2>
          <div data-aos="zoom-in-right" className="email ">
            <a href="mailto:thamaraistartupindia@gmail.com" className="fw-bold">
              <img src={mail} alt="#" />
              thamaraistartupindia@gmail.com
            </a>
          </div>

          <h5  data-aos="fade-right">For further details contact</h5>
          <div  data-aos="zoom-in-right" className="mobile">
            <a
              href="tel:+91 9384155432"
              className="fw-bold"
            >
              <img src={call} alt="#" />
              +91 9384155432
            </a>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Careers;
