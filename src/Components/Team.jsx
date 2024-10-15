import React, { useEffect } from "react";
import "./Team.css";
import Footer from "./Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

//image import
import senthamarai from "/src/imges/senthamarai.png";
import sandeep from "/src/imges/sandeep.png";
import sudhakar from "/src/imges/sudhakar.png";
import sreenithin from "/src/imges/sreenithin.png";
import ritik from "/src/imges/ritik.png";

function Team() {
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
        <h1>Team</h1>
        <div className="afterhead d-flex justify-content-center">
        <Link to={'/'} ><div className="tohome">Home</div> </Link>  
          <span className="gap">/</span>
          <div className="stay">Team</div>
        </div>
      </div>
      <div className="team">
        <div data-aos="fade-down" className="text-center teamheading">
          \Team\
        </div>
        <div className="founder overflow-hidden">
          <h1 data-aos="fade-right">Our CEO & Founder</h1>
          <div data-aos="zoom-in-up" className="teamimg text-center">
            <img src={senthamarai} alt="Founder"/>
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
                <img src={sandeep} alt="Director" />
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
                <img src={ritik} alt="Director" />
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
                <img src={sudhakar} alt="Director" />
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
                <img src={sreenithin} alt="Director" />
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
  );
}

export default Team;
