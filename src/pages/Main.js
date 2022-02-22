import React from "react";
import Slide from "../components/Slide"
import styled from "styled-components";
import Banner from "../components/Banner.js"
import Oneday from "../components/Oneday.js";
import images from "../elements/Image";
import MiddleBanner from "../components/MiddleBanner";
import Md from "../components/Md";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";


const Main = (props) => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.list)


  React.useEffect(() => {

    dispatch(postActions.getPostDB());
  }, []);


  return (
    <HeaderContainer>
      <Banner images={images}></Banner>
      <Wrap>
        <TitleWrap><span>이 상품 어때요?</span></TitleWrap>
        <Slide></Slide>
        <MiddleBanner></MiddleBanner>
        <Oneday></Oneday>
        <TitleWrap>
          <span>후기 5개 돌파 상품</span>
          <Icon />
        </TitleWrap>
        <Slide></Slide>
        <TitleWrap>
          <span>컬리 온리</span>
        </TitleWrap>
        <Slide></Slide>
        <MiddleBanner></MiddleBanner>
        <TitleWrap>
          <span className="title">MD의 추천</span>
        </TitleWrap>
        <Slide></Slide>
        <Md></Md>
      </Wrap>

    </HeaderContainer >
  );
};


const HeaderContainer = styled.div`
  color : "red"
`

const Wrap = styled.div`
  width: 1050px;
  margin: 0px auto;

`
const TitleWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    & span {
      position: relative;
      margin-top: 27px;
      color: rgb(51, 51, 51);
      font-size: 28px;
      line-height: 1.15;
      letter-spacing: -0.26px;
      font-weight: 600; 
    }
    .title {
      margin-top: 150px;
    }
`

const Icon = styled.div`
    position: absolute;
    left: 64%;
    top: 28px;
    width: 32px;
    height: 32px;
    background: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_title_32_32.svg);
`






export default Main;
