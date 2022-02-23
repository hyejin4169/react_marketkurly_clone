import React from "react";
import styled from "styled-components";
import { Text } from "../elements/element";

const LoginBox = (props) => {
  const { placeholder, margin, type, _onChange } = props;

  const styles = {
    margin: margin,
  };

  return (
    <React.Fragment>
      <ElLoginBox
        {...styles}
        onChange={_onChange}
        type={type}
        placeholder={placeholder}
      ></ElLoginBox>
    </React.Fragment>
  );
};

LoginBox.defaultProps = {
  margin: false,
  placeholder: "텍스트를 입력해주세요.",
  _onChange: () => {},
};

const ElLoginBox = styled.input`
  margin: 10px auto;
  display: block;
  border-radius: 3px;
  border: 1px solid #e0dede;
  width: 27%;
  max-width: 100%;
  height: 54px;
  padding: 0px 19px;
  box-sizing: border-box;
  letter-spacing: -0.05em;
  display: flex;
  justify-content: center;
  background-color: #fff;
  font-size: 14px;
  line-height: 20px;
  outline: none;
`;

export default LoginBox;
