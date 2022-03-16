import New from "./New"
import Passwords from "./Passwords"
import About from "./About"

import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
// import { About } from '../About/About'
// import { Favorites } from '../Favorites/Favorites'

// const Nav = () => {
//     return (
//         <div className="App">
//             <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="black" variant="dark">
//                 <ReactBootStrap.Navbar.Brand href="/">Password Manager</ReactBootStrap.Navbar.Brand>
//                 <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//                     <ReactBootStrap.Nav className="mr-auto">
//                         <Link to="/">
//                             <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
//                         </Link>
//                         <Link to="/Create">
//                             <ReactBootStrap.Nav.Link href="/">Create New</ReactBootStrap.Nav.Link>
//                         </Link>
//                         <Link to="/Passwords">
//                             <ReactBootStrap.Nav.Link href="/About">Passwords</ReactBootStrap.Nav.Link>
//                         </Link>
//                         <Link to="/About">
//                             <ReactBootStrap.Nav.Link eventKey={2} href="/About">
//                                 About
//                             </ReactBootStrap.Nav.Link>
//                         </Link>
//                     </ReactBootStrap.Nav>
//                 </ReactBootStrap.Navbar.Collapse>
//             </ReactBootStrap.Navbar>
//         </div>
//     )
// }

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/passwords">Passwords</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;


