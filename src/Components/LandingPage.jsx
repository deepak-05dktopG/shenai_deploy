import React, { useEffect } from "react";
import "./LandingPage.css";
import AboutUS from "./AboutUs";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Internfeedback from "./Internfeedback";

//image import
import image1 from "/src/imges/hadoop.jpg";
import image2 from "/src/imges/matlab.jpg";
import image3 from "/src/imges/tableau.jpg";
import image4 from "/src/imges/tensorflow.jpg";
import image5 from "/src/imges/ythorch.jpg";


import introvideo from "/src/imges/introvideo.mp4";

import wallpaper from "/src/imges/wallpaper.png";

import image11 from "/src/imges/landingpagewallpaper.jpg";

function LandingPage() {
  return (
    <div>
      <div
        style={{
          height: "",
          color: "white",
        }}
      >
        <div className="landingpage"></div>
        <div className="">
          <div className="software-shape">
            <video  autoPlay loop muted type="video/mp4" src={introvideo}></video>
            <p data-aos="fade-down" data-aos-delay="400" class="lets-the">
              <small> let's the </small>
              <br />
              <small> innovation speaks!</small>
            </p>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="body bg-white">
        {/* This is a image scroll*/}
        <div className=" overflow-hidden mt-0 p-0">
          <div className="animate gap-5 ">
            <img src={image1} alt="hadoop" loading="lazy" />
            <img src={image2} alt="matlab" loading="lazy" />
            <img src={image3} alt="tableau" loading="lazy" />
            <img src={image4} alt="tensorflow" loading="lazy" />
            <img src={image5} alt="pytorch" loading="lazy" />
            <img src={image1} alt="hadoop" loading="lazy" />
            <img src={image2} alt="matlab" loading="lazy" />
            <img src={image3} alt="tableau" loading="lazy" />
            <img src={image4} alt="tensorflow" loading="lazy" />
            <img src={image5} alt="pytarch" loading="lazy" />
          </div>
        </div>

        {/* This is About us section*/}

        <div className="bg-white">
          <AboutUS />
        </div>
        {/* This is what we can do section*/}

        <div className="whatwedo">
          <div data-aos="zoom-in-right" className="whatwecando1">
            <p>See what we can</p>
            <p>do for you</p>
          </div>
          <span data-aos="fade-right" className="whatwecando2">
            <Link to="project">
              Projects <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <hr />
            <a href="#">
              Teaching <i class="fa-solid fa-arrow-right"></i>
            </a>
            <hr />
            <Link to="servingrobot">
              Robotic Service <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <hr />
          </span>
        </div>
        <div className="ourprojects">
          <p data-aos="fade-down" className="text-center ">Our Upcoming Project</p>
          <h2 data-aos="fade-right" className=" ms-lg-5 ms-2 mt-5">E-Commerce website:</h2>
          <div data-aos="fade-right" className="mx-5 px-lg-5 px-0">This project focuses on developing a user-friendly e-commerce platform for a software company, aimed at selling digital products such as robots and also  software-based services.The design emphasizes responsiveness for mobile and desktop users, ensuring accessibility and a streamlined purchasing process for customers worldwide.</div><br />
          <h2 data-aos="fade-right" className="ms-lg-5 ms-2">Speech to text:</h2>
          <div data-aos="fade-right" className="mx-5 px-lg-5 px-0 ">This project converts spoken language into written text,enabling efficient documentation and analysis of conversations , lectures and audio recordings.This technology leverages AI and NLP to accurately capture spoken words,facilitating communication, accessibility
          and knowledge sharing.</div>
        
        </div>
        <Internfeedback/>
        <Gallery/>

       
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
