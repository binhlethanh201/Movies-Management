import { useEffect, useState } from "react";
import { Col, Row, Container, Table } from "react-bootstrap";
import { useSearchParams, useNavigate , } from "react-router-dom";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [stars, setStars] = useState([]);
  const [producers, setProducers] = useState([]);
  const [genres, setGenres] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9999/movies")
      .then((response) => response.json())
      .then((result) => {
        setMovies(result);
        setFilteredMovies(result);

        const allGenres = result.flatMap((m) => m.genres);
        const uniqueGenres = [...new Set(allGenres)];
        setGenres(uniqueGenres);
      })
      .catch((error) => console.error(error));

    fetch("http://localhost:9999/producers")
      .then((response) => response.json())
      .then((result) => setProducers(result))
      .catch((error) => console.error(error));

    fetch("http://localhost:9999/directors")
      .then((response) => response.json())
      .then((result) => setDirectors(result))
      .catch((error) => console.error(error));

    fetch("http://localhost:9999/stars")
      .then((response) => response.json())
      .then((result) => setStars(result))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const directorId = searchParams.get("director-id");
    const genre = searchParams.get("genre");

    if (directorId) {
      filterByDirector(directorId);
    } else if (genre) {
      filterByGenre(genre);
    } else {
      setFilteredMovies(movies); 
    }
  }, [searchParams, movies]);

  const filterByDirector = (directorId) => {
    navigate(`?director-id=${directorId}`);
    const filtered = movies.filter((m) => String(m.director) === String(directorId));
    setFilteredMovies(filtered);
  };

  const filterByGenre = (genre) => {
    navigate(`?genre=${genre}`);
    const filtered = movies.filter((m) => m.genres.includes(genre));
    setFilteredMovies(filtered);
  };

  const showAllMovies = () => {
    navigate(`/movie`);
    setFilteredMovies(movies);
  };


   const removeStar = (movieId, starId) => {
    const confirmation = window.confirm("Are you sure you want to remove this star?");
    if (!confirmation) return;

    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        return {
          ...movie,
          stars: movie.stars.filter((id) => id !== starId),
        };
      }
      return movie;
    });

 
    fetch(`http://localhost:9999/movies/${movieId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stars: updatedMovies.find((m) => m.id === movieId).stars }),
    })
      .then(() => {
        alert("Star removed successfully!");
        window.location.reload(); 
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Row>
        <h1 style={{ textAlign: "center" }}>React Application</h1>
      </Row>
      <hr />
      <Row>
        <nav style={{ textAlign: "center", padding: "10px" }}>
         
          {genres.map((genre, index) => (
            <a
              key={index}
              onClick={() => filterByGenre(genre)}
              style={{ cursor: "pointer", margin: "0 15px", color: "blue", textDecoration: "underline" }}
            >
              {genre}
            </a>
          ))}
        </nav>
      </Row>
      <hr />

      <Row>
        <Col md={2}>
          <h4>Directors</h4>
          {directors?.map((d) => (
            <ul key={d?.id}>
              <li
                onClick={() => filterByDirector(d.id)}
                style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
              >
                {d?.fullname}
              </li>
            </ul>
          ))}
        </Col>

        <Col md={10}>
          <h2 style={{ textAlign: "center" }}>List of movies</h2>
          <a onClick={showAllMovies}
            style={{ cursor: "pointer", margin: "0 15px", color: "blue", textDecoration: "underline" }}
          >
            Show All Movies
          </a>
          <Table className="table table-hover table-striped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Release</th>
                <th>Description</th>
                <th>Producer</th>
                <th>Director</th>
                <th>Genres</th>
                <th>Stars</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies.map((m) => (
                <tr key={m?.id}>
                  <td>{m?.id}</td>
                  <td>{m?.title}</td>
                  <td>{m?.release}</td>
                  <td>{m?.description}</td>
                  <td>{producers.find((p) => p.id == m.producer)?.name}</td>
                  <td>{directors.find((d) => d.id == m.director)?.fullname}</td>
                  <td>{m?.genres?.join(", ")}</td>
                  <td>
                    {stars.length > 0 &&
                      m?.stars?.map((starId) => {
                        const star = stars.find((s) => s.id == starId);
                        return (
                          <div key={starId}>
                            {starId} - {star?.fullname || "Unknown"} -
                            <a href="#" onClick={(e) => {e.preventDefault();removeStar(m.id, starId);}}>Remove</a>
                          </div>
                        );
                      })}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Movie;
