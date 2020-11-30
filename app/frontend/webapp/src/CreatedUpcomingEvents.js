import React, {useState} from 'react';
import {Button, Card, Row,} from "react-bootstrap";
import CModal from './modals/CModal.js'
import InviteModal from './modals/InviteModal.js'

const cards = [
    {
        title: "Bicycle",
        date: "01/01/2020",
        type: "online",
        location: "Punjab, India",
        places: "15",
    },
    {
        title: "Football",
        date: "02/02/2020",
        type: "offline",
        location: "Kazan, Russia",
        places: "152",
    },
    {
        title: "Running",
        date: "03/03/2020",
        type: "online",
        location: "Delhi, India",
        places: "32",
    },
    {
        title: "Running",
        date: "05/04/2020",
        type: "offline",
        location: "Punjab, India",
        places: "4198",
    },
]


const CreatedUpcomingEvents = () => {
    const [showCModal, setShowCModal] = useState(false)
    const [showInviteModal, setShowInviteModal] = useState(false)

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
                            <div className="d-flex col-12 col-md-8 px-0">
                            <Button 
                                    className="w-50"
                                    onClick={() => setShowCModal(true)}
                                    style={{marginRight: 15}}
                                    variant="primary"
                                    >
                                    Cancel
                                    </Button>
                            <Button
                                        className="w-50"
                                        onClick={() => setShowInviteModal(true)}
                                        variant="primary"
                                        >
                                        Invite Others
                                        </Button>
                                            </div>
                            
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>
            {showCModal && <CModal showModal={showCModal} showModalCallback={(status) => setShowCModal(status)}/>}
            {showInviteModal &&
            <InviteModal showModal={showInviteModal} showModalCallback={(status) => setShowInviteModal(status)}/>}
        </div>
    );
};

export default CreatedUpcomingEvents;