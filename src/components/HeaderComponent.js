import React from 'react'
import { Container, Row, Col, Alert, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class HeaderComponent extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">FANBASE GACHA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        {
                            this.props.currentUser !== null ?
                            (
                                <Nav.Link href="#" onClick={() => {
                                    this.props.logoutUser();
                                    this.props.changeCoreConfig('stranger');
                                }}>Log Out</Nav.Link>
                            ) : null
                        }
                        
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default HeaderComponent;