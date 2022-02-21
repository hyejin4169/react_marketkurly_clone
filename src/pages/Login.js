import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";

//svg
// import { ReactComponent as Logo } from "../svg/slack_logo.svg";

const Login = () => {
  return (
    <Container>
      {/* <Logo /> */}
      <h1>LOGIN 페이지</h1>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

export default Login;
