import React from "react";
import styled from "styled-components";

const CartIcon = (props) => {
  const { _onClick } = props;
  return (
    <CartIconWrap>
      <Cart onClick={_onClick}></Cart>
    </CartIconWrap>
  );
};

CartIcon.defaultProps = {
  _onClick: () => { },
}

const CartIconWrap = styled.div`
  position: absolute;
  z-index: 300;
  display: block;
  right: 16px;
  bottom: 16px;
  width: 45px;
  height: 45px;
`;

const Cart = styled.button`
  width: 46px;
  height: 46px;
  display: block;
  border: 0px;
  background: none;
  outline: 0px;
  user-select: none;
  background: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/cart_white_45_45.svg)
    50% 50% no-repeat;
  cursor: pointer;
  
`;

export default CartIcon;
