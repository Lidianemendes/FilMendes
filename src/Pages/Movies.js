import React from "react";
import Axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Star = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 5%;
  color: #ffc54d;
`;
const Search = styled.input`
  widwidth: 14vw;
  height: 5vh;
  border-radius: 10px;
  padding-left: 0.5vw;
  font-size: 1rem;
  margin-top: 45px;
  margin-left: 20px;
  color: black;
`;
const StarMain = styled.div`
  background-color: #fad9a1;
  border: outset 2px #bd4291;
  width: 75%;
  height: 50vh;
  display: flex;
  align-items: center;
  margin-top: 3vh;
  border-radius: 5%;
`;
const Img = styled.img`
  height: 50vh;
`;
const StarTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const TitleTwo = styled.h2`
  width: 90%;
  color: #bd4291;
`;
const Overview = styled.p`
  width: 94%;
  font-size: 17px;
`;

const ApiFilms = Axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR"
});

export default class App extends React.Component {
  state = {
    listFilm: [],
    filmesFiltrados: []
  };
  async componentDidMount() {
    const response = await ApiFilms.get();
    console.log(response.data.results);
    const Films = response.data.results.map((item) => {
      return {
        ...item,
        poster: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });
    this.setState({
      listFilm: Films,
      filmesFiltrados: Films
    });
  }
  filtrarFilmes = (e) => {
    const { listFilm } = this.state;
    if (e.target.value === "") {
      this.Setstate({
        filmesFiltrados: listFilm
      });
      return;
    }
    const filmsFilter = listFilm.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
    });
    this.setState({
      filmesFiltrados: filmsFilter
    });
  };
  render() {
    return (
      <Container>
        <Star>
          <Title>Filmes</Title>
          <Search
            type="text"
            placeholder="Título"
            onChange={this.filtrarFilmes}
          />
        </Star>
        {this.state.filmesFiltrados.map((item) => (
          <StarMain>
            <Img
              src={item.poster}
              alt={`Capa do filme ${item.title}`}
              title={`Filme "${item.title}"`}
            />
            <StarTwo>
              <TitleTwo>{item.title}</TitleTwo>
              <Overview>{item.overview}</Overview>
            </StarTwo>
          </StarMain>
        ))}
      </Container>
    );
  }
}
