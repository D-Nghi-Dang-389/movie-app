import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';

const Register = () => (
  <div style={{ backgroundColor: '#0d2235', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Card style={{ width: '100%', maxWidth: '500px', padding: '2rem' }}>
      <h4 className="text-center mb-4">Create a New Account</h4>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="termsCheckbox">
          <Form.Check type="checkbox" label={
            <>I certify that I am at least 18 years old and that I agree to the <a href="#">Terms and Policies</a> and <a href="#">Privacy Policy</a>.</>
          } />
        </Form.Group>

        <Button variant="primary" className="w-100 mb-3" style={{ backgroundColor: '#007bff' }}>
          Sign Up
        </Button>

      </Form>
    </Card>
  </div>
);

export default Register;
