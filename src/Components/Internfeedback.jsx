import React from "react";
import "./Internfeedback.css";

//import images
import image6 from "/src/imges/deepak.png";
import image7 from "/src/imges/prawin.jpg";
import image8 from "/src/imges/nandhini.jpg";
import image9 from "/src/imges/priya.jpg";
import image10 from "/src/imges/tharika.jpg";

function Internfeedback() {
  return (
    <div>
      <div id="carouselExampleRide " class="carousel slide bg-dark " data-bs-ride="true">
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div className="internfeedback ">
              <div className="topheader">
                <div>
                  <img className="internimg" src={image6} alt="" />
                </div>
              </div>
              <div className="internname text-center">
                <h2>Deepakkumar M</h2>
              </div>
              <br />
              <div className="internfeedbacks text-center px-1">
                I had a great time here.Also I had upgraded my skills with the
                new ideas which I learned from here.I prefer shenAI as one of
                the best internship providing company.{" "}
              </div>
            </div>{" "}
          </div>
          <div class="carousel-item">
            <div className="internfeedback ">
              <div className="topheader">
                <div>
                  <img className="internimg" src={image6} alt="" />
                </div>
              </div>
              <div className="internname text-center">
                <h2>Deepakkumar M</h2>
              </div>
              <br />
              <div className="internfeedbacks text-center px-1">
                I had a great time here.Also I had upgraded my skills with the
                new ideas which I learned from here.I prefer shenAI as one of
                the best internship providing company.{" "}
              </div>
            </div>{" "}
          </div>
          <div class="carousel-item">
            <div className="internfeedback ">
              <div className="topheader">
                <div>
                  <img className="internimg" src={image6} alt="" />
                </div>
              </div>
              <div className="internname text-center">
                <h2>Deepakkumar M</h2>
              </div>
              <br />
              <div className="internfeedbacks text-center px-1">
                I had a great time here.Also I had upgraded my skills with the
                new ideas which I learned from here.I prefer shenAI as one of
                the best internship providing company.{" "}
              </div>
            </div>{" "}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>















    </div>
  );
}

export default Internfeedback;
