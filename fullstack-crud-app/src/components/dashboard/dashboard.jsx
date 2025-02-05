import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table , Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
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

// const result = await Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#d33",
//   cancelButtonColor: "#3085d6",
//   confirmButtonText: "Yes, delete it!",
// });

const result = await Swal.fire({
  title: "Are you sure?",
  html: `
  <div style="color: #52e0c4; font-size: 40px;">
  </div>
  <p style="color: #52e0c4;">You won't be able to revert this!</p>
`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#52e0c4", // Confirm button color
  cancelButtonColor: "#3085d6",  // Cancel button color
  confirmButtonText: "Yes, delete it!",
  background: "#0a192f", // Background color
  color: "#52e0c4", // Text color
  customClass: {
    popup: "custom-swal-popup",
    title: "custom-swal-title",
    htmlContainer: "custom-swal-text",
    confirmButton: "custom-swal-confirm",
    cancelButton: "custom-swal-cancel"
  }
});

if (result.isConfirmed) {
  try {
    const response = await fetch(`http://localhost:4000/api/user/${userId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      Swal.fire({
        title: "Deleted!",
        html: `
        <div style="color: #52e0c4; font-size: 40px;">
        </div>
        <p style="color: #52e0c4;">User has been deleted successfully!</p>
      `,
      icon: "success",
        background: "#0a192f",  // Dark background
        color: "#52e0c4",  // Text color
        confirmButtonColor: "#52e0c4",  // Confirm button color
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          confirmButton: "custom-swal-confirm",
        },
      });

      fetchUsers(); // Refresh user list after deletion
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to delete user.",
        icon: "error",
        background: "#0a192f",
        color: "#52e0c4",
        confirmButtonColor: "#52e0c4",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          confirmButton: "custom-swal-confirm",
        },
      });
    }
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Something went wrong.",
      icon: "error",
      background: "#0a192f",
      color: "#52e0c4",
      confirmButtonColor: "#52e0c4",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        confirmButton: "custom-swal-confirm",
      },
    });

    console.error("Error while deleting user:", error.message);
  }
}


// if (result.isConfirmed) {
//   try {
//     const response = await fetch(`http://localhost:4000/api/user/${userId}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       Swal.fire("Deleted!", "User has been deleted.", "success");
//       fetchUsers(); // Refresh user list after deletion
//     } else {
//       Swal.fire("Error!", "Failed to delete user.", "error");
//     }
//   } catch (error) {
//     Swal.fire("Error!", "Something went wrong.", "error");
//     console.error("Error while deleting user:", error.message);
//   }
// }


};
// try {
//   const response = await fetch(`http://localhost:4000/api/user/${userId}`
// ,{
//     method:"DELETE"
//   });
//   console.log(response);
//   if(response.ok){
//         fetchUsers();
//   }
// } catch (error) {
//   console.error("Error while Deleting users:", error.message);
// }
// }


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
