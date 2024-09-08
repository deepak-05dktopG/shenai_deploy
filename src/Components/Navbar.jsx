import React from "react";
import { useState, useRef } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
//        image import
import logo from "/src/imges/ShenAI_Logo-removebg-preview.png";

//        Components import
import LandingPage from "./LandingPage";
import About from "./About";
import Project from "./Project";
import Service from "./Service";
import Team from "./Team";
import Careers from "./Careers";
import Contact from "./Contact";
import Signlang from "./Signlang";
import Servingrobot from "./Servingrobot";

function Navbar() {
  const navlink = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "normal" : "normal",
      color: isActive ? "rgb(255, 162, 0)" : "black",
      textDecoration: isActive ? "underline" : "none",
      transition: isActive ? "all 0.5s" : "all 0.5s",
      letterSpacing: isActive ? "2px" : "0px",
      borderBottom: isActive ? "3px solid rgb(255, 162, 0)" : "0px solid black",
    };
  };

  function ScrollToTop() {
    const location = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  }
  return (
    <Router>
      <ScrollToTop />

      {/* navbar for mobile */}
      <nav class="navbar">
        <div class="container-fluid">
          <img
            data-aos="flip-right"
            data-aos-offset="0"
            data-aos-delay="100"
            data-aos-duration="9000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            src={logo}
            alt="#"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div
            class="offcanvas w-75 offcanvas-end"
            tabindex="1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <div>
                <img
                  src={logo}
                  alt=""
                  width={50}
                  className="bg-white rounded-circle"
                />
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end text-center gap-4 flex-grow-1 ">
                <li>
                  <NavLink
                    style={navlink}
                    to="/"
                    className="  nav-item text-decoration-none "
                  >
                    <div data-bs-dismiss="offcanvas">Home</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navlink}
                    to="about"
                    className="nav-item  text-decoration-none"
                  >
                    <div data-bs-dismiss="offcanvas">About</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navlink}
                    to="project"
                    className="nav-item text-decoration-none"
                  >
                    <div data-bs-dismiss="offcanvas">Project</div>{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navlink}
                    to="service"
                    className="nav-item text-decoration-none"
                  >
                    <div data-bs-dismiss="offcanvas">Service</div>{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navlink}
                    to="team"
                    className="nav-item text-decoration-none"
                  >
                    <div data-bs-dismiss="offcanvas">Team</div>{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navlink}
                    to="careers"
                    className="nav-item text-decoration-none"
                  >
                    <div data-bs-dismiss="offcanvas">Careers</div>{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navlink}
                    to="contact"
                    className="nav-item text-decoration-none"
                  >
                    <div data-bs-dismiss="offcanvas">Contact</div>{" "}
                  </NavLink>
                </li>
                <li className="d-flex justify-content-around border-bottom-0">
                  <a href="#"><i class="fa-brands fa-facebook "></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* navbar for desktop */}
      <div className="navbar1 bg-white">
        <div className="emptynav"></div>
        <div className="nav">
          <NavLink
            style={navlink}
            to="/"
            className="nav-item text-decoration-none"
          >
            Home
          </NavLink>
          <NavLink
            style={navlink}
            to="about"
            className="nav-item text-decoration-none"
          >
            About
          </NavLink>
          <NavLink
            style={navlink}
            to="project"
            className="nav-item text-decoration-none"
          >
            Project
          </NavLink>
          <NavLink
            style={navlink}
            to="service"
            className="nav-item text-decoration-none"
          >
            Service
          </NavLink>
          <NavLink
            style={navlink}
            to="team"
            className="nav-item text-decoration-none"
          >
            Team
          </NavLink>
          <NavLink
            style={navlink}
            to="careers"
            className="nav-item text-decoration-none"
          >
            Careers
          </NavLink>
          <NavLink
            style={navlink}
            to="contact"
            className="nav-item text-decoration-none"
          >
            Contact
          </NavLink>
        </div>
        <div className="logo">
          <img src={logo} alt="#" />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/signlang" element={<Signlang />} />
        <Route path="/project/signlang" element={<Signlang />} />
        <Route path="/project/servingrobot" element={<Servingrobot />} />
        <Route path="/servingrobot" element={<Servingrobot />} />

      </Routes>
    </Router>
  );
}
/*<Link to="/" className="me-5">
              Home
            </Link>*/

export default Navbar;