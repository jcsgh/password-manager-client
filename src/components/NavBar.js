import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="App">
            <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="black" variant="dark">
                <ReactBootStrap.Navbar.Brand href="/">Password Manager</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <Link to="/">
                            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                        </Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="/About">
                            About
                        </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        </div >
    )
}

export default NavBar;


