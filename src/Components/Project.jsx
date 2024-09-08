import React from "react";
import './Project.css'
import Footer from "./Footer";
import { Link } from "react-router-dom";

//import images
import img1 from '/src/imges/signtitleimg.png';
import img2 from '/src/imges/signtitleimg1.png';

function Project() {
  return (
    <div className=" bg-white">
      <div className="projects container gap-3">
        <div className="project1">
        <Link to="signlang">
          <div >
            <img  src={img1} alt="#" />
          </div>
          <p className="title0">Sign language recognition</p>
          <div className="d-flex gap-2">
            <p className="dash1"></p>
            <p className="dash2"></p>
          </div>
          <div className="aboutproject">
            Sign language is a visual-gestural form of communication used by
            deaf and hard-of-hearing individuals. by SHENai
          </div></Link>
        </div>
        <div className="project2">
        <Link to="servingrobot">
          <div>
            <img src={img2} alt="#" />
          </div>
          <p className="title0">Serving Robot</p>
          <div className="d-flex gap-2">
            <p className="dash1"></p>
            <p className="dash2"></p>
          </div>
          <div  className="aboutproject">
            Introducing SHENai's state-of-the-art serving robot, designed to
            revolutionize the hospitality industry. Equipped with advanced AI,
            it seamlessly delivers food and beverages to tables, ensuring
            precision and efficiency. With its intuitive navigation and
            interactive interface. it enhances the dining experience while
            reducing wait times. Perfect for restaurants, hotels, and events,
            this robot represents the future of service. Trust SHENai to elevate
            your customer service to new heights.
          </div></Link>
        </div>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default Project;
