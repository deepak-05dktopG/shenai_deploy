import React from "react";
import "./Careers.css";
import Footer from "./Footer";
//import images
import teamwork from "/src/imges/teamwork.png";
import securedfuture from "/src/imges/securedfuture.png";
import learning from "/src/imges/learningoppr.png";
import upgrade from "/src/imges/upgradesjills.png";
import mail from "/src/imges/mail.png";
import call from "/src/imges/call.png";

function Careers() {
  return (
    <>
      <div className="bg-white">
        <div className="benefits">
          <div className="title1">
            BENEFITS <br />
            <h2>Why you Should Join Our Awesome Team</h2>
          </div>
          <div className="contents">
            <div className="uses">
              <div>
                <img src={teamwork} alt="#" />
              </div>
              <div className="heading">Team work</div>
              <div className="text">
                Teamwork drives out startup's success, combining our strengths
                to innovate and achihve shared goals.
              </div>
            </div>
            <div className="uses">
              <div>
                <img src={securedfuture} alt="#" />
              </div>
              <div className="heading">Secured Future</div>
              <div className="text">
                Innovative, stay financially diciplined, product IP, build a
                strong team, and adapt to market changes.
              </div>
            </div>
            <div className="uses">
              <div>
                <img src={learning} alt="#" />
              </div>
              <div className="heading">Learning Opportunity</div>
              <div className="text">
                Embrace challenges, encourage continous learning, faster
                creativity and leverage every experience to grow.
              </div>
            </div>
            <div className="uses">
              <div>
                <img src={upgrade} alt="#" />
              </div>
              <div className="heading">Upgrate Skills</div>
              <div className="text">
                Invest in skills, embrace tech, stay competitive.
              </div>
            </div>
          </div>
        </div>

        <div className="secondcontent container">
          <h2>Send your resume to</h2>
          <div className="email ">
            <a href="mailto:thamaraistartupindia@gmail.com" className="fw-bold">
              <img src={mail} alt="#" />
              thamaraistartupindia@gmail.com
            </a>
          </div>

          <h5>For further details contact</h5>
          <div className="mobile">
            <a
              href="tel:+91 9384155432"
              className="fw-bold"
            >
              <img src={call} alt="#" />
              +91 9384155432
            </a>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Careers;
