import React, {useState} from 'react';
import {Button, Container, Row,Col,Alert, ButtonGroup, ButtonToolbar} from "react-bootstrap";
import ShareModal from './smodal.js'

const Recognise = () => {
        
        const [showSModal, setShowSModal] = useState(false)
        return (
            <Container fluid>
              <Row>
                  <Col sm={2}>
                  <h3> Recognition</h3>               
                  </Col>
                  <Col sm ={6} ></Col>
                  <Col sm={4}>
                  <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup aria-label="First Group">
                    <Button
                    type="button"
                    id=""
                    className="btn screening-cancel-button w-50 ml-2 btn-secondary"
                    variant="secondary"
                    >
                      My DashBoard</Button>
                    </ButtonGroup> 

                    <ButtonGroup aria-label="Second Group ">
                    <Button
                    type="button"
                    id=""
                    className="btn screening-cancel-button w-50 ml-2 btn-secondary"
                    variant="secondary"
                    >
                      Go To events</Button>
                        </ButtonGroup> 
                        </ButtonToolbar>      
                  </Col>
                  </Row>  
                   <Row>
                   <Col>
                   <Alert variant="success">
                  <Alert.Heading></Alert.Heading>
                    <p>You have been awarded with the following certificates(Claim/Share your certificates to inspire your friends)
                    </p>
                     </Alert>
                   </Col>
                       </Row>
                       <Row>
                       <Col sm ={1}> </Col>
                       <Col sm={5}>git
                       <img src="hyz.png" alt = "here are your certificates"/></Col>
                       <Col sm ={1} ></Col>
                        <Col sm ={5}>
                            <img src="hyz.png" alt= "here are your certificates"/>
                        </Col>
                       </Row>
                       <Row>
                       <Col sm ={1}> </Col>  
                       <Col sm={12}>
                         <Button variant="primary" size="lg" block>
                            CLAIM YOUR CERTIFICATES!!!
                         </Button>
                  <Button 
                  onClick={() => setShowSModal(true)}
                  style={{ marginRight: 15 }}
                  variant="secondary"
                  size="lg"
                  block
                  >
                      SHARE WITH OTHERS!!!
                   </Button>
                       </Col>
                       </Row>             
                       {showSModal && <ShareModal showModal={showSModal} showModalCallback={(status) => setShowSModal(status)}/>}
                 


              </Container>
            );
};

export default Recognise