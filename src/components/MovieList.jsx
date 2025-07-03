import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => {
        const onlyMovies = data.filter(item => item.category === "movie");
        setMovies(onlyMovies);
      });
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="my-5">
      <h2 className="mb-4">All Movies</h2>

      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      <Row xs={1} sm={2} md={4} lg={4} xl={4} xxl={4} className="g-4">
        {filteredMovies.map((movie) => (
          <Col key={movie.id}>
            <Link to={`/details/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`/movies/${movie.poster}`}
                  alt={movie.title}
                  style={{
                    height: '400px',
                    width: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '0.5rem',
                    borderTopRightRadius: '0.5rem'
                  }}
                />
                <Card.Body>
                  <Card.Title className="text-center" style={{ fontSize: '1rem' }}>{movie.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
