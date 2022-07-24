import React, { Component } from "react";
import Movies from "./Movies";
import Series from "./Series";
import styled from "styled-components";

const Star = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class App extends Component {
  render() {
    return (
      <Star>
        <Movies />
        <Series />
      </Star>
    );
  }
}
