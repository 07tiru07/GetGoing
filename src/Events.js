import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Card, Row } from "react-bootstrap";
import Modal from './Model.js'

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


const Events = () => {
    const [showModal, setShowModal] = useState(false)

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
                            <Button onClick={() => setShowModal(true)} style={{ marginRight: 15 }}
                                variant="primary">Join</Button>
                            <Link to="/events">
                                <Button
                                    variant="primary">Recommend</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>
            {showModal && <Modal showModal={showModal} showModalCallback={(status) => setShowModal(status)}/>}
        </div>
    );
};

export default Events;