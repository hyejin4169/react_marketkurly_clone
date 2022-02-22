import React, { Component } from "react";
import Slider from "react-slick";
// import SlideContent from "./SlideContent";
import styled from "styled-components";
import Card from "../components/Card";

const Slide = (props) => {
  //부모 컴포넌트에서 받은 state와 method
  //   const { post_list } = props;
  //   console.log(props);
  //settings 부분, 슬라이더의 기능을 조정할 수 있다.
  const settings = {
    dots: false, // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToShow: 4, //4장씩 보이게 해주세요
    slidesToScroll: 1, //1장씩 넘어가세요

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1050, // 화면 사이즈 1200px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Wrap>
      {/* <TitleWrap><span>이건 어때요?</span></TitleWrap> */}
      {/* {post_list.map((list, idx) => {
        return (
          <Slider key={idx} {...settings}>
            <Card list={list} />
          </Slider>
        );
      })} */}
      <Slider {...settings}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Slider>
    </Wrap>
  );
};

// Slide.defaultProps = {
//     productName: "대저 찰토마토 1.2kg/팩",
//     productImg: "https://img-cf.kurly.com/shop/data/goods/1611197682204l0.jpg",
//     description: "싱그러운 초롯빛을 머금은 토마토",
//     price: "20,000"
// }

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
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px;
  & span {
    padding-bottom: 32px;
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
  }
`;

export default Slide;
