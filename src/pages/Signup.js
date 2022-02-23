import React from "react";
import styled from "styled-components";
import { Text, Button, Input } from "../elements/element";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {
  usernameCheck,
  pwdCheck,
  nicknameCheck,
  emailCheck,
} from "../shared/common";

const Signup = (props) => {
  const dispatch = useDispatch();

  //아이디, 비밀번호, 비밀번호 확인, 이름, 이메일 확인
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [email, setEmail] = React.useState("");

  //아이디, 이메일 중복검사
  const [username_check, setUsernameCheck] = React.useState(false);
  const [email_check, setEmailCheck] = React.useState(false);

  // const checkUsername = (e) => {
  //   setUsername(e.target.value);
  //   if (username_check) {
  //     setUsernameCheck(false);
  //   }
  // };
  // console.log("username : ", username);
  // console.log("password: ", password);
  // console.log("passwordCheck : ", passwordCheck);
  // console.log("nickname: ", nickname);
  // console.log("email: ", email);

  // const checkEmail = (e) => {
  //   setEmail(e.target.value);
  //   if (email_check) {
  //     setEmailCheck(false);
  //   }
  // };
  // console.log("email_check : ", email_check);

  const checkUsername = () => {
    if (!usernameCheck(username)) {
      alert("아이디 형식이 맞지 않습니다!");
      return;
    }
    dispatch(userActions.usernameCheckF(username));
  };

  const checkEmail = () => {
    if (!emailCheck(email)) {
      alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    dispatch(userActions.emailCheckF(email));
  };

  //회원가입 시 입력 누락된 내역 있을 시 alert 띄워줌
  const signup = () => {
    if (
      username === "" ||
      password === "" ||
      passwordCheck === "" ||
      email === "" ||
      nickname === ""
    ) {
      window.alert("입력하지 않은 칸이 있습니다!!");
      return;
    }

    // 아이디, 이메일 중복검사
    // if (!username_check || !email_check) {
    //   window.alert("아이디나 이메일의 중복검사가 되지 않았습니다!");
    // }

    //회원가입 시 아이디, 비밀번호, 비밀번호 확인, 이름, 이메일 유효성 검사
    if (!usernameCheck(username)) {
      window.alert("아이디 형식이 맞지 않습니다!");
      return;
    }

    if (!pwdCheck(password)) {
      window.alert("비밀번호 형식이 맞지 않습니다!");
      return;
    }

    if (password !== passwordCheck) {
      window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
      return;
    }

    if (!nicknameCheck(nickname)) {
      window.alert("이름 형식이 맞지 않습니다!");
      return;
    }

    if (!emailCheck(email)) {
      window.alert("잘못된 이메일 형식입니다!");
      return;
    }

    //signupDB에 회원가입 시 입력한 내역들을 보내주기
    dispatch(
      userActions.signupDB(username, password, passwordCheck, email, nickname)
    );
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <RequiredBox>
        <Text size="12px" color="#666666">
          <CheckSpan>*</CheckSpan>필수입력사항
        </Text>
      </RequiredBox>
      <Line />
      <SignupTable>
        <tbody>
          <tr>
            <td>
              아이디<CheckSpan>*</CheckSpan>
            </td>
            <td>
              <Input
                placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                padding="14px"
                width="332px"
                _onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Button
                bold
                size="14px"
                bg="#ffffff"
                color="#5f0080"
                width="120px"
                padding="13px 14px"
                margin="8px"
                disabled={username_check ? true : false}
                _onClick={() => checkUsername()}
              >
                중복확인
              </Button>
              {username !== "" && !usernameCheck(username) && (
                <InfoUl className="checkId">
                  <li>• 6자 이상의 영문 혹은 영문과 숫자를 조합</li>
                  <li>• 아이디 중복확인</li>
                </InfoUl>
              )}
              {username !== "" && usernameCheck(username) && (
                <InfoUl className="checkId">
                  <li>✓ 6자 이상의 영문 혹은 영문과 숫자를 조합</li>
                  <li>• 아이디 중복확인</li>
                </InfoUl>
              )}
            </td>
          </tr>

          <tr>
            <td>
              비밀번호<CheckSpan>*</CheckSpan>
            </td>
            <td>
              <Input
                placeholder="비밀번호를 입력해주세요"
                // type="password"
                padding="14px"
                width="332px"
                _onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {password !== "" && !pwdCheck(password) && (
                <InfoUl className="checkPw">
                  <li>• 10글자 이상 입력</li>
                  <li>
                    • 영문/숫자/특수문자(공백 제외)만 허용, 2개 이상의 조합
                  </li>
                  <li>• 동일한 숫자 3개 이상 연속 사용 불가</li>
                </InfoUl>
              )}
              {password !== "" && pwdCheck(password) && (
                <InfoUl className="checkPw">
                  <li>✓ 10글자 이상 입력</li>
                  <li>
                    ✓ 영문/숫자/특수문자(공백 제외)만 허용, 2개 이상의 조합
                  </li>
                  <li>✓ 동일한 숫자 3개 이상 연속 사용 불가</li>
                </InfoUl>
              )}
            </td>
          </tr>
          <tr>
            <td>
              비밀번호확인<CheckSpan>*</CheckSpan>
            </td>
            <td>
              <Input
                placeholder="비밀번호를 한번 더 입력해주세요"
                type="password"
                padding="14px"
                width="332px"
                _onChange={(e) => {
                  setPasswordCheck(e.target.value);
                }}
              />
              {password !== "" && !pwdCheck(passwordCheck) && (
                <InfoUl className="ReCheckPw">
                  <li>• 동일한 비밀번호를 입력해주세요.</li>
                </InfoUl>
              )}
              {password !== "" && pwdCheck(passwordCheck) && (
                <InfoUl className="ReCheckPw">
                  <li>✓ 동일한 비밀번호를 입력해주세요.</li>
                </InfoUl>
              )}
            </td>
          </tr>

          <tr>
            <td>
              이름<CheckSpan>*</CheckSpan>
            </td>
            <td>
              <Input
                placeholder="이름을 입력해주세요"
                padding="14px"
                width="332px"
                _onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              이메일<CheckSpan>*</CheckSpan>
            </td>
            <td>
              <Input
                placeholder="예: marketkurly@kurly.com"
                padding="14px"
                width="332px"
                _onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Button
                bold
                size="14px"
                bg="#ffffff"
                color="#5f0080"
                width="120px"
                padding="13px 14px"
                margin="8px"
                _onClick={() => {
                  if (!emailCheck(email)) {
                    alert("잘못된 이메일 형식입니다");
                    return false;
                  }
                  checkEmail();
                }}
              >
                중복확인
              </Button>
            </td>
          </tr>

          {/* 
      <div className="username">
        <input
          label="아이디"
          placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        /> */}

          {/* {username !== "" && !username(username) && (
        <text color="red">아이디 형식이 올바르지 않습니다!</text>
      )}
      {username !== "" && username(username) && (
        <text color="green">사용할 수 있는 아이디 형식입니다!</text>
      )} */}

          {/* <button
          width="100px"
          margin="0 0 0 10px"
          disabled={username_check ? true : false}
          onClick={() => checkUsername()}
        >
          중복확인
        </button> */}

          {/* <div className="password">
        <input
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        /> */}
          {/* {password !== "" && !pwdCheck(password) && (
        <div color="red">
          비밀번호는 최소 8자 이상으로 최소 하나의 문자, 하나의 숫자 및 하나의
          특수 문자를 포함하여야 합니다.
        </div>
      )} */}
          {/* {password !== "" && pwdCheck(password) && (
        <div color="green">올바른 비밀번호 형식입니다.</div>
      )} */}
          {/* </div>
      <div className="password-check">
        <input
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력해주세요"
          type="password"
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />
      </div> */}

          {/* <div className="name">
        <input
          label="이름"
          placeholder="이름을 입력해주세요"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        ></input>
      </div> */}

          {/* <div className="email">
        <input
          label="이메일"
          placeholder="예: marketkurly@kurly.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        /> */}
          {/* {username !== "" && !emailCheck(username) && (
        <div color="red">이메일 형식이 올바르지 않습니다!</div>
      )}
      {username !== "" && emailCheck(username) && (
        <div color="green">사용할 수 있는 이메일 형식입니다!</div>
      )} */}
          {/* <button
          width="100px"
          height="45px"
          margin="0 0 0 10px"
          disabled={email_check ? true : false}
          onClick={() => checkEmail()}
        >
          중복확인
        </button>
      </div> */}
        </tbody>
      </SignupTable>
      <Button width="240px" _onClick={() => signup()}>
        가입하기
      </Button>
    </Container>
  );
};

Signup.defaultProps = {};

const Container = styled.div`
  width: 640px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  padding: 5px 0px 120px 0px;
`;

const Title = styled.h3`
  font-size: 28px;
  text-align: center;
  margin-top: 10px;
`;

const RequiredBox = styled.div`
  text-align: right;
  width: 100%;
  margin: 10px 0px 0px 0px;
`;

const CheckSpan = styled.span`
  color: #ee6a7b;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333333;
  margin-top: -2px;
`;

const SignupTable = styled.table`
  margin-top: 10px;
  padding-bottom: 49px;
  width: 100%;
  & tr {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
  }
  & td {
    position: relative;
    padding-bottom: 16px;
  }
  & td:nth-child(1) {
    box-sizing: border-box;
    padding: 15px 0px 0px 18px;
    width: 152px;
    vertical-align: top;
  }
`;

const InfoUl = styled.ul`
  font-size: 12px;
  color: #666666;
  position: relative;
  left: -37px;
  font-weight: 400;
  list-style: none;
  margin-top: 4px;
`;

export default Signup;
