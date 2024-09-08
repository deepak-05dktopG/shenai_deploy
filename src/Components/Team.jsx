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
        <div className="text-center teamheading">\Team\</div>
        <div className="founder">
          <h1>Our CEO & Founder</h1>
          <div className="teamimg text-center">
            <img src={senthamarai} alt="#" />
          </div>
          <div className="names">Mrs.Senthamarai.M</div>
          <div className="role">FOUNDER & CEO</div>
        </div>

        <div className="directers">
          <h1 className="text-center">Our Directors</h1>
          <div className=" directorsdetail">
            <div className="text-center">
              <div className="teamimg">
                <img src={sandeep} alt="#" />
              </div>
              <div className="names">Mr.Sandeep.S.D</div>
              <div className="role">DIRECTOR - PLANNING</div>
            </div>
            <div className="text-center">
              <div className="teamimg">
                <img src={ritik} alt="#" />
              </div>
              <div className="names">Mr.Rithik.P</div>
              <div className="role">DIRECTOR - DESIGN</div>
            </div>
            <div className="text-center">
              <div className="teamimg">
                <img src={sudhakar} alt="#" />
              </div>
              <div className="names">Mr.Sudhaker.D</div>
              <div className="role">DIRECTOR - IMPLEMENTATION</div>
            </div>
            <div className="text-center">
              <div className="teamimg">
                <img src={sreenithin} alt="#" />
              </div>
              <div className="names">Mr.ShreeNithin.P</div>
              <div className="role">DIRECTOR - MARKETING</div>
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
