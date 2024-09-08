import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import 'aos/dist/aos.css';
import AOS from "aos";
import Axios from "axios";
function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
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
