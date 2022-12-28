import React from 'react'
import Stylesheet from 'react';
import '../styles/carousal.css';

function Carousal() {
  return (
    <div className="col-md-100 main-div "> 
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://source.unsplash.com/1600x500/?mobile-cases" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src="https://source.unsplash.com/1600x500/?watch" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src="https://source.unsplash.com/1600x500/?headphone" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src="https://source.unsplash.com/1600x500/?gifts" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Carousal

// Stylesheet.create


