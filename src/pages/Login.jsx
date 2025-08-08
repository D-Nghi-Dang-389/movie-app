import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error("Invalid credentials");
        return res.json();
      })
      .then(data => {
        setUser(data);
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        navigate("/dashboard");
      })
      .catch(err => setError(err.message));
  };

  return (
    <div style={{ backgroundColor: '#0d2235', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
        <h4 className="text-center mb-4">Sign In to Movies</h4>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="mb-3 text-end">
            <a href="#" style={{ fontSize: '0.9rem' }}>Forgot your password?</a>
          </div>

          <Button variant="primary" type="submit" className="w-100 mb-3" style={{ backgroundColor: '#007bff' }}>
            Sign In
          </Button>

          <Button
            variant="outline-primary"
            className="w-100 mb-3"
            onClick={() => navigate('/register')}
          >
            Create a new account
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
