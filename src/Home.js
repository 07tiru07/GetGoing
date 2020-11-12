import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as MastHeadIcon } from "./SuccessIcon.svg";

const Home = () => {
  return (
    <div className="vertical-center-container">
      <Container>
        <Row>
          <Col sm={4}>
            <MastHeadIcon height={250} width={250} />
          </Col>
          <Col sm={8}>
            <h3 style={{ color: "#808080" }}>Get Going !!!</h3>
            <h4 style={{ color: "#444444" }}>Lets be Fit Together</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
