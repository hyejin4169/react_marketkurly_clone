import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { images } from "../elements/element";

export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <Wrap>
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <Img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </Wrap>
  );
}

const Wrap = styled.div`

  margin: auto 0;
  margin-bottom: 50px;

`;

const Img = styled.img`
  width: 100%;
  height: 370px;

`;
