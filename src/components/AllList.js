import React, { Component } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./Card";
import settings from "./settings";




const AllList = (props) => { //부모 컴포넌트에서 받은 state와 method

  //settings 부분, 슬라이더의 기능을 조정할 수 있다.
  const all_list = useSelector((state) => state.post.list[0])

  return (

    < Wrap >
      <TitleWrap><span>이 상품 어때요?</span></TitleWrap>
      <Slider {...settings}>
        {all_list && all_list.map((data, i) => {
          return (
            <Card key={i} data={data}></Card>
          );
        })}
      </Slider>

    </Wrap >

  )


};



const Wrap = styled.div`
  position: relative ;
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
    background: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_left_over_60_60.svg) 50% 50% no-repeat;
    content:url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_left_60_60.svg)


  }
  .slick-next:after {
    position: absolute;
    right: 30px;
    top: -35px;
    transform: translate(50%, -50%);
    background:url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_right_over_60_60.svg) 50% 50% no-repeat;
    content: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_right_60_60.svg);


  }
`
const TitleWrap = styled.div`

    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px;
    padding: 32px 0px 40px;
    & span {
      color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 600;
    }
`


export default AllList;



