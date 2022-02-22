import React from "react";
import styled from "styled-components";
// import { Button, Input } from "../elements"

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // useState를 이용하여 아이디와 비밀번호의 값을 redux로 보내줄 준비

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
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
    <LoginBox>
      <div>
      <h3>로그인</h3>
      </div>
      <div>
      <Input
        placeholder="아이디를 입력해주세요"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      </div>

      <div>
      <Input
        placeholder="비밀번호를 입력해주세요"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      </div>

      <div>
      <Input
        type="checkbox"
        color="#4f4f4f"
        bold
        size="13px"
        margin="0 0 0px 6px"
      >
        보안접속
      </Input>
      </div>

      <div>
        <Text color="#4f4f4f" bold size="13px" margin="0">
        아이디 찾기
      </Text>
      <Text color="#4f4f4f" bold size="13px" margin="0 0 0 4px">
        | 비밀번호 찾기
      </Text>
      </div>

      <div><button onClick={login}>로그인</button></div>
      <div><button>회원가입</button></div>
    </LoginBox>
  );
};

const Input = styled.div`
  width: 302px;
  height: 44px;
  padding: 0 14px;
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 20px;
  border-radius: 3px;
  background: #fff;
  vertical-align: top;
`;

const Text = styled.div`
color: black;
`;

const LoginBox = styled.div`
color: black;
`;


export default Login;
