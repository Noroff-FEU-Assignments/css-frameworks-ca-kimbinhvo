import React from 'react';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Navigation(){
    return (
        <>   
        <Navbar bg="primary" expand="lg"> 
            <Navbar.Brand bg="secondary" href="#home" >The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">News</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Go</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
        </>     
    );
}

export default Navigation;