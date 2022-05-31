import React, { Component } from "react";
import Slider from "react-slick";
import blogImg from '../images/blog1.jpg'

class SlickSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          },
        },
      ],
    };
    return (
      <div className="green container">
        <Slider {...settings} className="">
          <div className="blog-card">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={blogImg} alt="" />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="btn btn-orange">Read More</button>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={blogImg} alt="" />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="btn btn-orange">Read More</button>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={blogImg} alt="" />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="btn btn-orange">Read More</button>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={blogImg} alt="" />
              <div className="card-body">
                <h5 className="card-title">Card 4</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="btn btn-orange">Read More</button>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={blogImg} alt="" />
              <div className="card-body">
                <h5 className="card-title">Card 5</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="btn btn-orange">Read More</button>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}

export default SlickSlider;
