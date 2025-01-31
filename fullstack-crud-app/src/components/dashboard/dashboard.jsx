import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table , Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'

const Dashboard = () => {
  const [users, setUsers] = useState([]);
   const navigate = useNavigate();

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

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdate =(userId)=>{
    navigate(`/user/${userId}`);
  }
  
const handleDelete =  async (userId) =>{
console.log(`/user/${userId}`);
try {
  const response = await fetch(`http://localhost:4000/api/user/${userId}`
,{
    method:"DELETE"
  });
  console.log(response);
  if(response.ok){
        fetchUsers();
  }
} catch (error) {
  console.error("Error while Deleting users:", error.message);
}
}




  return (
    <div className="dashboard-container">
      <Container>
        <Row>
          <Col>
            <h1 className="title">Dashboard Component</h1>
             
            {users.length === 0 ? (
              <p className="no-data-message">No records found. Please add new data to get started...</p>
            ) : (

            <Table striped bordered hover className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th className="actions">Actions</th>
                </tr>
              </thead>

          

              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td className="buttons">
                      <Button onClick={() => handleUpdate(user._id)}>Update🖉
                      </Button>
                      <Button onClick={() => handleDelete(user._id)}>Delete🗑️</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
