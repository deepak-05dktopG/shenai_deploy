import React,{useEffect} from "react";
import "./Servingrobot.css";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import 'aos/dist/aos.css';
import AOS from "aos";
//import img
import robot from "/src/imges/robot.png";
import robot1 from "/src/imges/robot1.png";
import robot2 from "/src/imges/robot2.png";
import robot3 from "/src/imges/robot3.png";
import robot4 from "/src/imges/robot4.jpeg";
import robotvideo from "/src/imges/robotvideo.mp4"

function Servingrobot() {
  
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
    <div>
      <div className="bodysr">
        <div className="headingtitle">
          <div className="servingrobot">
            <div data-aos="fade-right" className="serving">SERVING</div>
            <div data-aos="fade-right" data-aos-delay="200" className="robot">ROBOT</div>
          </div>
          <div data-aos="zoom-in" className="whitebox">
            <img className="whitebox" src={robot} alt="Robot" />
          </div>
        </div>
        <div className="contentsofsr">
          <div data-aos="fade-right" className="titles container">Abstract</div>
          <div data-aos="fade-left" className="contentss container">
            This project focuses on the design, development, and implementation
            of a serving robot aimed at enhancing efficiency and user experience
            in hospitality settings. <br />
            <br /> The robot is equipped with manual navigation,
            human-interaction capabilities,allowing it to deliver food and
            beverages accurately within a designated environment. The project
            incorporates advanced sensors
          </div>
        </div>
        <br />
        <br />
        <div className="contentsofsr">
          <div data-aos="fade-right" className="titles container">Our Vision</div>
          <div data-aos="fade-left" className="contentss container">
            Our mission is to revolutionize service delivery by introducing
            automation that enhances efficiency, accuracy, and customer
            satisfaction. <br />
            <br />
            We believe that robots are not just tools—they're the future of
            exceptional service.
          </div>
        </div>
        <br />
        <br />
        <div className="contentsofsr">
          <div data-aos="fade-right" className="titles container">Why Choose Our Robots?</div>
          <div data-aos="fade-left" className="contentss container">
            <li data-aos="fade-left">
              Efficient Service: Streamline your operations with robots that
              deliver orders accurately and quickly.
            </li>
            <li data-aos="fade-left">
              Cost-Effective: Reduce operational costs while maintaining
              top-notch service quality.
            </li >
            <li data-aos="fade-left">
              Customizable Design: Personalize our robots to match your brand
              and specific service requirements.
            </li>
            <li data-aos="fade-left">
              User-Friendly: Seamless integration and simple operation with
              minimal training.
            </li>
          </div>
        </div>
        <br />
        <br />
        <div className="contentsofsr">
          <div data-aos="fade-right" className="titles container">Application of the Project</div>
          <div className="contentss container d-flex flex-wrap p-5 gap-5">
            <div data-aos="fade-left" data-aos-delay="0" className="d-flex align-items-center gap-2">
              <div className="h1">01</div>
              <div className="bg-primary p-2 px-4">Hospital</div>
            </div>
             <div data-aos="fade-left" data-aos-delay="150" className="d-flex align-items-center gap-2">
              <div className="h1">02</div>
              <div className="bg-primary p-2 px-4">Schools</div>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className="d-flex align-items-center gap-2">
              <div className="h1">03</div>
              <div className="bg-primary p-2 px-4">Colleges</div>
            </div>
            <div data-aos="fade-left" data-aos-delay="450" className="d-flex align-items-center gap-2">
              <div className="h1">04</div>
              <div className="bg-primary p-2 px-4">IT Industries</div>
            </div>
            <div data-aos="fade-left" data-aos-delay="600" className="d-flex align-items-center gap-2">
              <div className="h1">05</div>
              <div className="bg-primary p-2 px-4">Hotels</div>
            </div>
            <div data-aos="fade-left" data-aos-delay="750" className="d-flex align-items-center gap-2">
              <div className="h1">06</div>
              <div className="bg-primary p-2 px-4">Restaurants</div>
            </div>
          </div>
        </div>
        <div className="contentsofsr">
          <div data-aos="fade-right" className="titles container">Product Features</div>
          <div className="contentss container">
            <ol className="d-flex flex-column">
              <li data-aos="fade-left" data-aos-delay="0">Precision & Speed</li>
              <li data-aos="fade-left" data-aos-delay="150">Cost Efficiency</li>
              <li data-aos="fade-left" data-aos-delay="300">Customization</li>
              <li data-aos="fade-left" data-aos-delay="450">Ease of Use</li>
            </ol>
          </div>
          <div className="robotimages d-flex flex-wrap  justify-content-around">
            <img className="border bg-white rounded-5" data-aos="zoom-in" src={robot1} alt="Serving Robot" />
            <img className="border bg-white rounded-5" data-aos="zoom-in" src={robot3} alt="Serving Robot" />
            <img className="border bg-white rounded-5" data-aos="zoom-in" width={250} src={robot4} alt="Serving Robot" />
            <video  autoPlay loop muted  className="border w-75 rounded-4 mt-3" src={robotvideo}></video>

          </div>
        </div>
      </div>
      <div className="bg-white">
        <AboutUs /> <Footer />
      </div>
    </div>
  );
}

export default Servingrobot;
