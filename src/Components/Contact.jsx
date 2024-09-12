import React, { useState, useEffect } from "react";
import "./Contact.css";
import Footer from "./Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";
function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all animations
      offset: 0, // Global offset for all animations
      anchorPlacement: "bottom-bottom", // Global anchor placement for all animations
    });
  }, []);
  useEffect(() => {
    // Select all elements with data-aos attribute
    const aosElements = document.querySelectorAll("[data-aos]");
    // Loop through and add a class to the parent
    aosElements.forEach((element) => {
      const parent = element.parentElement;
      if (parent) {
        parent.classList.add("delete_extra_space");
      }
    });
  }, []);
  const [result, setResult] = useState("");

  /* const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Access the form fields using document.getElementById
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;


    const result = document.getElementById("result").value;

    // Simple validation using if-else
    if (!name && !email && !message && !phone) {
      setResult("You should Fill the above columns")
    } else if (!name) {
      setResult("Please fill the Name")
    } else if (!email) {
      setResult("Please fill the Email")
    }else if (!phone) {
      setResult("Please fill the Phone")
    } else if (!message) {
      setResult("Please fill the Message")
    }   else {
      set("Form Submitted") // You can handle further form submission logic here
    }
  };*/

  return (
    <div className="body1">
      <div className="insidenav bg-dark d-flex align-items-center justify-content-center flex-column text-center text-white">
        <h1>Contact</h1>
        <div className="afterhead d-flex justify-content-center">
          <Link to={"/"}>
            {" "}
            <div className="tohome">Home</div>{" "}
          </Link>
          <span className="gap">/</span>
          <div className="stay">Contact</div>
        </div>
      </div>

      <div className="contact">
        <div className="headings text-center">
          <p data-aos="fade-down">\Get In Touch\</p>
          <h1 data-aos="zoom-out">Hey! Let's Talk</h1>
        </div>

        <div className="bodycontact">
          <form
            data-aos="zoom-out"
            action="https://api.web3forms.com/submit"
            method="POST"
            class="was-validated"
          >
            <input
              type="hidden"
              name="access_key"
              value="bf09f79e-4888-4ddb-af54-5b31e0dc1fe4"
            />
            <input
              data-aos="fade-right"
              data-aos-delay="100"
              className="form-control "
              type="text"
              id="name"
              name="name"
              style={{backgroundColor : ' #f2f2f2'}}
              placeholder="Name"
              required
            />
            <input
              data-aos-delay="250"
              data-aos="fade-right"
              className="form-control"
              style={{backgroundColor : ' #f2f2f2'}}
              type="tel"
              id="phone"
              name="tel"
              pattern="[0-9]{10}"
              placeholder="Phone"
              required
            />

            <input
              data-aos-delay="400"
              data-aos="fade-right"
              className="form-control"
              type="email"
              style={{backgroundColor : ' #f2f2f2'}}
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              data-aos-delay="550"
              data-aos="fade-right"
              className="form-control"
              name="message"
              style={{backgroundColor : ' #f2f2f2'}}
              id="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              data-aos-delay="700"
              data-aos="fade-left"
              className="btn btn-outline-dark"
              type="submit"
            >
              Submit Form
            </button>
          </form>

          <div className="sociallinks ">
            <a
              className="overflow-hidden"
              data-aos="zoom-out"
              href="https://www.linkedin.com/in/shenai-private-solutions-54236231a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            >
              <i data-aos="zoom-in" class="fa-brands fa-linkedin pb-lg-5"></i>{" "}
              Shenai Private solutions
            </a>
            <a
              className="overflow-hidden"
              data-aos="zoom-out"
              href="https://www.instagram.com/shenai_off?igsh=MTF0cm90dnZ4dmM2bw%3D%3D&utm_source=qr"
            >
              <i data-aos="zoom-in" class="fa-brands fa-instagram pb-lg-5"></i>
              Shenai_off
            </a>
            <a
              className="overflow-hidden"
              data-aos="zoom-out"
              href="https://www.facebook.com/share/C145pZPZWndVKfz3/?mibextid=LQQJ4d"
            >
              <i data-aos="zoom-in" class="fa-brands fa-facebook pb-lg-5"></i>
              Shen ai
            </a>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
