import Container from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import SingleFilm from "./SingleFilm";

function MyFilms() {
  return (
    <>
      <Container bg="dark">
        <h2 style={{ color: "white" }}>Sonic</h2>
        <Row>
          <SingleFilm apiUrl="https://www.omdbapi.com/?apikey=2c86c45f&s=sonic" />
        </Row>
      </Container>
      <Container bg="dark">
        <h2 style={{ color: "white", paddingTop: "20px" }}>Harry Potter</h2>
        <Row>
          <SingleFilm apiUrl="https://www.omdbapi.com/?apikey=2c86c45f&s=harry%20potter" />
        </Row>
      </Container>
      <Container bg="dark">
        <h2 style={{ color: "white" }}>Saw</h2>
        <Row>
          <SingleFilm apiUrl="https://www.omdbapi.com/?apikey=2c86c45f&s=Saw" />
        </Row>
      </Container>
    </>
  );
}

export default MyFilms;
