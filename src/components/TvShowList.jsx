import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TVShows = () => {
  const [tvshows, setTvshows] = useState([]);
  const [search, setSearch] = useState("");

  // Load all TV shows initially
  useEffect(() => {
    fetch("http://localhost:8080/media/tvshows")
      .then((res) => res.json())
      .then((data) => setTvshows(data))
      .catch((err) => {
        console.error("Failed to fetch TV shows:", err);
      });
  }, []);

  // Fetch filtered data from backend when search changes
  useEffect(() => {
    if (search.trim() === "") {
      fetch("http://localhost:8080/media/tvshows")
        .then((res) => res.json())
        .then((data) => setTvshows(data))
        .catch((err) => console.error(err));
    } else {
      fetch(`http://localhost:8080/media/search?title=${search}`)
        .then((res) => res.json())
        .then((data) => {
          const onlyTV = data.filter(item => item.category === "tv");
          setTvshows(onlyTV);
        })
        .catch((err) => console.error("Search failed:", err));
    }
  }, [search]);

  return (
    <Container className="my-5">
      <h2 className="mb-4">All TV Shows</h2>

      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search TV shows..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      <Row xs={1} sm={2} md={4} lg={4} xl={4} xxl={4} className="g-4">
        {tvshows.map((show) => (
          <Col key={show.id}>
            <Link to={`/details/${show.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`/tvshows/${show.poster}`}
                  alt={show.title}
                  style={{
                    height: '450px',
                    width: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '0.5rem',
                    borderTopRightRadius: '0.5rem'
                  }}
                />
                <Card.Body>
                  <Card.Title className="text-center" style={{ fontSize: '1rem' }}>{show.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TVShows;
