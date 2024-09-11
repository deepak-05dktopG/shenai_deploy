import React, { useEffect } from "react";
import "./About.css";
import Footer from "./Footer";
import Team from "./Team";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";
//image import
//image import
import senthamarai from "/src/imges/senthamarai.png";
import sandeep from "/src/imges/sandeep.png";
import sudhakar from "/src/imges/sudhakar.png";
import sreenithin from "/src/imges/sreenithin.png";
import ritik from "/src/imges/ritik.png";
import aboutimg from "/src/imges/about img.png";
import customercare from "/src/imges/about customercare.png";

function About() {
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
    <>
      <div className="body1">
        <div className="insidenav bg-dark d-flex align-items-center justify-content-center flex-column text-center text-white">
          <h1>About</h1>
          <div className="afterhead d-flex justify-content-center">
          <Link to={"/"}> <div className="tohome ">Home</div> </Link> 
            <span className="gap">/</span>
            <div className="stay">About</div>
          </div>
        </div>
        <div className="aboutus">
          <div data-aos="zoom-in-right" className="image1">
            <img src={aboutimg} alt="#" />
          </div>
          <div className="p-3">
            <p data-aos="fade-left" className="aboutUs">
              \About us\
            </p>
            <h1 data-aos="fade-up-left" className="aboutUsContent">
              One of the Fastest way to Buisness Growth
            </h1>
            <p data-aos="fade-up-left" data-aos-delay="300" className="content">
              SHENai private software solution is an AI and Software company we
              embark the power of AI to make solutions for the problems of AI to
              make solution for the problems covering the domains of AI, ML, DL
              data science for various industries we wish to make the concept
              ideas of innovation into existence.
            </p>
            <div
              data-aos="fade-left"
              className="cc d-flex gap-4 mt-5 align-items-center bg-white p-3 rounded"
            >
              <div className="">
                <img src={customercare} alt="#" />
              </div>
              <h4 className="gipa">
                Get Instant Professsional Advice
                <h6 className="subgipa pt-3">Ready to Help:</h6>
              </h4>
            </div>
          </div>
        </div>

        <div className="team1">
        <div className="team">
        <div data-aos="fade-down" className="text-center teamheading">
          \Team\
        </div>
        <div className="founder overflow-hidden">
          <h1 data-aos="fade-right">Our CEO & Founder</h1>
          <div data-aos="zoom-in-up" className="teamimg text-center">
            <img src={senthamarai} alt="#" />
          </div>
          <div data-aos="fade-left" className="names">
            Mrs.Senthamarai.M
          </div>
          <div data-aos="fade-left" data-aos-delay="300" className="role">
            FOUNDER & CEO
          </div>
        </div>

        <div className="directers">
          <h1 data-aos="fade-right" className="text-center">
            Our Directors
          </h1>
          <div className=" directorsdetail ">
            <div className="text-center overflow-hidden">
              <div data-aos="zoom-in-up" className="teamimg">
                <img src={sandeep} alt="#" />
              </div>
              <div data-aos="fade-left" className="names">
                Mr.Sandeep.S.D
              </div>
              <div data-aos="fade-left" data-aos-delay="300" className="role">
                DIRECTOR - PLANNING
              </div>
            </div>
            <div className="text-center overflow-hidden">
              <div data-aos="zoom-in-up" className="teamimg">
                <img src={ritik} alt="#" />
              </div>
              <div data-aos="fade-left" className="names">
                Mr.Rithik.P
              </div>
              <div data-aos="fade-left" data-aos-delay="300" className="role">
                DIRECTOR - DESIGN
              </div>
            </div>
            <div className="text-center overflow-hidden">
              <div data-aos="zoom-in-up" className="teamimg">
                <img src={sudhakar} alt="#" />
              </div>
              <div data-aos="fade-left" className="names">
                Mr.Sudhaker.D
              </div>
              <div data-aos="fade-left" data-aos-delay="300" className="role">
                DIRECTOR - IMPLEMENTATION
              </div>
            </div>
            <div className="text-center overflow-hidden">
              <div data-aos="zoom-in-up" className="teamimg">
                <img src={sreenithin} alt="#" />
              </div>
              <div data-aos="fade-left" className="names">
                Mr.ShreeNithin.P
              </div>
              <div data-aos="fade-left" data-aos-delay="300" className="role">
                DIRECTOR - MARKETING
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
        </div>
      </div>
    </>
  );
}

export default About;
