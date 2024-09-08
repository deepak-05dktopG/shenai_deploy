import React from "react";
import "./Service.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

//import images
import ourvision from "/src/imges/ourvision.png"
import ourgoal from "/src/imges/ourgoal.png"
import img1 from '/src/imges/signtitleimg.png';
import img2 from '/src/imges/signtitleimg1.png';
import dsprojects from "/src/imges/dsprojects.png"
import signlangrec from "/src/imges/signlangrecon.png"

function Service() {
  return (
    <div>
      <div className="wwd">
        <div className="empty"></div>
        <div className="main container">
          <div className="titlewwd">\What We Do\</div>
          <div className="headingwwd container">
            We Develope Product That People Love to Use.
          </div>
          <div className="contentwwd ">
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
            <div className="vision">
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
            <div className="goal">
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
        <div className="title2 text-center">\Services\</div>
        <h2 className="heading text-center">Our Expertice</h2>

        <div className="bodycontent">
          <div className="project0">
            <div>
              <img src={img1} alt="#" />
            </div>
            <p className="title0">Ai based Web browser</p>
            <div className="d-flex gap-2">
              <p className="dash1"></p>
              <p className="dash2"></p>
            </div>
            <div className="aboutproject">
              II - bades web browsing leverages artificial intelligence to
              deliver more accurate and personalized search results.
            </div>
          </div>

          <div className="project0">
            <div>
              <img src={dsprojects} alt="#" />
            </div>
            <p className="title0">Data science projects</p>
            <div className="d-flex gap-2">
              <p className="dash1"></p>
              <p className="dash2"></p>
            </div>
            <div className="aboutproject">
              Data science projects include cutomer churn prediction,
              recommendation systems, sentiment analysis, fraud detection, image
              classification, demand forecasting and health diagnotics.
            </div>
          </div>

          <div className="project0">
            <div>
              <img src={img2} alt="#" />
            </div>
            <p className="title0">Chatbot</p>
            <div className="d-flex gap-2">
              <p className="dash1"></p>
              <p className="dash2"></p>
            </div>
            <div className="aboutproject">
              At SHENai, we develop advanced chatbots tailored to meet the
              specific needs of our clients. Our AI-powered chatbots leverage
              natural language processing(NlL) and machine learning to provide
              seamless and intuitive interactions with users. These chatbots can
              handle a wide range of tasks, form customer service inquiries and
              booking appoinments to processing transactions and offering
              persionalized recommendations.
            </div>
          </div>

          <div className="project0">
            <div>
              <img src={signlangrec} alt="#" />
            </div>
            <Link to="signlang">
              <p className="title0">Sign language recognition</p>
              <div className="d-flex gap-2">
                <p className="dash1"></p>
                <p className="dash2"></p>
              </div>
              <div className="aboutproject">
                Sign language is a visual-gestural form of communication used by
                deaf and hard-of-hearing individuals. by SHENai
              </div>
            </Link>
          </div>
        </div>
        <div >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Service;
