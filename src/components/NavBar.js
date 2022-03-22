import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="Nav">
            <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="primary" variant="dark" class>
                <ReactBootStrap.Navbar.Brand href="/">Password Manager</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link eventKey={2} href="/about">
                            About
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="/register">
                            Register
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="/login">
                            Login
                        </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        </div >
    )
}

export default NavBar;


