import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  Banner,
  MD,
  MiddleBanner,
  Oneday,
  Kurlyonly,
  Sale,
  AllList
} from "../components/component";
import { actionCreators as postActions } from "../redux/modules/post";

//elements
import images from "../elements/Image";

const Main = (props) => {
  const dispatch = useDispatch();

  const all_list = useSelector((state) => state.post.list)
  console.log(all_list)

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
        <AllList></AllList>
        <MiddleBanner></MiddleBanner>
        <Oneday></Oneday>
        <Kurlyonly></Kurlyonly>
        <MiddleBanner></MiddleBanner>
        <Sale ></Sale>
        <MD></MD>
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

export default Main;
