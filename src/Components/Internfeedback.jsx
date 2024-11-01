import React from "react";
import "./Internfeedback.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


// Import images
import image6 from "/src/imges/deepak.png";
import image7 from "/src/imges/prawin.jpg";
import image8 from "/src/imges/nandhini.jpg";
import image9 from "/src/imges/priya.jpg";
import image10 from "/src/imges/tharika.jpg";

// Sample feedback data
const feedbackData = [
  {
    name: "Deepakkumar M",
    image: image6,
    feedback:
      "My internship at ShenAI was an incredible experience that greatly enhanced my web development skills. The supportive team and hands-on projects allowed me to apply my knowledge in a real-world setting, making it a valuable stepping stone in my career.",
  },
  {
    name: "Prawin",
    image: image7,
    feedback: "Had a great time with the entire team.Wishing to take part in more such programs. Friendly mentors  and supportive collegues.",
  },
  {
    name: "Nandhini",
    image: image8,
    feedback: "I'm so happy to attend the internship at shenAi. I got variety of innovative ideas about UI/UX designing using Figma. Such a good experience with a peaceful environment.",
  },
  {
    name: "Priya",
    image: image9,
    feedback: "I am very glad to work  in UI/UX  Intern were I used to gain my  knowledge in this ‘shen AI’ project.It was used  to Enhancing my skills in design tools like Figma.I’m Thankful! for the team guidance and their Mentorship throughout the experience.",
  },
  {
    name: "Tharika",
    image: image10,
    feedback: "I had a great time here.Also I had upgraded my skills with the new ideas which I learned from here.I prefer shenAI as one of the best internship providing company. ",
  },
  {
    name: "Rohini.R",
    image: false,
    feedback: "I am so happy that I was a part of such a friendly and professional team.In the time of my internship at shenAi, I gained precious experience, practical skills and applied knowledge.",
  },
  {
    name: "Sabarisree",
    image: false,
    feedback: "I had a great time here.Also I had upgraded my skills with the new ideas which I learned from here.I prefer shenAI as one of the best internship providing company. ",
  },
];

function Internfeedback() {
  return (
    <div className="feedbacks  pt-4">
      <h3 data-aos="fade-right" className="text-white ps-2 fw-bold">INTERNS FEEDBACK</h3>
      <Splide
        options={{
          type   : 'loop',
          drag   : 'free',
          focus  : 'center',
          perPage: 2,
          autoplay:true,
          autoScroll: {
            speed: 2,
          },
          pauseOnHover:true,
        }}
        aria-labelledby="autoplay-example-heading"
      >
        {feedbackData.map((intern, index) => (
          <SplideSlide key={index}>
            <div data-aos="zoom-in" className="internfeedback ">
              <div className="topheader">
                <div>
                  <img
                    className="internimg"
                    src={intern.image}
                    alt={`Feedback from ${intern.name}`}
                  />
                </div>
              </div>
              <div className="internname text-center">
                <h2>{intern.name}</h2>
              </div>
              <br />
              <div className="internfeedbacks text-center px-1">
                {intern.feedback}
              </div>
            </div>
          </SplideSlide>
        ))}
        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>


      </Splide>
    </div>
  );
}

export default Internfeedback;
