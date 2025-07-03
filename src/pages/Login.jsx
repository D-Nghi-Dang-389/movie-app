import { Form, Button, Container, Card } from 'react-bootstrap';

const Login = () => (
  <div style={{ backgroundColor: '#0d2235', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Card style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
      <h4 className="text-center mb-4">Sign In to Movies</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="mb-3 text-end">
          <a href="#" style={{ fontSize: '0.9rem' }}>Forgot your password?</a>
        </div>

        <Button variant="primary" className="w-100 mb-3" style={{ backgroundColor: '#007bff' }}>
          Sign In
        </Button>

        <Button variant="outline-primary" className="w-100 mb-3">
          Create a new account
        </Button>
      </Form>
    </Card>
  </div>
);

export default Login;
