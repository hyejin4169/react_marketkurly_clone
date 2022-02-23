import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { actionCreators as cartActions } from "../redux/modules/cart";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const cart_list = props;
  console.log(cart_list);
  // const [count, setCount] = useState(cart_list.quantity);
  const [select, setSelect] = useState(true);

  const editCount = (count) => {
    if (count === "plus") {
      dispatch(cartActions.editCartDB(cart_list.pid, cart_list.quantity + 1));
    } else if (count === "minus") {
      dispatch(cartActions.editCartDB(cart_list.pid, cart_list.quantity - 1));
    }
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteCartDB(cart_list.pid));
  };

  return (
    <ItemBox>
      <ul className="list">
        <li>
          <div className="item">
            {/* <label className="check">
              <input
                id={cart_list.name}
                type="checkbox"
                name="checkItem"
                onClick={() => {
                  select ? setSelect(false) : setSelect(true);
                  console.log(select);
                }}
              />
              <span className="ico" />
            </label> */}

            <div className="name">
              <div className="inner-name">
                <a href="#" className="package ">
                  {cart_list.title}
                </a>
              </div>
            </div>

            <div className="goods">
              <a
                href="#"
                className="thumb"
                style={{
                  backgroundImage: `url(${cart_list.img})`,
                }}
              >
                상품이미지
              </a>

              <div className="price">
                <div className="real-price">
                  <span className="selling">
                    {cart_list.price * cart_list.quantity}
                  </span>
                </div>
                <div className="counter">
                  {cart_list.quantity <= 1 && (
                    <button
                      type="button"
                      className="btn-minus"
                      style={{
                        backgroundImage: `url("https://res.kurly.com/pc/service/common/2009/ico_minus.svg")`,
                      }}
                    />
                  )}
                  {cart_list.quantity > 1 && (
                    <button
                      type="button"
                      className="btn-minus"
                      onClick={() => {
                        if (cart_list.quantity <= 1) {
                          return;
                        }
                        // setCount(count - 1);
                        editCount("minus");
                      }}
                    />
                  )}

                  <input defaultValue={cart_list.quantity} className="number" />
                  <button
                    type="button"
                    className="btn-plus"
                    onClick={() => {
                      // setCount(count + 1);
                      editCount("plus");
                    }}
                  />
                </div>
              </div>
            </div>
            <button className="btn-close" onClick={deleteItem} />
          </div>
        </li>
      </ul>
    </ItemBox>
  );
};

const ItemBox = styled.div`
  .list {
    padding: 0;
    border-bottom: 1px solid #f4f4f4;
    list-style-type: none;
    margin: 0;
    li {
      padding-left: 0;
      .item {
        min-height: 128px;
        padding: 0;
        border-top: 0;
        position: relative;
        .btn-close {
          position: absolute;
          cursor: pointer;
          right: 5px;
          top: 50%;
          width: 30px;
          height: 30px;
          padding: 0;
          margin-top: -13px;
          border: 0;
          background-image: url(https://res.kurly.com/pc/service/cart/2007/ico_delete.svg);
          background-color: transparent;
          /* background-repeat: no-repeat;
          background-size: 30px 30px;
          background-position: 50% 50%; */
        }
        .check {
          left: 2px;
          top: 50%;
          width: 24px;
          height: 24px;
          margin-top: -12px;
          padding: 0;
          position: absolute;
        }
        input[type="checkbox"] {
          position: absolute;
          z-index: -1;
          opacity: 0;
          + .ico {
            display: inline-block;
            position: relative;
            width: 24px;
            height: 24px;
            margin-right: 12px;
            border: 0;
            background-image: url(https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg);
            background-color: transparent;
            background-repeat: no-repeat;
            background-size: 24px 24px;
            background-position: 50% 50%;
            vertical-align: -7px;
          }
          :checked + .ico {
            background-image: url(https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg);
            background-color: transparent;
            background-repeat: no-repeat;
            background-size: 24px 24px;
            background-position: 50% 50%;
          }
        }
        .name {
          display: table;
          width: 327px;
          min-height: 91px;
          padding: 19px 0 18px 120px;
          .inner-name {
            display: table-cell;
            vertical-align: middle;
          }
          a {
            text-decoration: none;
            color: #333;
          }
          .package {
            overflow: hidden;
            max-height: 54px;
            font-weight: 700;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
        }
        .goods {
          overflow: visible;
          height: 100%;
          padding-top: 0;
          a {
            background-color: transparent;
            text-decoration: none;
            color: inherit;
          }
          .thumb {
            overflow: hidden;
            width: 60px;
            height: 78px;
            margin-top: 2px;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #f4f4f4;
            font-size: 0;
            text-indent: 0px;
            position: absolute;
            left: 30px;
            top: 50%;
            margin-top: -39px;
          }
          .price {
            overflow: hidden;
            padding-left: 20px;
            .real-price {
              position: absolute;
              right: 49px;
              top: 50%;
              width: 116px;
              transform: translateY(-50%);
              .selling {
                display: block;
                font-weight: 700;
                font-size: 16px;
                text-align: right;
              }
            }
            .counter {
              /* display: flex; */
              position: absolute;
              /* font-size: 12px; */
              border: 1px solid #e1e1e1;
              left: 473px;
              top: 50%;
              margin-top: -13px;
              overflow: hidden;
              /* width: 88px; */
              height: 30px;
              border-radius: 3px;
              button {
                &.btn-minus {
                  padding: 0;
                  float: left;
                  background-image: url(https://res.kurly.com/pc/service/common/2009/ico_minus_on.svg);
                  background-color: transparent;
                  background-repeat: no-repeat;
                  /* background-size: 30px 30px; */
                  /* background-position: 50% 50%; */
                  width: 30px;
                  height: 30px;
                  overflow: hidden;
                  border: none;
                }
                &.btn-plus {
                  padding: 0;

                  float: right;
                  background-color: transparent;
                  background-repeat: no-repeat;
                  /* background-size: 30px 30px;
                  background-position: 50% 50%; */
                  background-image: url(https://res.kurly.com/pc/service/common/2009/ico_plus_on.svg);
                  width: 30px;
                  height: 30px;
                  overflow: hidden;
                  border: none;
                }
              }
              .number {
                padding: 0 0 4px;
                text-align: center;
                font-family: noto sans;
                border: none;
                font-size: 14px;
                width: 26px;
                height: 28px;
                font-weight: 400;
                line-height: 18px;
              }
            }
          }
        }
      }
    }
  }
`;
export default CartItem;
