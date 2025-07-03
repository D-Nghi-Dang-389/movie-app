import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaRss } from 'react-icons/fa';

const Footer = () => (
  <footer style={{ backgroundColor: '#003153', color: 'white', paddingTop: '2rem', paddingBottom: '2rem' }}>
    <Container>
      <Row>
        <Col md={3}>
          <h6>Watch</h6>
          <ul className="list-unstyled">
            <li>Trending Now</li>
            <li>Movies</li>
            <li>TV Shows</li>
          </ul>
        </Col>
        <Col md={3}>
          <h6>My Account</h6>
          <ul className="list-unstyled">
            <li>Account</li>
            <li>Settings</li>
            <li>Manage Devices</li>
          </ul>
        </Col>
        <Col md={3}>
          <h6>Help Center</h6>
          <ul className="list-unstyled">
            <li>FAQ</li>
            <li>Jobs</li>
            <li>Support</li>
            <li>Forum</li>
          </ul>
        </Col>
        <Col md={3}>
          <h6>Contact Us</h6>
          <ul className="list-unstyled">
            <li>Email: <a href="mailto:dndang@myseneca.ca" style={{ color: 'lightblue' }}>dndang@myseneca.ca</a></li>
          </ul>
        </Col>
      </Row>
      
      <div className="pt-10 pb-10 border-t">
        <p className="text-sm">© Copyright {new Date().getFullYear()} Movies. All rights reserved.</p>
      </div>

      <Row className="mt-4 justify-content-end">
        <Col md="auto">
          <div className="d-flex gap-3">
            <FaLinkedinIn size={20} />
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaYoutube size={20} />
            <FaRss size={20} />
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
