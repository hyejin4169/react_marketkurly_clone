import React from "react";
import styled from "styled-components";
import { Text, LoginBox } from "../elements/element";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // useState를 이용하여 아이디와 비밀번호의 값을 redux로 보내줄 준비

  const changeUsername = (e) => {
    setUsername(e);
  };

  const changePassword = (e) => {
    setPassword(e);
  };

  const login = () => {
    if (username === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      // 아이디와 비밀번호를 입력하지 않을 경우 alert 띄움
      return;
    } else {
      dispatch(userActions.loginDB(username, password));
    }
    // redux의 loginDB에 id, pwd를 보내줌
  };

  return (
    <React.Fragment>
      <LoginWrap>
        <Text
          bold
          margin="70px auto 34px"
          size="22px"
          width="100%"
          center="center"
        >
          로그인
        </Text>

        <LoginBox
          value={username}
          placeholder="아이디를 입력해주세요"
          _onChange={(e) => {
            changeUsername(e.target.value);
          }}
        />

        <LoginBox
          value={password}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          _onChange={(e) => {
            changePassword(e.target.value);
          }}
        />
          <CheckWrap>
          <Check/>
          <Text color="#4f4f4f" size="13px" margin="0 0 0px 6px">
            {" "}
            보안접속
          </Text>
          </CheckWrap>

          <FindStyle>
          <Text
            color="#4f4f4f"
            size="13px"
            margin="0"
            float="left"
            font-size="13px"
          >
            아이디 찾기
          </Text>
          <Text color="#4f4f4f" size="13px" margin="0 0 0 4px">
            | 비밀번호 찾기
          </Text>
        </FindStyle>

        <ButtonLogin
          onClick={() => {
            login();
          }}
        >
          <Text color="#ffffff" size="16.5px" margin="1px 0 0 0">
            로그인
          </Text>
        </ButtonLogin>

        <ButtonSignup
          onClick={() => {
            navigate("/signup");
          }}
        >
          <Text color="#5f0081" size="16px" margin="1px 0 0 0">
            회원가입
          </Text>
        </ButtonSignup>
      </LoginWrap>
    </React.Fragment>
  );
};

const LoginWrap = styled.div`
  margin: 0px auto 100px 0px;
  justify-content: center;
  text-align: center;
`;

const CheckWrap = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 463px;
`;

const Check = styled.input`
  width: 10px;
  height: 12px;
  border-radius: 3px;
  border: 1px solid #8c8c8c;
  background-size: 16px 17px;
  color: #8c8c8c;
`;

const FindStyle = styled.ul`
  display: flex;
  justify-content: end;
  margin-right: 463px;
  margin-top: -20px;
  margin-bottom: 30px;
`;

const ButtonLogin = styled.button`
  margin: 10px auto;
  width: 27%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
`;

const ButtonSignup = styled.button`
  margin: 10px auto;
  width: 27%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #ffffff;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
`;

export default Login;
