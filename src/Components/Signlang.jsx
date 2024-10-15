import React,{useEffect} from 'react'
import './Signlang.css'
import AboutUs from './AboutUs'
import Footer from './Footer'
import 'aos/dist/aos.css';
import AOS from "aos";

//import images

import signlanguages from "/src/imges/signlanguage.jpg"
import signlang1 from "/src/imges/signlang1.png"
import signlang2 from "/src/imges/signlang2.png"
import signlang3 from "/src/imges/signlang3.png"
import signlang4 from "/src/imges/signlang4.png"
import signanime from "/src/imges/signanime.png"



function Signlang() {
    
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
  return (
    <div>
        <div className="signlang ">
            <div className="signlangrec">
                <div  data-aos="zoom-in" className="signs">
                    <img src={signlanguages} alt="Hand Signs" />
                </div>
                <div data-aos="zoom-out" className="topic">SIGN LANGUAGE RECOGNITION</div>
            </div>
            <div data-aos="fade-left" className='line'></div>
            <div data-aos="zoom-in" className='text-center topic1'>SIGN LANGUAGE</div>
            <div data-aos="fade-right" className='line1'></div>
            <div data-aos="zoom-in" className='topiccontent container'>Indian Sign Language(ISL) is the primary language used by the deaf community in india. ISL is an official Language of India and has its own unique vocabulary. grammer and cultural significance. ISL is promoted by organizations like the Indian Sign Language Research an Training Centre(ISLRTC) in India. <br /><br /> ISL Indian Sign Language uses a different finger_spelling system from ASL and BSL. </div>
            <div data-aos="fade-left" className='line'></div>
            <div data-aos="zoom-in" className='signimage'><img src={signanime} alt="#" /></div>
            <div data-aos="fade-right" className='line1'></div>
            <div data-aos="fade-right" className='topiccontent1'>
                In recent days, We could find more sign language recognition applications for predicting the signs used by deaf and dumb people. Some of them are ASL and BSL. But ther are recongnising only alphabets and numbers , not a fluent sentences of ISL community. According to the deaf people. theyare in the need of interpreter in every communication in between hearing and deaf person. <br /><br />
                <h3 >Therefore the below solution will help them as an interpreter</h3> <br /><br />
                Here the model uses the mobile application for creating a machine learning model. This model will run with testing dataset and training dataset. Once the machine learning model is stable. some certain functions are to be used and the model is to be stored in Local Computer. In the mobile application , the model is stored and the processed video is to be send. <br /><br />
                The processed video's latency is to be reduced by using with maximum number of GPU's. <br />
                S0,We are looking some Cloud GPU providers like GCP, AWS, Paperspace, Google cloud platform, etc.. .In this cloud GPU's enable parallel processing of sign language data, allowing for faster recognition by distributing the computational load across multiple GPU coresClous GPU's offer the computational power required for real-time sign language recognition, ensuring immediate and seamless communication for users. After adding some functions in our model and then the model is deploy in the android studio. This project is mainly focused on the basement idea of recognizing the sentences of Indian Sign Language which are existingly trained by ourself.
            </div>
            <div className='signs1 '>
                <img data-aos="flip-right" src={signlang1} alt="Sign Language" />
                <img data-aos="flip-right" src={signlang2} alt="Sign Language" />
                <img data-aos="flip-right" src={signlang3} alt="Sign Language" />
                <img data-aos="flip-right" src={signlang4} alt="Sign Language" />
            </div>
            <div data-aos="fade-left" className='line'></div>
        </div>
        <div className='bg-white '><AboutUs/><Footer/></div>
        <div></div>
    </div>
  )
}

export default Signlang
