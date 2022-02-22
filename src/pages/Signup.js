import React from "react";
import styled from "styled-components";
// import { Button, Input } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {
  usernameCheck,
  pwdCheck,
  nicknameCheck,
  emailCheck,
} from "../shared/common";
import axios from "axios";

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

  // const usernameCheckF = async () => {
  //   try {
  //     let check = await axios.post(
  //       "http://13.124.130.158/api/join/nicknameCheck",
  //       { username: username }
  //     );
  //     if (check.data.ok === true) {
  //       setUsernameCheck(check.data.ok);
  //       alert(check.data.message);
  //     } else if (check.data.ok === false) {
  //       alert(check.data.errorMessage);
  //     }
  //   } catch (err) {
  //     alert("이미 등록된 아이디입니다.");
  //   }
  // };

  // const emailCheckF = async () => {
  //   if (emailCheck(email)) {
  //     try {
  //       let check = await axios.post(
  //         "http://13.124.130.158/api/join/emailCheck",
  //         {
  //           email: email,
  //         }
  //       );
  //       if (check.data.ok === true) {
  //         setEmailCheck(check.data.ok);
  //         alert(check.data.message);
  //       } else if (check.data.ok === false) {
  //         alert(check.data.errorMessage);
  //       }
  //     } catch (err) {
  //       alert("이미 등록된 이메일입니다. 다시 작성해 주십시요!");
  //     }
  //   } else if (!emailCheck(email)) {
  //     alert("잘못된 이메일 형식입니다.");
  //   }
  // };

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

    // if (!username_check || !email_check) {
    //   window.alert("아이디나 이메일의 중복검사가 되지 않았습니다!");
    // }

    // if (!usernameCheck(username)) {
    //   window.alert("아이디 형식이 맞지 않습니다!");
    //   return;
    // }

    // // if (!pwdCheck(password)) {
    // //   window.alert("비밀번호 형식이 맞지 않습니다!");
    // //   return;
    // // }

    // if (password !== passwordCheck) {
    //   window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
    //   return;
    // }

    // // if (!nicknameCheck(nickname)) {
    // //   window.alert("이름 형식이 맞지 않습니다!");
    // //   return;
    // // }

    // if (!emailCheck(email)) {
    //   window.alert("잘못된 이메일 형식입니다!");
    //   return;
    // }

    //signupDB에 회원가입 시 입력한 내역들을 보내준다.
    dispatch(
      userActions.signupDB(username, password, passwordCheck, email, nickname)
    );
  };

  //나중에 각 항목마다 span태그 해주기
  return (
    <Container>
      <h3>회원가입</h3>
      <div>
        <span color="red">*</span>필수입력사항
      </div>

      <div className="username">
        <input
          label="아이디"
          placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {/* {username !== "" && !username(username) && (
        <text color="red">아이디 형식이 올바르지 않습니다!</text>
      )}
      {username !== "" && username(username) && (
        <text color="green">사용할 수 있는 아이디 형식입니다!</text>
      )} */}
        <button
          width="100px"
          margin="0 0 0 10px"
          disabled={username_check ? true : false}
          onClick={() => checkUsername()}
        >
          중복확인
        </button>
      </div>

      <div className="password">
        <input
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {/* {password !== "" && !pwdCheck(password) && (
        <div color="red">
          비밀번호는 최소 8자 이상으로 최소 하나의 문자, 하나의 숫자 및 하나의
          특수 문자를 포함하여야 합니다.
        </div>
      )} */}
        {/* {password !== "" && pwdCheck(password) && (
        <div color="green">올바른 비밀번호 형식입니다.</div>
      )} */}
      </div>
      <div className="password-check">
        <input
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력해주세요"
          type="password"
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />
      </div>

      <div className="name">
        <input
          label="이름"
          placeholder="이름을 입력해주세요"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        ></input>
      </div>

      <div className="email">
        <input
          label="이메일"
          placeholder="예: marketkurly@kurly.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {/* {username !== "" && !emailCheck(username) && (
        <div color="red">이메일 형식이 올바르지 않습니다!</div>
      )}
      {username !== "" && emailCheck(username) && (
        <div color="green">사용할 수 있는 이메일 형식입니다!</div>
      )} */}
        <button
          width="100px"
          height="45px"
          margin="0 0 0 10px"
          disabled={email_check ? true : false}
          onClick={() => checkEmail()}
        >
          중복확인
        </button>
      </div>
      <button onClick={() => signup()}>가입하기</button>
    </Container>
  );
};

Signup.defaultProps = {};

const Container = styled.div`
  text-align: center;
  input {
    height: 5vh;
  }
`;

export default Signup;
