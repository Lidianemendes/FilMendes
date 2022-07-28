import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Home from "./Pages/Home";
import "./styles.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #F94C66;
}
`;

const TitleTag = styled.div`
  margin: 1vh;
`;

const Título = styled.h1`
  font-family: "Bebas Neue", cursive;
  font-size: 45px;
  color: #bd4291;
  text-shadow: 2px 2px black;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Menu = styled.nav`
  background-color: #ffc54d;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 95vw;
  font-family: "Karla", sans-serif;
  font-size: 25px;
  font-weight: bolder;
  list-style: none;
`;
const List = styled.li`
  margin: 3vh;
  &:hover {
    transform: scale(1.2);
  }
`;

const Linking = styled(Link)`
  text-decoration: none;
  color: #bd4291;
  text-shadow: ;
  &:hover {
    cursor: pointer;
    color: #f94c66;
  }
`;

export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Menu>
          <Ul>
            <TitleTag>
              <Título>FILMENDES</Título>
            </TitleTag>
            <List>
              <Linking to="/home">Home</Linking>
            </List>
            <List>
              <Linking to="/movies">Movies</Linking>
            </List>
            <List>
              <Linking to="/series">Series</Linking>
            </List>
          </Ul>
        </Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Router>
    );
  }
}
