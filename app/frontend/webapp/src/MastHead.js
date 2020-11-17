import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ReactComponent as LogoIcon} from "./g2-logo.svg";
import {ReactComponent as UserIcon} from "./user.svg";

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
                    <Link to="/">
                        <Nav.Link href="/" style={{color: "white"}}>
                            Home
                        </Nav.Link>
                    </Link>
                    <Link to="/fitness">
                        <Nav.Link href="/fitness" style={{color: "white"}}>
                            Fitness
                        </Nav.Link>
                    </Link>
                    <NavDropdown title="My Stuff" id="basic-nav-dropdown">
        <NavDropdown.Item href="/MJE">My Joined Events</NavDropdown.Item><NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">My Created Events</NavDropdown.Item><NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">My Rewards</NavDropdown.Item><NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">My Recognition</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        </Navbar>  
    );
};

export default MastHead;   
                
