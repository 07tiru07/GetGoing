import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ReactComponent as LogoIcon} from "./g2-logo.svg";
import React from "react";

const MastHead = () => {
    return (
        <Navbar style={{backgroundColor: "#0076ce"}} expand="lg">
            <Navbar.Brand style={{color: "white"}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <LogoIcon height={40} width={40}/>
                    &nbsp;
                    <b>GetGoing</b>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" href="/" style={{color: "white"}}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/fitness" href="/fitness" style={{color: "white"}}>
                        Fitness
                    </Nav.Link>
                    <NavDropdown title={<span style={{color: "white"}}>My Stuff</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/joined_events">My Joined Events</NavDropdown.Item><NavDropdown.Divider/>
                        <NavDropdown.Item href="/created_events">My Created Events</NavDropdown.Item><NavDropdown.Divider/>
                        <NavDropdown.Item href="/rewards">My Rewards</NavDropdown.Item><NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">My Recognition</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/register" href="/register" style={{color: "white"}}>
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MastHead;
