import React from 'react';
import styled from "styled-components";

const MiddleBanner = (props) => {
  return (
    <Wrap>
      <A >
        <img src={props.Img} />
      </A>
    </Wrap>
  );
};

MiddleBanner.defaultProps = {
  Img: "https://img-cf.kurly.com/banner/random-band/pc/img/78495329-b15e-45d6-bee7-c2d0ae7460fd"
}


const Wrap = styled.div`
  width: 1050px;
  margin: 0px auto;

`
const A = styled.div`
  position: relative;
    display: block;
    height: 140px;
    overflow: hidden;
    & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
    max-width: 100%;

    }

`


// const Container = styled.div`


// `

export default MiddleBanner;