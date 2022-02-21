import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션
const SET_USER = "SET_USER";
const OUT_USER = "OUT_USER";

// 액션 함수
const setUser = createAction(SET_USER, (user) => ({ user }));
const outUser = createAction(OUT_USER, () => ({}));

const initialState = {
  user: null,
  is_login: false,
};

const signupDB = (username, password, passwordCheck, nickname, email) => {
  return async function (dispatch, getState, { history }) {
    try {
      const signup = await axios.post("http://3.35.132.95/api/user/signup", {
        username: username,
        password: password,
        passwordCheck: passwordCheck,
        nickname: nickname,
        email: email,
        //회원가입 시 서버로 해당 값들 보냄
      });
      console.log(signup);
      if (signup.data.ok === true) {
        window.alert("성공적으로 회원가입하셨습니다!");
        history.replace("/login");
        //회원가입 완료 시 login 페이지로 이동
      } else if (signup.data.ok === false) {
        window.alert(signup.data.errorMessage);
        history.replace("/signup");
        //회원가입 실패 시 다시 signup 페이지로 이동
      }
    } catch (err) {
      alert("회원가입에 실패했습니다.");
      console.log(err);
    }
  };
};

const loginDB = (username, password) => {
  return async function (dispatch, getState, { history }) {
    console.log(history);
    try {
      const login = await axios.post("http://3.35.132.95/api/user/login", {
        username: username,
        password: password,
      });
      console.log(login);
      if (login.data.ok === true) {
        window.alert("로그인 되었습니다!");
        history.replace("/");
        //로그인 성공 시 메인으로 이동
        localStorage.setItem("token", login.data.token);
        // 회원가입 시 설정한 값을 localStorage에 저장
        dispatch(
          setUser({
            username: login.data.username,
          })
        );
      } else if (login.data.ok === false) {
        window.alert("아이디와 비밀번호를 다시 확인해주세요.");
      }
    } catch (err) {
      window.alert("아이디와 비밀번호를 다시 확인해주세요.");
      console.log(err);
    }
  };
};

const loginCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    try {
      const check = await axios.get("http://3.35.132.95/api/auth", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        //헤더에 토큰 담기
      });
      if (check.data.ok === true) {
        dispatch(
          setUser({
            username: check.data.username,
          })
        );
      } else {
        dispatch(outUser());
      }
    } catch (err) {
      console.log("에러발생", err);
    }
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [OUT_USER]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem("token");
        //로그아웃 시 토큰 털어내기
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  setUser,
  outUser,
  signupDB,
  loginDB,
  loginCheckDB,
};

export { actionCreators };
