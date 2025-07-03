import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import "./FeaturedSection.css";

const FeaturedSection = ({ title, items, type }) => {
  const basePath = type === "movie" ? "/movies" : "/tvshows";

  return (
    <div className="featured-section">
      <div className="featured-header">
        <h4>{title}</h4>
        <Link to={`/${type === "movie" ? "movies" : "tv-shows"}`} className="featured-viewall">
          View All
        </Link>
      </div>

      <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <Card className="featured-card">
              <Link to={`/details/${item.id}`}>
                <Card.Img
                  variant="top"
                  src={`${basePath}/${item.poster}`}
                  className="featured-img"
                />
              </Link>
              <Card.Body className="p-2 text-center">
                <Card.Title className="featured-title mb-0">{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedSection;
