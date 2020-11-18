import React, { useState } from 'react';
import { Button, Card, Row, ButtonGroup,} from "react-bootstrap";
import LModal from './LModal.js'
import RModal from './RModal.js'

const cards = [
    {
        title: "Event Name",
        date: "01/01/2020",
        type: "online",
        location: "Punjab, India",
        places: "15",
    },
    {
        title: "Event Name",
        date: "02/02/2020",
        type: "offline",
        location: "Kazan, Russia",
        places: "152",
    },
    {
        title: "Event Name",
        date: "03/03/2020",
        type: "online",
        location: "Delhi, India",
        places: "32",
    },
    {
        title: "Event Name",
        date: "05/04/2020",
        type: "offline",
        location: "Punjab, India",
        places: "4198",
    },
]


const UpcomingE = () => {
        const [showModal, setShowModal] = useState(false)
        const [showRecoModal, setShowRecoModal] = useState(false)

    return (
        <div className="container py-1">
            <Row>
                {cards.map((card, index) => (<div key={index} className="col-md-6 p-1">
                    <Card>
                        <Card.Header>
                            {card.title}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {"Date: " + card.date}
                            </Card.Text>
                            <Card.Text>
                                {"Type: " + card.type}
                            </Card.Text>
                            <Card.Text>
                                {"Location: " + card.location}
                            </Card.Text>
                            <Card.Text>
                                {"Seats left: " + card.places}
                            </Card.Text>
                            <ButtonGroup className="mr-2" aria-label="First group">
                            <Button
                            type="button" 
                            id=""
                            className="mb-2"
                             //   style={{width: "200px"}}
                            onClick={() => setShowModal(true)} style={{ marginRight: 15 }} 
                            variant="primary">Leave</Button>
                            </ButtonGroup>
                            <ButtonGroup className="mr-2" aria-label="Second group">
                            <Button
                            type="button" 
                            id=""
                            className="mb-2"
                             //   style={{width: "100px"}}
                            onClick={() => setShowRecoModal(true)}
                            style={{ marginRight: 15 }} 
                            variant="primary">Recommend</Button>
                                </ButtonGroup>  
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>
            {showModal && <LModal showModal={showModal} showModalCallback={(status) => setShowModal(status)}/>}
            {showRecoModal && <RModal showModal={showRecoModal} showModalCallback={(status) => setShowRecoModal(status)}/>}
             </div>
    );
};

export default UpcomingE;