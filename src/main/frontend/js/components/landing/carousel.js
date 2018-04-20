import React from "react";


export const Carousel = () => (
  <div id="carouselExampleIndicators" className="carousel slide "  data-ride="carousel">
        <ol className="carousel-indicators" >
          <li data-target="#carouselExampleIndicators" data-slide-to="0"
            className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-50 centered" src="images/helix.png" alt="First slide"/>
          </div>
        <div className="carousel-item">
          <img className="d-block w-50" src="images/helix.png" alt="Second slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators"
        role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators"
        role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    );