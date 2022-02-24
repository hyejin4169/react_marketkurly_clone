import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as cartActions } from "../redux/modules/cart";

import { useParams } from "react-router-dom";

const DetailItem = (props) => {
  const dispatch = useDispatch();

  const params = useParams();
  const pid = params.id;
  // console.log(pid);

  useEffect(() => {
    dispatch(postActions.detailPostDB(pid));
  }, []);

  const data = useSelector((state) => state.post.detail_list);
  // console.log(data);

  const price = data.originalPrice;
  const disconunt = data.discountedPrice;

  // 처음 랜더링되고 유저에게 보이는 초기 값  useState(1) 로  초기 값 1로 설정
  const [count, setCount] = useState(1);

  const upCount = () => setCount((prevCount) => prevCount + 1);
  const downCount = () => setCount((prevCount) => prevCount - 1);
  const value = (e) => setCount(Number(e.target.value));
  //onChange의 타켓으로 값을 바로 state에 넣어줄 경우 0은 string으로 인식 -> Number()을 사용해 숫자로 변경

  // 총 합계 금액 구하기
  const setPrice = count * price;
  const setDisconunt = count * disconunt;

  const addCart = () => {
    let product_id = parseInt(pid);
    dispatch(cartActions.addCartDB(product_id, count));
  };

  return (
    <SectionView>
      <ImgWrap>
        <Img src={data.detailImageUrl}></Img>
        <TitleWrap>
          <Name>{data.name}</Name>
          <Short>{data.shortDescription}</Short>

          {data.discountPercent == 0 ? (
            <Price>{Number(price).toLocaleString()}원</Price>
          ) : (
            <PriceWrap>
              <p>회원할인가</p>
              <Price>
                {Number(disconunt).toLocaleString()}
                <span>원</span>
              </Price>
              <Disconunt>{data.discountPercent}%</Disconunt>
              <Original>
                {Number(price).toLocaleString()}
                <span>원</span>
              </Original>
            </PriceWrap>
          )}

          <InfoWrap>
            <dl className="list">
              <dt className="tit">판매단위</dt>
              <dd className="desc">{data.unitText}</dd>
            </dl>
            <dl className="list">
              <dt className="tit">중량/용량</dt>
              <dd className="desc">{data.weight}</dd>
            </dl>
            <dl className="list">
              <dt className="tit">배송구분</dt>
              <dd className="desc">{data.deliveryTimeType}</dd>
            </dl>
            {/* <dl className="list">
                            <dt className="tit">원산지</dt>
                            <dd className="desc">{data.}</dd>
                        </dl> */}
            <dl className="list">
              <dt className="tit">포장타입</dt>
              <dd className="desc">{data.packingType}</dd>
            </dl>
            <dl className="list">
              <dt className="tit">알레르기정보</dt>
              <dd className="desc">{data.contactAnt}</dd>
            </dl>
            <dl className="list">
              <dt className="tit">안내사항</dt>
              <dd className="desc">
                해당제품은 최저가로 정상가 세팅되었으나, 유통사(수입사)의
                가격정책이슈로 정상 판매가로 재세팅하였습니다. (단, 이전가격보다
                저렴한 가격으로 할인판매예정/12월말까지)
              </dd>
            </dl>
          </InfoWrap>
        </TitleWrap>

        <BoxSelect>
          <span>구매수량</span>
          <Option>
            <span className="count">
              <button
                className="down btn"
                onClick={downCount}
                disabled={count < 2}
              ></button>
              <input className="inp" onChange={value} value={count}></input>
              <button className="up btn" onClick={upCount}></button>
            </span>
          </Option>
        </BoxSelect>
      </ImgWrap>
      {data.discountPercent == 0 ? (
        <Total>
          <div className="price">
            <strong>총 상품금액 :</strong>
            <span className="num">{setPrice.toLocaleString()}</span>
            {/* 금액 " , " 를 사용 : toLocalString() 사용 -> 주의점 : Number.prototype.toLocaleString() 이기때문에 꼭 Number()로 타입변경  */}
            <span className="won">원</span>
          </div>
        </Total>
      ) : (
        <Total>
          <div className="price">
            <strong>총 상품금액 :</strong>
            <span className="num">{setDisconunt.toLocaleString()}</span>
            {/* 금액 " , " 를 사용 : toLocalString() 사용 -> 주의점 : Number.prototype.toLocaleString() 이기때문에 꼭 Number()로 타입변경  */}
            <span className="won">원</span>
          </div>
        </Total>
      )}

      <BtnWrap>
        <button className="btn" onClick={addCart}>
          장바구니 담기
        </button>
      </BtnWrap>
    </SectionView>
  );
};

