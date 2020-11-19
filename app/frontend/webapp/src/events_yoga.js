import React from 'react';
import { Button, Card, Row, ButtonGroup,} from "react-bootstrap";
import CModal from './modals/CModal.js'
import InviteModal from './modals/InviteModal.js'

const cards = [
    {
        title: "Event Name",
        date: "xx/xx/20xx",
        mode: "online/offline",
        location: "xyz",
        places: "123",
    },

    {
    title: "Event Name",
    date: "xx/xx/20xx",
    mode: "online/offline",
    location: "xyz",
    places: "123",

    },

    {
        title: "Event Name",
        date: "xx/xx/20xx",
        mode: "online/offline",
        location: "xyz",
        places: "123",
    },

    {
        title: "Event Name",
        date: "xx/xx/20xx",
        mode: "online/offline",
        location: "xyz",
        places: "123",
    },
]


const events_yoga = () => {
        const [showCModal, setShowCModal] = (false)
        const [showInviteModal, setShowInviteModal] = (false)

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
                            {"Mode: " + card.mode}
                            </Card.Text>
                            <Card.Text>
                                {"Location: " + card.location}
                            </Card.Text>
                            <Card.Text>
                                {"Seats left: " + card.places}
                            </Card.Text>
                            <ButtonGroup className="mr-2" aria-label="First group">
                            <Button onClick={() => setShowCModal(true)} style={{ marginRight: 15 }}
                                variant="primary">Cancel</Button>
                                </ButtonGroup>
                            <ButtonGroup className="mr-2" aria-label="Second group">
                            <Button onClick={() => setShowInviteModal(true)} style={{ marginRight: 15 }}
                                    variant="primary">Invite Others</Button>
                                </ButtonGroup>
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>
            {showCModal && <CModal showModal={showCModal} showModalCallback={(status) => setShowCModal(status)}/>}
            {showInviteModal && <InviteModal showModal={showInviteModal} showModalCallback={(status) => setShowInviteModal(status)}/>}
             </div>
    );
};

export default events_yoga;