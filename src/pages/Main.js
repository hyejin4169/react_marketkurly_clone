import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../svg/slack_logo.svg";

const Main = () => {
  return (
    <HeaderContainer>

    </HeaderContainer>
  );
};

const Container = styled.div`
  text-align: center;

  svg {
    width: 8rem;
    height: 8rem;
  }
`;

const HeaderContainer = styled.div`
color : "red"

`

export default Main;
