import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import "./Navbar.css";
class NavbarContainer extends Component {
    render() {
        return (
            <Navbar className="top-navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Text pullRight>
                    <Navbar.Link href="#profile-link">Profile</Navbar.Link>
                    <Navbar.Link href="#contact-link">Contact</Navbar.Link>
                    <Navbar.Link href="#projects-link">Projects</Navbar.Link>
                </Navbar.Text>
            </Navbar>
        );
    }
}
export default NavbarContainer;