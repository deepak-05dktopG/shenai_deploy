import React from "react";
import "./Gallery.css";

//gallery img import
import gallery1 from "/src/imges/gallery1.jpg";
import gallery2 from "/src/imges/gallery2.jpg";
import gallery3 from "/src/imges/gallery3.jpg";
import gallery4 from "/src/imges/gallery4.jpg";
import gallery5 from "/src/imges/gallery5.jpg";
import gallery6 from "/src/imges/gallery6.jpg";
import gallery7 from "/src/imges/gallery7.jpg";
import gallery8 from "/src/imges/gallery8.jpg";
import gallery9 from "/src/imges/gallery9.jpg";
import gallery10 from "/src/imges/gallery10.jpg";


function Gallery() {
  return (
    <div className="gallery  py- d-flex justify-content-center align-items-center">

      <div className="position-relative d-flex flex-wrap justify-content-between z-1 w-100">
          <img src={gallery2} alt="gallery1" className="img-fluid " />
          <img src={gallery1} alt="gallery1" className="img-fluid " />
          <img src={gallery3} alt="gallery1" className="img-fluid " />
          <img src={gallery4} alt="gallery1" className="img-fluid " />
          <img src={gallery5} alt="gallery1" className="img-fluid " />
          <img src={gallery6} alt="gallery1" className="img-fluid " />
      </div>

      <div id="carouselExampleFade" class="carousel slide position-absolute z-2 carousel-fade"  data-bs-ride="carousel">
        <div class="carousel-inner ">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={gallery4} class="d-block " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={gallery5} class="d-block " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={gallery6} class="d-block " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={gallery7} class="d-block " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={gallery1} class="d-block " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={gallery2} class="d-block " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={gallery9} class="d-block " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={gallery10} class="d-block " alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev opacity-0  bg-dark w-50"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next opacity-0 bg-dark w-50"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
