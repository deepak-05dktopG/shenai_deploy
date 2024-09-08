import React from "react";
import "./Team.css";
import Footer from "./Footer";

//image import
import senthamarai from "/src/imges/senthamarai.png"
import sandeep from "/src/imges/sandeep.png"
import sudhakar from "/src/imges/sudhakar.png"
import sreenithin from "/src/imges/sreenithin.png"
import ritik from "/src/imges/ritik.png"


function Team() {
  return (
    <div>
      <div className="team">
        <div data-aos="fade-down" className="text-center teamheading">\Team\</div>
        <div className="founder">
          <h1 data-aos="fade-right" >Our CEO & Founder</h1>
          <div data-aos="zoom-in-up" className="teamimg text-center">
            <img src={senthamarai} alt="#" />
          </div>
          <div data-aos="fade-left" className="names">Mrs.Senthamarai.M</div>
          <div data-aos="fade-left" data-aos-delay="300" className="role">FOUNDER & CEO</div>
        </div>

        <div className="directers">
          <h1 data-aos="fade-right"  className="text-center">Our Directors</h1>
          <div className=" directorsdetail">
            <div className="text-center">
              <div data-aos="zoom-in-up"  className="teamimg">
                <img src={sandeep} alt="#" />
              </div>
              <div data-aos="fade-left" className="names">Mr.Sandeep.S.D</div>
              <div data-aos="fade-left" data-aos-delay="300" className="role">DIRECTOR - PLANNING</div>
            </div>
            <div className="text-center">
              <div data-aos="zoom-in-up"  className="teamimg">
                <img src={ritik} alt="#" />
              </div>
              <div data-aos="fade-left" className="names">Mr.Rithik.P</div>
              <div data-aos="fade-left" data-aos-delay="300" className="role">DIRECTOR - DESIGN</div>
            </div>
            <div className="text-center">
              <div data-aos="zoom-in-up"  className="teamimg">
                <img src={sudhakar} alt="#" />
              </div>
              <div data-aos="fade-left" className="names">Mr.Sudhaker.D</div>
              <div data-aos="fade-left" data-aos-delay="300" className="role">DIRECTOR - IMPLEMENTATION</div>
            </div>
            <div className="text-center">
              <div data-aos="zoom-in-up"  className="teamimg">
                <img src={sreenithin} alt="#" />
              </div>
              <div data-aos="fade-left" className="names">Mr.ShreeNithin.P</div>
              <div data-aos="fade-left" data-aos-delay="300" className="role">DIRECTOR - MARKETING</div>
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
