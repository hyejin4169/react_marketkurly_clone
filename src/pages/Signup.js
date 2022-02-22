import React from "react";
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

  const checkUsername = (e) => {
    setUsername(e.target.value);
    if (username_check) {
      setUsernameCheck(false);
    }
  };
  console.log("username : ", username);

  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (email_check) {
      setEmailCheck(false);
    }
  };
  console.log("email_check : ", email_check);

  const usernameCheckF = async () => {
    try {
      let check = await axios.post(
        "http://13.124.130.158/api/user/signup/username",
        {
          "username": username,
        }
      ).then((res) => {
        console.log("res다", res)
      })
      if (check.data.ok === false) {
        setUsernameCheck(check.data.ok);
        alert(check.data.message);
      } else if (check.data.ok === true) {
        alert(check.data.errorMessage);
      }
    } catch (err) {
      alert("이미 등록된 아이디입니다.");
    }
  };

  const emailCheckF = async () => {
    if (emailCheck(email)) {
      try {
        let check = await axios.post("http://13.124.130.158/api/user/signup/email");
        if (check.data.ok === false) {
          setEmailCheck(check.data.ok);
          alert(check.data.message);
        } else if (check.data.ok === true) {
          alert(check.data.errorMessage);
        }
      } catch (err) {
        alert("이미 등록된 이메일입니다. 다시 작성해 주십시요!");
      }
    } else if (!emailCheck(email)) {
      alert("잘못된 이메일 형식입니다.");
    }
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

    // if (!username_check || !email_check) {
    //   window.alert("아이디나 이메일의 중복검사가 되지 않았습니다!");
    // }

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

    // if (!nicknameCheck(nickname)) {
    //   window.alert("이름 형식이 맞지 않습니다!");
    //   return;
    // }

    if (!emailCheck(email)) {
      window.alert("잘못된 이메일 형식입니다!");
      return;
    }

    //signupDB에 회원가입 시 입력한 내역들을 보내준다.
    dispatch(
      userActions.signupDB(username, password, passwordCheck, email, nickname)
    );
  };
  //나중에 각 항목마다 span태그 해주기
  return (
    <React.Fragment>
      <h3>회원가입</h3>

        <span color="red">*</span>필수입력사항
      <line />
      <input
        label="아이디"
        placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
        onChange={(e) => setUsername(e.target.value)}
      />
      {(() => { 
        console.log("username : " , username)
        console.log("usernameCheck : ", usernameCheck(username))
        if(username !== "" & !usernameCheck(username)){ 
          return(
            <text color="red">아이디 형식이 올바르지 않습니다!</text>
           ) 
          }else if(username !== "" & usernameCheck(username)){ 
            return(
              <text color="green">사용할 수 있는 아이디 형식입니다!</text>
             ) } 
            return null; })()}
      {/* {username !== "" && !usernameCheck(username) && (
        <text color="red">아이디 형식이 올바르지 않습니다!</text>
      )}
      {username !== "" && usernameCheck(username) && (
        <text color="green">사용할 수 있는 아이디 형식입니다!</text>
      )} */}
      <button
        width="100px"
        margin="0 0 0 10px"
        disabled={username_check ? true : false}
        onClick={usernameCheckF}
      >
        중복확인
      </button>

      <input
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {password !== "" && !pwdCheck(password) && (
        <td color="red">
          비밀번호는 최소 8자 이상으로 최소 하나의 문자, 하나의 숫자 및 하나의
          특수 문자를 포함하여야 합니다.
        </td>
      )}
      {password !== "" && pwdCheck(password) && (
        <td color="green">올바른 비밀번호 형식입니다.</td>
      )}
      <input
        label="비밀번호 확인"
        placeholder="비밀번호를 한번 더 입력해주세요"
        type="password"
        onChange={(e) => {
          setPasswordCheck(e.target.value);
        }}
      />

      <input
        label="이름"
        placeholder="이름을 입력해주세요"
        onClick={(e) => {
          setNickname(e.target.value);
          console.log(e.target.value);
        }}
      ></input>

      <input
        label="이메일"
        placeholder="예: marketkurly@kurly.com"
        onChange={checkEmail}
      />
      {username !== "" && !emailCheck(username) && (
        <td color="red">이메일 형식이 올바르지 않습니다!</td>
      )}
      {username !== "" && emailCheck(username) && (
        <td color="green">사용할 수 있는 이메일 형식입니다!</td>
      )}
      <button
        width="100px"
        height="45px"
        margin="0 0 0 10px"
        disabled={email_check ? true : false}
        onClick={emailCheckF}
      >
        중복확인
      </button>

      <button onClick={signup}>가입하기</button>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
