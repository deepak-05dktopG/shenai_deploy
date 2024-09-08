import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import 'aos/dist/aos.css';
import AOS from "aos";
import Axios from "axios";
function App() {



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






  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:5001/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data so:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
