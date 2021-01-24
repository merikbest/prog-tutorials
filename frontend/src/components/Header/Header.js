import React from 'react';
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

function Header(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Programming Tutorials</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/language" className="nav-link">Java</Link>
                        <Link to="" className="nav-link">JavaScript</Link>
                        <Link to="/language/add" className="nav-link">Add Language</Link>
                        <Link to="/topic/add" className="nav-link">Add Topic</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
