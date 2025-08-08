import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch all movies initially
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/media/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.error("Failed to fetch movies:", err);
      });
  }, []);

  // Fetch from backend whenever search changes
  useEffect(() => {
    if (search.trim() === "") {
      
      // If search is empty, show all movies again
      fetch(`${process.env.REACT_APP_API_BASE_URL}/media/movies`)
        .then((res) => res.json())
        .then((data) => setMovies(data))
        .catch((err) => console.error(err));
    } else {
      
      // Fetch from /media/search?title=
      fetch(`${process.env.REACT_APP_API_BASE_URL}/media/search?title=${search}`)
        .then((res) => res.json())
        .then((data) => {
          
          // Filter only movies (backend may return tv too)
          const filtered = data.filter(item => item.category === "movie");
          setMovies(filtered);
        })
        .catch((err) => console.error("Search failed:", err));
    }
  }, [search]);

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
        {movies.map((movie) => (
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
