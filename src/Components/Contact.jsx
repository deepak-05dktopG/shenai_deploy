import React, { useState } from "react";
import "./Contact.css";
import Footer from "./Footer";
function Contact() {
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
          <p>\Get In Touch\</p>
          <h1>Hey! Let's Talk</h1>
        </div>

        <div className="bodycontact">
          <form
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
              className="form-control valid "
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
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
              className="form-control"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="form-control"
              name="message"
              id="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              className="btn btn-outline-dark"
              type="submit"
            >
              Submit Form
            </button>
          </form>

          <div className="sociallinks">
            <a href="https://www.facebook.com/" >
            <i class="fa-brands fa-linkedin"></i> Shenai Private solutions
            </a>
            <a href="https://www.facebook.com/">
            <i class="fa-brands fa-instagram"></i>Shenai_off
            </a>
            <a href="https://www.facebook.com/">
            <i class="fa-brands fa-facebook"></i>Shen ai
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
