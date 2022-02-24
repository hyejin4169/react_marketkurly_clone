import React from "react";
import styled from "styled-components";
import CartIcon from "../elements/CartIcon";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Oneday = (props) => {
  const navigate = useNavigate();
  const list = useSelector((state) => state.post.list[3]);
  console.log(list);

  return (
    <Wrap>
      <Left>
        <h2>일일 특가</h2>
        <h3>24시간 한정 특가</h3>
      </Left>

      <List>
        <Right>
          <div>
            <ImgContainer
              onClick={() => {
                navigate("/detail/64");
                window.scrollTo(0, 0);
              }}
            >
              <a href="">
                <img
                  src={
                    "https://img-cf.kurly.com/shop/data/goods/1637155079598i0.jpg"
                  }
                />
                <CartIcon></CartIcon>
              </a>
            </ImgContainer>

            <TextWrap>
              <ProductSubTitle>
                믿고 먹을 수 있는 상품을 합리적인 가격에, KF365
              </ProductSubTitle>
              <ProductTitle>
                [KF365] 김구원선생 국내산 무농약 콩나물 300g
              </ProductTitle>
              <CostBox>
                <ProductPrice>900원</ProductPrice>
                {/* <SalePrice>{props.Price}원</SalePrice> */}
              </CostBox>
            </TextWrap>
          </div>
        </Right>
        <Right>
          <div>
            <ImgContainer
              onClick={() => {
                navigate("/detail/531");
                window.scrollTo(0, 0);
              }}
            >
              <a href="">
                <img
                  src={
                    "https://img-cf.kurly.com/shop/data/goods/1637922958237i0.jpg"
                  }
                />
                <CartIcon></CartIcon>
              </a>
            </ImgContainer>
            <TextWrap>
              <ProductSubTitle>
                트러플의 영양을 가득 담은 마스크팩
              </ProductSubTitle>
              <ProductTitle>
                [달바] 화이트 트러플 너리싱 트리트먼트 마스크 2종
              </ProductTitle>
              <CostBox>
                <Sale>66%</Sale>
                <ProductPrice>1,700원</ProductPrice>
                <SalePrice>5,000원</SalePrice>
              </CostBox>
            </TextWrap>
          </div>
        </Right>
      </List>
    </Wrap>
  );
};

Oneday.defaultProps = {
  SubTitle: "뜨끈한 국물이 필요할때",
  Title: "[고래사어묵] 김치 우동 전골",
  Img: "https://img-cf.kurly.com/shop/data/goods/1644900782348l0.jpg",
  Sale: "30",
  Price: "9,900",
  SalePrice: "6,930",
};

const Wrap = styled.div`
  display: flex;
  margin: 5% auto;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 80px 0px;
`;

const List = styled.div`
  width: 694px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 337px;
  & h3 {
    font-size: 16px;
    color: rgb(153, 153, 153);
    font-weight: normal;
    line-height: 1.3;
    letter-spacing: normal;
    margin-bottom: 24px;
  }
`;
const Right = styled.div`
  margin-right: 50px;
`;

const ImgContainer = styled.div`
  display: flex;
  margin: 0px -9px;
  & a {
    width: 335px;
    height: 434px;
    position: relative;
    display: block;
    overflow: hidden;
  }
  & img {
    position: relative;
    width: 100%;
    height: 100%;
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
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  font-size: 20px;
  margin-right: 6px;
`;

const ProductPrice = styled.span`
  font-weight: 700;
  color: #333;
  letter-spacing: 0;
  font-size: 20px;
  line-height: 29px;
  margin-right: 5px;
`;

const SalePrice = styled.span`
  color: rgb(153, 153, 153);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-decoration: line-through;
  margin-top: 2px;
`;

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

const ProductSubTitle = styled.p`
  font-size: 14px;
  color: rgb(153, 153, 153);
  line-height: 1.38;
  margin-bottom: 4px;
`;

const CartIconWrap = styled.div`
  position: absolute;
  z-index: 300;
  display: block;
  right: 16px;
  bottom: 16px;
  width: 45px;
  height: 45px;
`;

export default Oneday;
