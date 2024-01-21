import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
     <div className="mainDiv">
     <Slider {...settings}  className="mainConatiner">
        <div className="container">
          <img
            src="https://images.pexels.com/photos/4132776/pexels-photo-4132776.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="image"
          />
        </div>
        <div className="container">
          <img
            src="https://images.pexels.com/photos/19727487/pexels-photo-19727487/free-photo-of-person-walking-up-the-stairs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load,,,,,,,,,,,,,k9"
            alt=""
            className="image"
          />
        </div>
        <div className="container">
          <img
            src="https://images.pexels.com/photos/5191902/pexels-photo-5191902.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="image"
          />
        </div>
        <div className="container">
          <img
            src="https://images.pexels.com/photos/19284514/pexels-photo-19284514/free-photo-of-a-black-and-white-photo-of-a-pine-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="image"
          />
        </div>
      </Slider>
     </div>
    </>
  );
}

export default App;
