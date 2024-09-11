import React, { useEffect } from "react";
import "./Service.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

//import images
import ourvision from "/src/imges/ourvision.png";
import ourgoal from "/src/imges/ourgoal.png";
import img1 from "/src/imges/signtitleimg.png";
import img2 from "/src/imges/signtitleimg1.png";
import dsprojects from "/src/imges/dsprojects.png";
import signlangrec from "/src/imges/signlangrecon.png";

function Service() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all animations
      offset: 0, // Global offset for all animations
      anchorPlacement: "bottom-bottom", // Global anchor placement for all animations
    });
  }, []);
  useEffect(() => {
    // Select all elements with data-aos attribute
    const aosElements = document.querySelectorAll("[data-aos]");

    // Loop through and add a class to the parent
    aosElements.forEach((element) => {
      const parent = element.parentElement;
      if (parent) {
        parent.classList.add("delete_extra_space");
      }
    });
  }, []);
  return (
    <div className="body1">
      <div className="insidenav bg-dark d-flex align-items-center justify-content-center flex-column text-center text-white">
      <h1>Services</h1>   
        <div className="afterhead d-flex justify-content-center">
        <Link to={'/'}> <div className="tohome">Home</div> </Link> 
          <span className="gap">/</span>
          <div className="stay">Services</div>
        </div>
      </div>
      <div className="wwd">
        <div className="empty"></div>
        <div className="main container">
          <div data-aos="fade-down" className="titlewwd">
            \What We Do\
          </div>
          <div data-aos="fade-left" className="headingwwd container">
            We Develope Product That People Love to Use.
          </div>
          <div data-aos="zoom-in-left" className="contentwwd ">
            At SHENai, we develop products that people love to use. Our focus is
            on creating innovative and intuitive solutions that not only meet
            but exceed user expectations. By leveraging cutting edge AI
            technologies, we design products that enhance user experiences,
            streamline processes, and deliver exceptional value. Our Commitment
            to understanding user needs and preferences drives us to build
            solutions that are not only functional but also engaging and
            enjoyable, ensuring our products stand out in a crowded marketplace.
          </div>
          <div className="visionandgoal">
            <div data-aos="fade-left" className="vision">
              <div className="image">
                <img src={ourvision} alt="#" />
              </div>
              <div className="text">
                <p className="heading">Our Vision</p>{" "}
                <p className="content1">
                  Innovative solutions, transformative impact.
                </p>
              </div>
            </div>
            <div data-aos="fade-right" className="goal">
              <div className="image">
                <img src={ourgoal} alt="#" />
              </div>
              <div className="text">
                <p className="heading">Our Goal</p>{" "}
                <p className="content1">
                  Empower innovation. enhance experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <div data-aos="zoom-in" className="title2 text-center">
          \Services\
        </div>
        <h2 data-aos="fade-left" className="heading text-center">
          Our Expertice
        </h2>

        <div className="bodycontent">
          <div data-aos="zoom-in" className="project0">
            <div data-aos="flip-right">
              <img src={img1} alt="#" />
            </div>
            <p data-aos="fade-left" className="title0">
              Ai based Web browser
            </p>
            <div className="d-flex gap-2">
              <p data-aos="fade-left" className="dash1"></p>
              <p data-aos="fade-left" className="dash2"></p>
            </div>
            <div data-aos="zoom-in-left" className="aboutproject">
              II - bades web browsing leverages artificial intelligence to
              deliver more accurate and personalized search results.
            </div>
          </div>

          <div data-aos="zoom-in" className="project0">
            <div data-aos="flip-right">
              <img src={dsprojects} alt="#" />
            </div>
            <p data-aos="fade-left" className="title0">
              Data science projects
            </p>
            <div className="d-flex gap-2">
              <p data-aos="fade-left" className="dash1"></p>
              <p data-aos="fade-left" className="dash2"></p>
            </div>
            <div data-aos="zoom-in-left" className="aboutproject">
              Data science projects include cutomer churn prediction,
              recommendation systems, sentiment analysis, fraud detection, image
              classification, demand forecasting and health diagnotics.
            </div>
          </div>

          <div data-aos="zoom-in" className="project0">
            <div data-aos="flip-right">
              <img src={img2} alt="#" />
            </div>
            <p data-aos="fade-left" className="title0">
              Chatbot
            </p>
            <div className="d-flex gap-2">
              <p data-aos="fade-left" className="dash1"></p>
              <p data-aos="fade-left" className="dash2"></p>
            </div>
            <div data-aos="zoom-in-left" className="aboutproject">
              At SHENai, we develop advanced chatbots tailored to meet the
              specific needs of our clients. Our AI-powered chatbots leverage
              natural language processing(NlL) and machine learning to provide
              seamless and intuitive interactions with users. These chatbots can
              handle a wide range of tasks, form customer service inquiries and
              booking appoinments to processing transactions and offering
              persionalized recommendations.
            </div>
          </div>

          <div data-aos="zoom-in" className="project0">
            <div data-aos="flip-right">
              <img src={signlangrec} alt="#" />
            </div>
            <Link to="signlang">
              <p data-aos="fade-left" className="title0">
                Sign language recognition
              </p>
              <div className="d-flex gap-2">
                <p data-aos="fade-left" className="dash1"></p>
                <p data-aos="fade-left" className="dash2"></p>
              </div>
              <div data-aos="zoom-in-left" className="aboutproject">
                Sign language is a visual-gestural form of communication used by
                deaf and hard-of-hearing individuals. by SHENai
              </div>
            </Link>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Service;
