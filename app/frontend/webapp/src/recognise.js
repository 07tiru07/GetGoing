import React, { useState } from 'react';
import { Button, Container, Row, Col, Alert,} from "react-bootstrap";
import { ReactComponent as Certificate1 } from "./cet1.svg";
import { ReactComponent as Certificate2 } from "./Cet2.svg";
import ShareModal from './smodal.js'

const Recognise = () => {

  const [showSModal, setShowSModal] = useState(false)
  return (
    <Container >
      <Row>
        <Col sm={2}>
          <h3> Recognition</h3>
        </Col>
        <Col sm={6} ></Col>
        <Col sm={4}>
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
        <Col sm={1}> </Col>
        <Col sm={5}>
          <Certificate1 />
          <Button className="w-75" variant="primary" block>
            CLAIM YOUR CERTIFICATES!!!
                         </Button>
          <Button className="w-75"
            onClick={() => setShowSModal(true)}
            style={{ marginRight: 15 }}
            variant="secondary"
            block
          >
            SHARE WITH OTHERS!!!
                   </Button>
        </Col>

        <Col sm={5}>
          <Certificate2  />
          <Button className="w-75" variant="primary" block>
            CLAIM YOUR CERTIFICATES!!!
                         </Button>
          <Button className="w-75"
            onClick={() => setShowSModal(true)}
            style={{ marginRight: 15 }}
            variant="secondary"
            block

          >
            SHARE WITH OTHERS!!!
                   </Button>
        </Col>
        <Col sm={1} ></Col>
      </Row>
      <Row>
        <Col sm={1}> </Col>

      </Row>
      {showSModal && <ShareModal showModal={showSModal} showModalCallback={(status) => setShowSModal(status)} />}



    </Container>
  );
};

export default Recognise