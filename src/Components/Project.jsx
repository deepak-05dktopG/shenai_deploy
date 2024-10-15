import React,{useEffect} from "react";
import './Project.css'
import Footer from "./Footer";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from "aos";

//import images
import img1 from '/src/imges/signtitleimg.png';
import img2 from '/src/imges/signtitleimg1.png';

function Project() {
  
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
    <div className="body1 bg-white">
      <div className="insidenav bg-dark d-flex align-items-center justify-content-center flex-column text-center text-white">
         <h1>Project</h1> 
          <div className="afterhead d-flex justify-content-center">
          <Link to={'/'}>  <div className="tohome">Home</div></Link>
            <span className="gap">/</span>
            <div className="stay">Project</div>
          </div>
        </div>

      <div className="projects container pb-1 gap-3">

        <div data-aos="fade-right"  className="project1">
        <Link to="signlang">
          <div data-aos="zoom-in" >
            <img  src={img1} alt="Computer" />
          </div>
          <p data-aos="fade-left"  className="title0">Sign language recognition</p>
          <div className="d-flex gap-2">
            <p data-aos="fade-left"  className="dash1"></p>
            <p data-aos="zoom-in-left" data-aos-delay="300" className="dash2"></p>
          </div>
          <div data-aos="zoom-in-left"  className="aboutproject">
            Sign language is a visual-gestural form of communication used by
            deaf and hard-of-hearing individuals. by SHENai
          </div></Link>
        </div>
        <div data-aos="fade-left"  className="project2">
        <Link to="servingrobot">
          <div data-aos="zoom-in" >
            <img src={img2} alt="Serving Robot" />
          </div>
          <p data-aos="fade-left"  className="title0">Serving Robot</p>
          <div className="d-flex gap-2">
            <p data-aos="fade-left"  className="dash1"></p>
            <p data-aos="zoom-in-left" data-aos-delay="300"  className="dash2"></p>
          </div>
          <div data-aos="zoom-in-left"   className="aboutproject">
            Introducing SHENai's state-of-the-art serving robot, designed to
            revolutionize the hospitality industry. Equipped with advanced AI,
            it seamlessly delivers food and beverages to tables, ensuring
            precision and efficiency. With its intuitive navigation and
            interactive interface. it enhances the dining experience while
            reducing wait times. Perfect for restaurants, hotels, and events,
            this robot represents the future of service. Trust SHENai to elevate
            your customer service to new heights.
          </div></Link>
        </div>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default Project;
