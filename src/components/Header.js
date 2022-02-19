import React from "react";
import styled from "styled-components";




const Header = (props) => {

  return (
    <React.Fragment>
      <Grid>
        <HeaderMenu>
          <React.Fragment>
            <li>
              회원가입
            </li>
            <li>
              로그인
            </li>
            <li>고객센터 ▼</li>
          </React.Fragment>

          <React.Fragment>
            <li>소진님</li>
            <li>로그아웃</li>
          </React.Fragment>

        </HeaderMenu>

        <Logo></Logo>

        <HeaderCategory>
          <CategoryIcon></CategoryIcon>
          <li>전체 카테고리</li>
          <li >신상품</li>
          <li>베스트</li>
          <li>알뜰쇼핑 </li>
          <li> 특가/혜택</li>
          <Search placeholder="검색어를 입력해주세요."></Search>

          <CartIcon />
        </HeaderCategory>
      </Grid>
    </React.Fragment>
  );
};

const Grid = styled.div`
  display: block;
  max-width: 1050px;
  margin: 0 auto;
  text-align: center;
`;

const HeaderMenu = styled.ul`
  display: flex;
  font-size: 11px;
  justify-content: flex-end;
  cursor: pointer;
  list-style: none;
  margin: 0pc;
  /* position : absolute; */
  & li {
    padding: 0px 24px 0px 0px;
    position: relative;
    right: 13px;
    top: 16px;
    height: 5px;
  }
  & .signup {
    color: #5f0080;
  }
`;

const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 2%;
  width: 104px;
  max-width: 100%;
  margin-left: -60px;
  height: 79px;
  background-image: url("https://res.kurly.com/images/marketkurly/logo/logo_x2.png");
  background-size: cover;
  cursor: pointer;
  /* background-position: center; */
`;

const HeaderCategory = styled.ul`
  display: flex;
  padding: 0px;
  font-weight: bold;
  margin-top: 90px;
  cursor: pointer;
  list-style-type: none;
  padding: 7px 75px 0px 0px;
  & li {
    padding: 7px 75px 0px 0px;
    display: block;
    text-align: center;
    cursor: pointer;
    line-height: 20px;
    
    &:hover {
      color: purple;
      text-decoration: underline;
    }
  }
  & .all-category::before {
    content: url("https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png");
    position: relative;
    top: 2px;
    margin-right: 13px;
  }
`;
// const HeaderInput = styled.input`

// `

const CartIcon = styled.span`
display: block;
  margin-left: 1000px;
  position: absolute;
  width: 36px;
  height: 36px;
  top: 6.63em;
  background-image: url("https://res.kurly.com/pc/service/common/2011/ico_cart.svg");
  &:hover {
    background-image: url("https://res.kurly.com/pc/service/common/2011/ico_cart_on.svg?v=1");
}
`
const Search = styled.input`
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
  background-image: "https://res.kurly.com/pc/service/common/1908/ico_search_x2.png";
  outline: none;
  width: 235px;
  height: 35px;
  padding: 0 60px 0 14px;
  margin-bottom: 2PX;
  letter-spacing: -1px;
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 12px;
  color: #666;
  line-height: 16px;
  
`;

const CategoryIcon = styled.span`
    background: url(https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off_x2.png) no-repeat 0 0;
    background-size: 16px 14px;
    float: left;
    width: 16px;
    height: 14px;
    margin: 10px 14px 0 0;
`



export default Header;