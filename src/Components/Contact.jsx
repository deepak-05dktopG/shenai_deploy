import React, { useState,useEffect } from "react";
import "./Contact.css";
import Footer from "./Footer";
import 'aos/dist/aos.css';
import AOS from "aos";
function Contact() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all animations
      offset: 0,    // Global offset for all animations
      anchorPlacement: 'bottom-bottom', // Global anchor placement for all animations
    });  }, []);
  useEffect(() => {
    // Select all elements with data-aos attribute
    const aosElements = document.querySelectorAll('[data-aos]');
    
    // Loop through and add a class to the parent
    aosElements.forEach((element) => {
      const parent = element.parentElement;
      if (parent) {
        parent.classList.add('delete_extra_space');
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
    <div>
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
              className="form-control valid "
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              data-aos-delay="250"
              data-aos="fade-right"
              className="form-control"
              type="number"
              id="phone"
              name="phone"
              minlength="10"
              maxlength="14"
              placeholder="Phone"
              required
            />
            <input
            data-aos-delay="400"
              data-aos="fade-right"
              className="form-control"
              type="email"
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

          <div className="sociallinks">
            <a  data-aos="zoom-out" href="https://www.facebook.com/">
              <i data-aos="zoom-in" class="fa-brands fa-linkedin pb-lg-5"></i> Shenai Private solutions
            </a>
            <a  data-aos="zoom-out" href="https://www.facebook.com/">
              <i  data-aos="zoom-in" class="fa-brands fa-instagram pb-lg-5"></i>Shenai_off
            </a>
            <a data-aos="zoom-out" href="https://www.facebook.com/">
              <i  data-aos="zoom-in" class="fa-brands fa-facebook pb-lg-5"></i>Shen ai
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
