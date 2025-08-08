import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the terms and policies.");
      return;
    }

    //Validate the email format
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error("Email already exists, please try another one.");
        return res.json();
      })
      .then(data => {
        alert("Registration successful!");
        navigate("/login");
      })
      .catch(err => alert(err.message));
  };

  return (
    <div style={{ backgroundColor: '#0d2235', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card style={{ width: '100%', maxWidth: '500px', padding: '2rem' }}>
        <h4 className="text-center mb-4">Create a New Account</h4>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="termsCheckbox">
            <Form.Check
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              label={
                <>I certify that I am at least 18 years old and that I agree to the <a href="#">Terms and Policies</a> and <a href="#">Privacy Policy</a>.</>
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-3" style={{ backgroundColor: '#007bff' }}>
            Sign Up
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
