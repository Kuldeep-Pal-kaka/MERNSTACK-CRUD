import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./updateUser.css";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/user/${id}`);
        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging Line
        setFormdata(data);
      } catch (error) {
        console.error("Error while fetching the users:", error.message);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Updating User with Data:", formdata); // Debugging Line

    try {
      const response = await fetch(`http://localhost:4000/api/user/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update user");
      }

      const data = await response.json();
      console.log("User Updated:", data);
      navigate("/"); // Navigate after successful update
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
    <div className="center-form">
      <h1>Update User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formdata.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formdata.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formdata.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update User
        </Button>
      </Form>
    </div>
  );
};

export default UpdateUser;
