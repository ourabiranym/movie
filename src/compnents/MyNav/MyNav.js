import React, { useState } from "react";
import { Navbar, Container, Button, Modal } from "react-bootstrap";

const MyNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie Neight</Navbar.Brand>
          <Button variant="warning" onClick={handleShow}>
            Add Movie
          </Button>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder="Enter the title" />
          <input type="text" placeholder="Enter the poster URL" />
          <input type="text" placeholder="Enter the Description" />
          <input type="number" placeholder="Enter the rating" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyNav;
