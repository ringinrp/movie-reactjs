import React from "react";
import {Navbar, Container, Nav, NavbarBrand} from 'react-bootstrap';

const NavigationBar = () => {
    return (
    <Navbar variant="dark">
       <Container>
        <Navbar.Brand href="/">WowFilm</Navbar.Brand>
        <Nav>
            <Nav.Link href="#tranding">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
        </Nav>
       </Container>
    </Navbar>
    );
}
export default NavigationBar;
