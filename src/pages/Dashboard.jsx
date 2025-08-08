import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div
      style={{
        backgroundColor: '#0d2235',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card style={{ width: '100%', maxWidth: '500px', padding: '2rem' }}>
        <h4 className="text-center mb-4">Your Profile</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 'bold' }}>First Name</Form.Label>
            <Form.Control type="text" value={user.firstName} readOnly />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 'bold' }}>Last Name</Form.Label>
            <Form.Control type="text" value={user.lastName} readOnly />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 'bold' }}>Email</Form.Label>
            <Form.Control type="email" value={user.email} readOnly />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
            <Form.Control type="password" value="********" readOnly />
          </Form.Group>

          <Button variant="danger" className="w-100" onClick={handleLogout}>
            Logout
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Dashboard;
