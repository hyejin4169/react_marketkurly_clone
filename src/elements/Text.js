import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    bold,
    hover,
    padding,
    color,
    menuBar,
    height,
    size,
    margin,
    children,
    center,
    width,
    _onClick,
  } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    center: center,
    height: height,
    width: width,
    hover: hover,
    padding: padding,
  };

  if (menuBar) {
    return (
      <P2 {...styles} onClick={_onClick}>
        {children}
      </P2>
    );
  }

  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  center: false,
  menuBar: false,
  hover: false,
  padding: false,
  _onClick: () => {},
};

const P = styled.p`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  // text-align: ${(props) => props.center};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.center ? `text-align: ${props.center}` : "")};
  /* &: hover { cursor: ${(props) => props.hover}; } */
  ${(props) => (props.is_flex ? `{ cursor : pointer; }` : "")}
`;

const P2 = styled.p`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: ${(props) => props.center};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  /* &: hover {
      cursor : pointer;
      color : #5f0080;
    } */
`;

export default Text;
