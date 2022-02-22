import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";

import ModalTwo from "../components/ModalTwo";

import post, { actionCreators as postActions } from "../redux/modules/post";

//components
import {
  Banner,
  MD,
  MiddleBanner,
  Oneday,
  Slide,
} from "../components/component";

//elements
import images from "../elements/Image";

const Main = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_id = useSelector((state) => state.user.user?.userid);
  console.log(post_list);
  console.log(user_id);

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <HeaderContainer>
      <Banner images={images}></Banner>
      <Wrap>
        {/* <button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {modalOpen && <ModalTwo setOpenModal={setModalOpen} />}모달
        </button> */}
        <TitleWrap>
          <span>이건 어때요?</span>
        </TitleWrap>
        <Slide post_list={post_list} />

        <MiddleBanner />

        <Oneday />

        <TitleWrap>
          <span>후기 10,000개 돌파 상품</span>
          <Icon />
        </TitleWrap>
        <Slide post_list={post_list} />

        <TitleWrap>
          <span>지금 가장 핫한 상품</span>
        </TitleWrap>
        <Slide post_list={post_list} />

        <MiddleBanner />

        <TitleWrap>
          <span className="title">공유가 많은 상품 랭킹</span>
        </TitleWrap>
        <Slide post_list={post_list} />

        <MD />
      </Wrap>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  color: "red";
`;

const Wrap = styled.div`
  width: 1050px;
  margin: 0px auto;
`;
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
`;

const Icon = styled.div`
  position: absolute;
  left: 64%;
  top: 28px;
  width: 32px;
  height: 32px;
  background: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_title_32_32.svg);
`;

export default Main;
