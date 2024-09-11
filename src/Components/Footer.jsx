import React from "react";
import "./Footer.css";
//        image import
import logo from '/src/imges/ShenAI_Logo-removebg-preview.png'; 

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="box1">
          <div data-aos="fade-down-right"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  className="image">
            <img src={logo} alt="" />
          </div>
          <div data-aos="fade-up-right"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  className="content">
            Concept At ShenAI We specialize in creating tailored solutions for a
            diverse range of industries, including financial institutions,
            medical companies, tech firms, and government organizations.
          </div>
        </div>

        <div className="box2">
          <div className="insidebox2">
            <div className="rectangles">
              <div data-aos="fade-down-right"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  className="rectangle1"></div>
              <div data-aos="fade-down-right"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-easing="ease-in-out"
    data-aos-once="false" className="rectangle2"></div>
              <div data-aos="fade-down-right"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-easing="ease-in-out"
    data-aos-once="false" className="rectangle3"></div>
            </div>
            <div data-aos="fade-right"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-easing="ease-in-out"
    data-aos-once="false"   className="followus">Follow us</div>
            <div className="socialpages">
              <div data-aos="flip-right"
    data-aos-offset="0"
    data-aos-delay="120"
    data-aos-easing="ease-in-out"
    data-aos-once="false" >
               <a className="linkedin" href="https://www.linkedin.com/in/shenai-private-solutions-54236231a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> <i class="fa-brands fa-linkedin"></i></a>
              </div>
              <div data-aos="flip-right"
    data-aos-offset="0"
    data-aos-delay="160"
    data-aos-easing="ease-in-out"
    data-aos-once="false" >
                <a className="insta" href="https://www.instagram.com/shenai_off?igsh=MTF0cm90dnZ4dmM2bw%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></a>
              </div>
              <div data-aos="flip-right"
    data-aos-offset="0"
    data-aos-delay="200"
    data-aos-easing="ease-in-out"
    data-aos-once="false" >
                <a className="facebook" href="https://www.facebook.com/share/C145pZPZWndVKfz3/?mibextid=LQQJ4d"><i class="fa-brands fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
