import { styled } from "linaria/react";
import { css } from "linaria";
import React from "react";
import ReactDOM from "react-dom";
import test from "test";

const styles = css`
  font-size: 12px;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  color: ${test.color};
`;

const App = () => <Title className={styles}>Hello world!</Title>;

ReactDOM.render(<App />, document.getElementById("root"));
