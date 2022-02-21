import React from "react";
import styled from "styled-components";
// import { ReactComponent as Logo } from "../svg/slack_logo.svg";

//elemetns
import { Button } from "../elements/element";

const Main = () => {
  return (
    <Container>
      <h1>메인페이지</h1>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;

  svg {
    width: 8rem;
    height: 8rem;
  }
`;

export default Main;