const SectionView = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding-top: 20px;
  margin-bottom: 50px;
`;
const ImgWrap = styled.div`
  float: left;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Img = styled.img`
  /* background: url(https://img-cf.kurly.com/shop/data/goods/1638939954333y0.jpg); */
  background-size: cover;
  width: 430px;
  height: 552px;
  margin-right: 50px;
`;

const TitleWrap = styled.div`
  float: right;
  width: 560px;
`;
const Name = styled.strong`
  display: block;
  padding-right: 60px;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  word-break: break-all;
`;

const Short = styled.span`
  display: block;
  padding: 4px 60px 0 0;
  font-size: 14px;
  color: #999;
  line-height: 20px;
  word-break: break-all;
`;
const Price = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0;
  font-family: noto sans;
  color: #333;
  & span {
    padding: 0 7px 0 2px;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    vertical-align: 2px;
    letter-spacing: 0;
  }
`;
const InfoWrap = styled.div`
  float: right;
  width: 560px;
  margin-top: 19px;
  padding-bottom: 25px;
  border-top: 1px solid #f4f4f4;

  .list {
    overflow: hidden;
    padding: 13px 0;
    border-bottom: 1px solid #f4f4f4;
  }
  .tit {
    float: left;
    width: 128px;
    font-size: 14px;
    color: #666;
    line-height: 20px;
  }
  .desc {
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
    word-break: break-all;
  }
`;

const BoxSelect = styled.div`
  float: right;
  width: 560px;
  margin-top: -1px;
  padding-bottom: 6px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  .strong {
    float: left;
    width: 128px;
    padding-top: 9px;
    font-weight: 400;
    font-size: 14px;
    color: #666;
    line-height: 20px;
    letter-spacing: -0.5px;
  }
  .a {
    display: block;
    overflow: hidden;
    width: 100%;
    padding: 9px 0 9px 15px;
    border-top: 1px solid #f4f4f4;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.3px;
  }
`;

const Option = styled.div`
  margin-left: 65px;
  padding-top: 0;
  overflow: hidden;
  .count {
    overflow: hidden;
    float: left;
    width: 88px;
    height: 30px;
    border: 1px solid #dddfe1;
    border-radius: 3px;
  }
  .down {
    background: #fff url("https://res.kurly.com/pc/ico/2010/ico_minus_on.svg")
      no-repeat 50% 50%;
    width: 30px;
    outline: none;
  }
  .btn {
    overflow: hidden;
    float: left;
    width: 28px;
    height: 28px;
    border: 0;
    font-size: 0;
    line-height: 0;
    text-indent: -9999px;
  }
  .inp {
    float: left;
    width: 30px;
    height: 30px;
    margin-right: -1px;
    padding: 0 0 4px;
    border: 0;
    background-color: #fff;
    font-size: 14px;
    color: #000;
    line-height: 18px;
    text-align: center;
    outline: none;
  }
  .up {
    float: right;
    margin-left: -1px;
    background: url("https://res.kurly.com/pc/ico/2010/ico_plus_on.svg")
      no-repeat 50% 50%;
    background-size: 30px 30px;
  }
`;

const Total = styled.div`
  display: block;
  float: right;
  padding: 30px 0 20px;
  border-top: 1px solid #f4f4f4;
  .price {
    overflow: hidden;
    text-align: right;
  }
  .strong {
    font-weight: 700;
    font-size: 13px;
    line-height: 20px;
    vertical-align: 2px;
  }
  .num {
    padding-left: 8px;
    font-weight: 800;
    font-size: 32px;
    line-height: 32px;
  }
  .won {
    padding-left: 2px;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    vertical-align: -1px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 30px 0 20px;
  .btn {
    width: 432px;
    height: 56px;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    color: #fff;
    background-color: #5f0081;
    border: 1px solid #5f0081;
    cursor: pointer;
  }
`;
const PriceWrap = styled.div`
  float: right;
  width: 560px;
  padding: 10px 0 29px;
  display: block;
  padding-top: 4px;
`;
const Disconunt = styled.span`
  font-weight: 700;
  font-size: 28px;
  color: #fa622f;
  line-height: 30px;
  letter-spacing: 0;
  margin-left: 5px;
`;

const Original = styled.span`
  display: block;
  font-size: 16px;
  color: #999;
  line-height: 24px;
  text-decoration: line-through;
`;

export default DetailItem;
