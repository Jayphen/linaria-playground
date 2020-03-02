import { styled } from "linaria/react";
import { css } from "linaria";
import React from "react";
import ReactDOM from "react-dom";
import test from "test";

const styles = css`
  font-size: 12px;
`;
const overrideStyles = css`
  && {
    font-size: 12px;
  }
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  color: ${test.color};
`;

const App = () => {
  return (
    <>
      <Title className={styles}>My size is never applied</Title>
      <Title className={overrideStyles}>Mine is tho</Title>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
