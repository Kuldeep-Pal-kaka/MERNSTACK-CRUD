import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table , Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
   const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/user");
        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging Line
        setUsers(data);
      } catch (error) {
        console.error("Error while fetching the users:", error.message);
      }
    };
  
    fetchUsers();
  }, []);

  const handleUpdate =(userId)=>{
    navigate(`/user/${userId}`);

  }
  

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Dashboard Component</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>


              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                    <Button 
                      variant="dark"
                      onClick={() => handleUpdate(user._id)}
                    >

                      Update
                    </Button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
