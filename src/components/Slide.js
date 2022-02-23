import React, { Component } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartIcon from '../elements/CartIcon';
import Card from "./Card";
import { actionCreators as postActions } from "../redux/modules/post";


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
// const TitleWrap = styled.div`

//     display: flex;
//     flex-direction: column;
//     -webkit-box-pack: center;
//     justify-content: center;
//     -webkit-box-align: center;
//     align-items: center;
//     padding: 8px;
//     & span {
//         padding-bottom: 32px;
//         color: rgb(51, 51, 51);
//         font-size: 28px;
//         line-height: 1.15;
//         letter-spacing: -0.26px;
//         font-weight: 500;
//     }
// `
const ProductContainer = styled.div`
  /* padding: 32px 0px 40px; */
  cursor: pointer;
  margin-right: 5px;
`;

const CostBox = styled.span`
  display: block;
  font-size: 18px;
  line-height: 29px;
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Sale = styled.span`
    color: rgb(250, 98, 47);
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
    white-space: nowrap;
    margin-right: 7px;

`

const ProductPrice = styled.span`
  font-weight: 700;
  color: #333;
  letter-spacing: 0;
  font-size: 17px;
  line-height: 29px;
`;

const SalePrice = styled.span`
    color: rgb(153, 153, 153);
    font-size: 15px;
    font-weight: 500;
    line-height: normal;
    text-decoration: line-through;
    margin-top: 2px;

`

// const ProductSubTitle = styled.p`
//   display: block;
//   padding-top: 8px;
//   font-size: 13px;
//   color: #999;
//   line-height: 19px;
//   font-weight: 400;
//   margin: 0;
// `;

const ProductTitle = styled.p`
  font-size: 16px;
  line-height: 1.45;
  color: rgb(51, 51, 51);
  font-weight: 400;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: normal;
  word-break: break-all;
  overflow-wrap: break-word;
`;



const ProductImgWrap = styled.div`
  overflow: hidden;
  position: relative;
  width: 249px;
    height: 320px;
  & img {
    position: relative;
    z-index: 150;
    width: 100%;
    margin: 0px;
    padding: 0px;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    &:hover {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -moz-transform: scale(1.05);
      -ms-transform: scale(1.05);
      -o-transform: scale(1.05);
    }
  }
`;

const TextWrap = styled.div`
  position: relative;
  z-index: 140;
  display: flex;
  flex-direction: column;
  padding: 14px 10px 0px 0px;
`



export default Slide;



