import React from "react";
import "./Servingrobot.css";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
//import img
import robot from "/src/imges/robot.png";
import robot1 from "/src/imges/robot1.png";
import robot2 from "/src/imges/robot2.png";
import robot3 from "/src/imges/robot3.png";

function Servingrobot() {
  return (
    <div>
      <div className="bodysr">
        <div className="headingtitle">
          <div className="servingrobot">
            <div className="serving">SERVING</div>
            <div className="robot">ROBOT</div>
          </div>
          <div className="whitebox">
            <img className="whitebox" src={robot} alt="#" />
          </div>
        </div>
        <div className="contentsofsr">
          <div className="titles container">Abstract</div>
          <div className="contentss container">
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
          <div className="titles container">Our Vision</div>
          <div className="contentss container">
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
          <div className="titles container">Why Choose Our Robots?</div>
          <div className="contentss container">
            <li>
              Efficient Service: Streamline your operations with robots that
              deliver orders accurately and quickly.
            </li>
            <li>
              Cost-Effective: Reduce operational costs while maintaining
              top-notch service quality.
            </li>
            <li>
              Customizable Design: Personalize our robots to match your brand
              and specific service requirements.
            </li>
            <li>
              User-Friendly: Seamless integration and simple operation with
              minimal training.
            </li>
          </div>
        </div>
        <br />
        <br />
        <div className="contentsofsr">
          <div className="titles container">Application of the Project</div>
          <div className="contentss container d-flex flex-wrap p-5 gap-5">
            <div className="d-flex align-items-center gap-2">
              <div className="h1">01</div>
              <div className="bg-primary p-2 px-4">Hospital</div>
            </div>
             <div className="d-flex align-items-center gap-2">
              <div className="h1">02</div>
              <div className="bg-primary p-2 px-4">Schools</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="h1">03</div>
              <div className="bg-primary p-2 px-4">Colleges</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="h1">04</div>
              <div className="bg-primary p-2 px-4">IT Industries</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="h1">05</div>
              <div className="bg-primary p-2 px-4">Hotels</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="h1">06</div>
              <div className="bg-primary p-2 px-4">Restaurants</div>
            </div>
          </div>
        </div>
        <div className="contentsofsr">
          <div className="titles container">Product Features</div>
          <div className="contentss container">
            <ol className="d-flex flex-column">
              <li>Precision & Speed</li>
              <li>Cost Efficiency</li>
              <li>Customization</li>
              <li>Ease of Use</li>
            </ol>
          </div>
          <div className="robotimages d-flex flex-wrap justify-content-around">
            <img src={robot1} alt="#" />
            <img src={robot2} alt="#" />
            <img src={robot3} alt="#" />
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
