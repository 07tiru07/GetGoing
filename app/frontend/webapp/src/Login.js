import React from 'react';
import {Form, Button, Container} from "react-bootstrap";
import {ReactComponent as LogoIcon} from "./g2-logo.svg";
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    return (
        <Container className={"d-flex align-items-center justify-content-center flex-column h-100"} style={{marginTop: 100}}>
            <LogoIcon height={70} width={70} className={"mb-4"}/>
            <h2 style={{marginBottom: 20}}>
                Log in to see more
            </h2>
            <Form style={{minWidth: 300}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>

                    <Button  onClick={()=>{
                        Cookies.set('watched',true)
                        history.push('/')}} style={{minWidth: 300, backgroundColor: "#0076ce"}} variant="primary" type="submit">
                        Log in
                    </Button>

                <Link to="/">
                    <h6 style={{color: "#000000", marginTop: 20, textAlign: "center"}}>
                        <span>Forgot your password?</span>
                    </h6>
                </Link>

            </Form>
        </Container>
    );
};

export default Login;