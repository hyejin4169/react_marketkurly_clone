import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props) => {
  const navigate = useNavigate();
  const islogin = useSelector((state) => state.user.is_login);

  return (
    <React.Fragment>
      <Grid>
        <UserMenu>
          <DeliveryIcon></DeliveryIcon>
          <React.Fragment>
            {!islogin && (
              <>
                <li
                  className="signup"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  회원가입
                </li>
                <li
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  로그인
                </li>
              </>
            )}
            {islogin && (
              <>
                <li
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  로그아웃
                </li>
              </>
            )}
            <li>고객센터 ▼</li>
          </React.Fragment>

          {/* <React.Fragment>
            <li>소진님</li>
            <li>로그아웃</li>
          </React.Fragment> */}
        </UserMenu>

        <LogoWrap>
          <div>
            <Logo
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        </LogoWrap>

        <CategoryWrap>
          <div>
            <HeaderCategory>
              <CategoryIcon></CategoryIcon>
              <li>전체 카테고리</li>
              <li>신상품</li>
              <li>베스트</li>
              <li>알뜰쇼핑 </li>
              <li> 특가/혜택</li>
              <SearchWrap>
                <Search placeholder="검색어를 입력해주세요."></Search>
                <SearchIcon></SearchIcon>
              </SearchWrap>
              <IconWrap>
                <LocationIcon />
                <HeartIcon />
                <CartIcon
                  onClick={() => {
                    navigate("/cart");
                  }}
                />
              </IconWrap>
            </HeaderCategory>
          </div>
        </CategoryWrap>
      </Grid>
    </React.Fragment>
  );
};

const Grid = styled.div`
  width: 1050px;
  margin: 0 auto;
`;

const UserMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;
  list-style: none;
  height: 11px;
  color: #4c4c4c;
  font-size: 12px;
  & li {
    position: relative;
    color: #4c4c4c;
    font-size: 12px;
  }
  & li::after {
    content: "";
    float: right;
    width: 1px;
    height: 13px;
    background-color: #d8d8d8;
    margin: 0 10px;
  }
  & li:last-child:after {
    content: none;
  }
  & .signup {
    color: #5f0080;
  }
`;

const DeliveryIcon = styled.span`
  position: absolute;
  width: 121px;
  height: 22px;
  background: url(https://res.kurly.com/pc/service/common/2011/delivery_210801.png)
    no-repeat;
  background-size: cover;

  left : 0;
`

const LogoWrap = styled.div`
    position: relative;
    height: 63px;
    margin: 0 auto;
   
`

const Logo = styled.div`
  position: absolute;
  left: 50%;
  bottom: 6px;
  width: 103px;
  height: 79px;
  margin-left: -60px;
  vertical-align: top;
  max-width: 100%;
  background: url("https://res.kurly.com/images/marketkurly/logo/logo_x2.png");
  background-size: cover;
  cursor: pointer;
`;



const HeaderCategory = styled.ul`
  display: flex;
  padding: 0px;
  height: 33px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  list-style-type: none;
  padding-bottom: 2px;

   & li {
     padding: 7px 57px 0px 0px;
     cursor: pointer;
     font-size: 16px;
     color: #333;
     line-height: 20px;

    &:hover {
      color: purple;
      text-decoration: underline;
    }
  }
  & .all-category::before {
    content: url("https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png")
      no-repeat;
    position: relative;
    top: 2px;
    margin-right: 10px;
  }
`;

const CategoryIcon = styled.span`
  background: url(https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off_x2.png)
    no-repeat 0 0;
  background-size: 16px 14px;
  width: 16px;
  height: 14px;
  margin-top: 7px;
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
`;
const CartIcon = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(https://res.kurly.com/pc/service/common/2011/ico_cart.svg);
  &:hover {
    background-image: url(https://res.kurly.com/pc/service/common/2011/ico_cart_on.svg?v=1);
  }
`;
const LocationIcon = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 18px;
  background: url(https://res.kurly.com/pc/ico/2008/ico_delivery_setting_done.svg)
    no-repeat 50% 50%;
`;
const HeartIcon = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 18px;
  background: url(https://res.kurly.com/pc/service/pick/btn-heart-off.svg)
    no-repeat 50% 50%;
  cursor: pointer;
`;

const SearchWrap = styled.div`
  position: relative;
`;

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
  margin-bottom: 2px;
  margin-left: -31px;
  letter-spacing: -1px;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 12px;
  color: #666;
  line-height: 16px;
`;

const SearchIcon = styled.div`
  background-image: url(https://res.kurly.com/pc/service/common/1908/ico_search_x2.png);
  background-size: 30px;
  position: absolute;
  right: 5px;
  top: 3px;
  width: 30px;
  height: 30px;
`;

export default Header;
