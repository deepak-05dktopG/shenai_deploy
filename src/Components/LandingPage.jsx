import React, { useEffect } from "react";
import "./LandingPage.css";
import AboutUS from "./AboutUs";
import { Link } from "react-router-dom";
import Footer from "./Footer";

//image import
import image1 from "/src/imges/hadoop.jpg";
import image2 from "/src/imges/matlab.jpg";
import image3 from "/src/imges/tableau.jpg";
import image4 from "/src/imges/tensorflow.jpg";
import image5 from "/src/imges/ythorch.jpg";

import image6 from "/src/imges/deepak.png";
import image7 from "/src/imges/prawin.jpg";
import image8 from "/src/imges/nandhini.jpg";
import image9 from "/src/imges/priya.jpg";
import image10 from "/src/imges/tharika.jpg";

import wallpaper from "/src/imges/wallpaper.png"

import image11 from "/src/imges/landingpagewallpaper.jpg";

function LandingPage() {
  return (
    <div>
      <div
        style={{
          height: "",
          color: "white",
        }}
      >
        <div className="landingpage "></div>

        <div className="">
          <div  className="software-shape">
            <p
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              class="lets-the"
            >
              <small> let's the </small>
              <br />
              <small> innovation speaks!</small>
            </p>
          </div>

          <div
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="new"
          ></div>
        </div>
      </div>

      <div className="body bg-white">
        {/* This is a image scroll*/}
        <div className="">
          <marquee
            data-aos="zoom-in"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            behavior="alternate"
            direction=""
          >
            <div className="animate gap-5">
              <img src={image1} alt="#" />
              <img src={image2} alt="#" />
              <img src={image3} alt="#" />
              <img src={image4} alt="#" />
              <img src={image5} alt="#" />
              <img src={image1} alt="#" />
              <img src={image2} alt="#" />
              <img src={image3} alt="#" />
              <img src={image4} alt="#" />
              <img src={image5} alt="#" />
            </div>
          </marquee>
        </div>

        {/* This is About us section*/}

        <div className="bg-white">
          <AboutUS />
        </div>
        {/* This is what we can do section*/}

        <div
          className="whatwedo"
          data-aos="zoom-in"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="whatwecando1"
          >
            <p>See what we can</p>
            <p>do for you</p>
          </div>
          <span
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay="190"
            data-aos-duration="5000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="whatwecando2"
          >
            <Link to="project">
              Projects <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <hr />
            <a href="#">
              Teaching <i class="fa-solid fa-arrow-right"></i>
            </a>
            <hr />
            <Link to="servingrobot">
              Robotic Service <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <hr />
          </span>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="5000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          className="ourprojects text-center"
        >
          <p>Our</p>
          <p>Upcoming Project</p>
        </div>

        <div className="feedback">
          <p
            data-aos="zoom-in-right"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="5000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="heading"
          >
            FEEDBACK
          </p>
          <div className="students">
            <p className="m-0 p-0 d-flex justify-content-center">
              <button
                className="border-0 bg-white "
                data-bs-toggle="collapse"
                data-bs-target="#collapseWidthExample4"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
              >
                <div className="title ">
                  <div
                    data-aos="flip-right"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="img"
                  >
                    <img src={image6} alt="#" />
                  </div>
                  <div
                    data-aos="fade-up-right"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="name"
                  >
                    Deepakkumar{" "}
                    <b className="arrowforfb m-3">
                      <i class="fa-solid fa-arrow-right"></i>
                    </b>
                  </div>
                </div>
              </button>
            </p>
            <div style={{ height: "" }}>
              <div
                class="collapse collapse-horizontal "
                id="collapseWidthExample4"
              >
                <div class="card deepakcardcmt card-body">
                  <div className="comment">
                    I had a wonderful experience at ShenAI. The internship not
                    only allowed me to upgrade my skills but also exposed me to
                    innovative ideas that have greatly contributed to my
                    professional development. I consider ShenAI to be one of the
                    best companies for providing valuable internship
                    opportunities.
                  </div>
                </div>
              </div>
            </div>

            <p className="m-0 p-0  d-flex justify-content-center">
              <button
                className="border-0 bg-white "
                data-bs-toggle="collapse"
                data-bs-target="#collapseWidthExample3"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
              >
                <div className="title ">
                  <div
                    data-aos="flip-left"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="img"
                  >
                    <img src={image7} alt="#" />
                  </div>
                  <div
                    data-aos="fade-up-right"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="name"
                  >
                    Prawinkumar
                    <b className="arrowforfb m-3">
                      <i class="fa-solid fa-arrow-right"></i>
                    </b>
                  </div>
                </div>
              </button>
            </p>
            <div style={{ height: "" }}>
              <div
                class="collapse collapse-horizontal "
                id="collapseWidthExample3"
              >
                <div class="card card-body">
                  <div className="comment">
                    Had a great time with the entire team. <br />
                    Wishing to take part in more such programs. Friendly mentors
                    and supportive collegues.
                  </div>
                </div>
              </div>
            </div>

            <p className="m-0 p-0  d-flex justify-content-center">
              <button
                className="border-0 bg-white "
                data-bs-toggle="collapse"
                data-bs-target="#collapseWidthExample2"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
              >
                <div className="title">
                  <div
                    data-aos="flip-right"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="img"
                  >
                    <img src={image9} alt="#" />
                  </div>
                  <div
                    data-aos="fade-up-right"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="name"
                  >
                    Priyadharshini.R
                    <b className="arrowforfb m-3">
                      <i class="fa-solid fa-arrow-right"></i>
                    </b>
                  </div>
                </div>
              </button>
            </p>
            <div style={{ height: "" }}>
              <div
                class="collapse collapse-horizontal "
                id="collapseWidthExample2"
              >
                <div class="card card-body">
                  <div className="comment">
                    Applied theoretical knowledge to realworld projects. Gained
                    proficiency in Design tool like Figma. I'm grateful for the
                    mentorship and guidance provided by the team.
                  </div>
                </div>
              </div>
            </div>

            <p className="m-0 p-0  d-flex justify-content-center">
              <button
                className="border-0 bg-white "
                data-bs-toggle="collapse"
                data-bs-target="#collapseWidthExample1"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
              >
                <div className="title ">
                  <div
                    data-aos="flip-left"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="img"
                  >
                    <img src={image8} alt="#" />
                  </div>
                  <div
                    data-aos="fade-up-right"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="name"
                  >
                    Nandhini.S.M
                    <b className="arrowforfb m-3">
                      <i class="fa-solid fa-arrow-right"></i>
                    </b>
                  </div>
                </div>
              </button>
            </p>
            <div style={{ height: "" }}>
              <div
                class="collapse collapse-horizontal "
                id="collapseWidthExample1"
              >
                <div class="card card-body">
                  <div className="comment">
                    I'm so happy to attend the internship at ShenAI. I got
                    variety of ideas about UI/UX designing using Figma. Such a
                    good experience with a peaceful environment.
                  </div>
                </div>
              </div>
            </div>

            <p className="m-0 p-0  d-flex justify-content-center">
              <button
                className="border-0 bg-white "
                data-bs-toggle="collapse"
                data-bs-target="#collapseWidthExample"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
              >
                <div className="title">
                  <div
                    data-aos="flip-right"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="img"
                  >
                    <img src={image10} alt="#" />
                  </div>
                  <div
                    data-aos="fade-up-right"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className="name"
                  >
                    Tharikaa.L.S
                    <b className="arrowforfb m-3">
                      <i class="fa-solid fa-arrow-right"></i>
                    </b>
                  </div>
                </div>
              </button>
            </p>
            <div style={{ height: "" }}>
              <div
                class="collapse collapse-horizontal "
                id="collapseWidthExample"
              >
                <div class="card card-body">
                  <div className="comment m-0 p-0 text-break">
                    I had a great time here. Also i had upgraded my skills with
                    the new ideas which i learned from here. I prefer ShenAI as
                    one of the best internship providing company.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;