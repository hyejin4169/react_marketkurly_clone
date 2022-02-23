import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./Card";
// import { actionCreators as postActions } from "../redux/modules/post";


const Slide = (props) => { //부모 컴포넌트에서 받은 state와 method

  //settings 부분, 슬라이더의 기능을 조정할 수 있다.
  const settings = {
    dots: false,  // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToShow: 4, //4장씩 보이게 해주세요
    slidesToScroll: 1, //1장씩 넘어가세요

    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 1050, // 화면 사이즈 1200px
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };


  const all_list = useSelector((state) => state.post.list[2])
  console.log(all_list);


  return (

    < Wrap >
      <Slider {...settings}>
        {all_list && all_list.map((data, i) => {
          return (
            <Card key={i} data={data} />
          );
        })}

      </Slider>

    </Wrap >
  )
}

const Wrap = styled.div`
  position: relative;
  margin: 4% auto;
  width: 1050px;
  padding: 0px 0px 70px;

  .slick-prev {
    z-index: 1000;
  }
  .slick-prev:before {
    position: absolute;
    left: 17px;
    top: -35px;
    transform: translate(-50%, -50%);
    background: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_left_over_60_60.svg)
      50% 50% no-repeat;
    content: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_left_60_60.svg);
  }
  .slick-next:after {
    position: absolute;
    right: 30px;
    top: -35px;
    transform: translate(50%, -50%);
    background: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_right_over_60_60.svg)
      50% 50% no-repeat;
    content: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_right_60_60.svg);
  }
`


export default Slide;
