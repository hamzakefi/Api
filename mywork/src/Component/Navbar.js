import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  return (
    <div>


    
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Welcame</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/Admin'>Admin</Nav.Link>
            <Nav.Link href='/User'>Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>




    </div>
  )
}

export default Navbars