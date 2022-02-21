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
    <React.Fragment>
      <h3>로그인</h3>
      <Input
        placeholder="아이디를 입력해주세요"
        _onChange={(e) => {
          changeUsername(e.target.value);
        }}
      />
      <Input
        placeholder="비밀번호를 입력해주세요"
        _onChange={(e) => {
          changePassword(e.target.value);
        }}
      />

      <Input
        type="checkbox"
        color="#4f4f4f"
        bold
        size="13px"
        margin="0 0 0px 6px"
      >
        보안접속
      </Input>
      <Text color="#4f4f4f" bold size="13px" margin="0">
        아이디 찾기
      </Text>
      <Text color="#4f4f4f" bold size="13px" margin="0 0 0 4px">
        | 비밀번호 찾기
      </Text>

      <button onClick={login}>로그인</button>
      <button>회원가입</button>
    </React.Fragment>
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
const Text = styled.div``;

export default Login;
