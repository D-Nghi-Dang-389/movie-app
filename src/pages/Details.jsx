import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const Details = () => {
  const { id } = useParams(); //Get media ID from URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/media/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Item not found");
        return res.json();
      })
      .then((data) => setItem(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  const baseFolder = item.category === "movie" ? "/movies" : "/tvshows";
  const posterPath = `${baseFolder}/${item.poster}`;

  return (
    <div
      style={{
        backgroundImage: `url(${posterPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'none',
        position: 'relative',
        minHeight: '100vh',
        color: 'white'
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1
        }}
      ></div>

      {/* Content */}
      <Container style={{ position: 'relative', zIndex: 2, paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Row className="align-items-center">
          <Col md={3} className="text-center mb-4 mb-md-0">
            <Image
              src={posterPath}
              alt={item.title}
              fluid
              rounded
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </Col>

          <Col md={9}>
            <h2>{item.title}</h2>
            <p><strong>Genre:</strong> {item.genre}</p>
            <p><strong>Duration:</strong> {item.duration}</p>
            <p><strong>Release:</strong> {item.release}</p>
            <p><strong>Language:</strong> {item.language}</p>
            <p>{item.synopsis}</p>
            <div className="d-flex gap-3 mt-4">
              <Button variant="primary">Rent ${item.rentPrice}</Button>
              <Button variant="outline-light">Buy ${item.buyPrice}</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
