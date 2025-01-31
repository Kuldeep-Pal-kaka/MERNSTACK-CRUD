// import React, { useState } from 'react';
// import { Form  } from 'react-bootstrap';
// import './postUser.css';
// import { useNavigate } from 'react-router-dom';

// const PostUser = () => {

//   const navigate = useNavigate();
  
//   const [formdata , setformdata] = useState({
//     name:"",
//     email:"",
//     phone:""
//   });

//   const handleInputChange = (event) =>{
//     const {name , value } = event.target;
//   setformdata({
//     ...formdata,
//     [name]: value,
//   });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch("http://localhost:4000/api/user", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formdata),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to create user");
//       }
  
//       const data = await response.json();
//       console.log("User Created:", data);
//       navigate("/");  // Navigate to another page on success
//     } catch (err) {
//       console.error("Error:", err.message);  // Log specific error message
//     }
//   };
  


//   return (
//     <div>

//       <div className='center-form'>
//         <h1> Post New User</h1>
//            <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="formBasicName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" 
//         name="name"
//         placeholder="Enter your name"
//         value={formdata.name}
//         onChange={handleInputChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control 
//         type="email"
//         name="email"
//         placeholder="Enter your email"
//         value={formdata.email}
//         onChange={handleInputChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicPhone">
//         <Form.Label>Phone</Form.Label>
//         <Form.Control 
//         type="tel"
//         name="phone"
//          placeholder="Enter your phone number"
//          value={formdata.phone}
//          onChange={handleInputChange}
//          />
//       </Form.Group>

//       <button
//        className='post-user' type="submit">
//         Post User
//       </button>
//     </Form>
//     </div>
//       </div>
//   )
// }

// export default PostUser;



import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './postUser.css';
import { useNavigate } from 'react-router-dom';

const PostUser = () => {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create user");
      }

      const data = await response.json();
      console.log("User Created:", data);
      navigate("/"); // Navigate to another page on success
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
    <div className="center-form">
      <h1>Post New User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formdata.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formdata.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label className="form-label">Phone</Form.Label>
          <Form.Control
            className="form-control"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formdata.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <button className="post-user" type="submit">
          Post User
        </button>
      </Form>
    </div>
  );
};

export default PostUser;

