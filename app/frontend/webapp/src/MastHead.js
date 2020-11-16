import {Navbar, Nav} from "react-bootstrap";
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
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default MastHead;
