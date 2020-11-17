import React from 'react';
import {Form, Button, Container} from "react-bootstrap";
import {ReactComponent as LogoIcon} from "./g2-logo.svg";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <Container className={"d-flex align-items-center justify-content-center flex-column h-100"}>
            <LogoIcon height={70} width={70} className={"mb-4"}/>
            <h2 style={{marginBottom: 20}}>
                Unlimited free access <br/> to the world's best fun
            </h2>
            <Form style={{minWidth: 300}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>

                <Link to="/fitness">
                    <Button style={{minWidth: 300, backgroundColor: "#0076ce"}} variant="primary" type="submit">
                        Sign up
                    </Button>
                </Link>

                <h6 style={{marginTop: 30, textAlign: "center", color: "#000000"}}>
                    Already a member?<span> </span>
                    <Link to="/login"><a href="/login"><b style={{color:"#0076ce"}}>Log in</b></a></Link>
                </h6>

            </Form>
        </Container>
    );
};

export default Register;