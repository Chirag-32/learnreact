import React, { Component } from "react";
import Slider from "react-slick";

class SlickSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className="green">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SlickSlider;
