import React from "react";
import "./About.css";
import Footer from "./Footer";
import Team from "./Team";
//image import
import aboutimg from "/src/imges/about img.png"
import customercare from "/src/imges/about customercare.png"

function About() {
  return (
    <>
      <div className="body1">
        <div className="aboutus">
          <div className="image1">
            <img src={aboutimg} alt="#" />
          </div>
          <div className="p-3">
            <p className="aboutUs">\About us\</p>
            <h1 className="aboutUsContent">
              One of the Fastest way to Buisness Growth
            </h1>
            <p className="content">
              SHENai private software solution is an AI and Software company we
              embark the power of AI to make solutions for the problems of AI to
              make solution for the problems covering the domains of AI, ML, DL
              data science for various industries we wish to make the concept
              ideas of innovation into existence.
            </p>
            <div className="cc d-flex gap-4 mt-5 align-items-center bg-white p-3 rounded">
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
          <Team />
        </div>
      </div>
    </>
  );
}

export default About;
