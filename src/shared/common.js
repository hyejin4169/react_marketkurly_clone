// 아이디 형식: 알파벳 대소문자(a~z, A~Z), 숫자(0~9)를 포함한 6-20자리
export const usernameCheck = (username) => {
  let _reg = /^[a-z]+[a-z0-9]{5,19}$/;
  return _reg.test(username);
};

//비번: 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
export const pwdCheck = (pwd) => {
  let _reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  return _reg.test(pwd);
};

// 닉네임(이름) 형식: 한글 또는 알파벳 대소문자(a~z, A~Z)
// export const nicknameCheck = (nickname) => {
//   let _reg = /^[가-힣a-zA-Z]+$/;
//   return _reg.test(nickname);
// };

//이메일 형식
export const emailCheck = (email) => {
  let _reg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
  return _reg.test(email);
};
