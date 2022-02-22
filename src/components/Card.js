import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Cart from "../elements/Cart";

import { actionCreators as cartActions } from "../redux/modules/cart";
import { useSelector } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();

  // const { list } = props;
  // console.log(props);
  // const add_cart = dispatch(cartActions.addCartDB(pid, quantity))

  return (
    <ProductContainer>
      <ProductImgWrap>
        <img src={props.Img}></img>
        <Cart />
      </ProductImgWrap>
      <TextWrap>
        <ProductTitle>{props.Title}</ProductTitle>
        {/* <CostBox>
            <ProductPrice>{props.Price} 원</ProductPrice>
          </CostBox> */}
        <CostBox>
          <Sale>{props.Sale}%</Sale>
          <ProductPrice> 11,858 원</ProductPrice>
        </CostBox>
        <SalePrice>{props.Price}원</SalePrice>
      </TextWrap>
    </ProductContainer>
  );
};

Product.defaultProps = {
  Title: "친환경 하우스 딸기 (설향) 500g",
  Img: "https://img-cf.kurly.com/shop/data/goods/1609229005799l0.jpg",
  Sale: "23",
  Price: "15,400",
};

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
`;

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
`;

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
`;

export default Product;
