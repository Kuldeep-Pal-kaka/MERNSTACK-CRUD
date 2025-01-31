import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css"; // Import the CSS file

const MyNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand className="logo" as={Link} to="/">
          CRUD APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links ml-auto">
            <Nav.Link className="nav-links" as={Link} to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link className="nav-links" as={Link} to="/user">
              Post User
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default MyNavbar;


// import { useState } from "react";
// import { Navbar, Container, Nav, Form  } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { MoonFill, SunFill } from "react-bootstrap-icons"; // Bootstrap Icons
// import "./header.css"; // Import the CSS file

// const MyNavbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark-theme");
//   };

//   return (
//     <Navbar className={`custom-navbar ${darkMode ? "dark-navbar" : ""}`} expand="lg">
//       <Container>
//         <Navbar.Brand className="logo" as={Link} to="/">
//           CRUD APP
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="links ml-auto">
//             <Nav.Link className="nav-links" as={Link} to="/">
//               Dashboard
//             </Nav.Link>
//             <Nav.Link className="nav-links" as={Link} to="/user">
//               Post User
//             </Nav.Link>
//           </Nav>

//           {/* Dark Mode Toggle */}
//           <Form className="d-flex align-items-center ms-3">
//             <Form.Check 
//               type="switch"
//               id="dark-mode-toggle"
//               label={darkMode ? <SunFill size={20} /> : <MoonFill size={20} />}
//               onChange={toggleDarkMode}
//             />
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MyNavbar;

