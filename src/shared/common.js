// 아이디 형식: 최소 6자 이상, 알파벳 소문자(a~z), 숫자(0~9)를 포함
export const usernameCheck = (username) => {
  let _reg = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){6,}$/;
  return _reg.test(username);
};

//비번: 10자 이상, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
export const pwdCheck = (pwd) => {
  let _reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
  return _reg.test(pwd);
};

// 닉네임(이름) 형식: 한글 또는 알파벳 대소문자(a~z, A~Z)
export const nicknameCheck = (nickname) => {
  let _reg = /^[가-힣a-zA-Z]+$/;
  return _reg.test(nickname);
};

// 이메일 형식
export const emailCheck = (email) => {
  let _reg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
  return _reg.test(email);
};
