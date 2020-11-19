import React, {useState} from 'react';
import {Card, Row,} from "react-bootstrap";
import LModal from './modals/LModal.js'
import RModal from './modals/RModal.js'

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

const UpcomingEvents = () => {
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
    <div className="col-12 px-0 col-sm-3 d-flex py-3">
                   <button
                      type="button"
                      id=""
                      className="btn w-50 btn-primary"
                      onClick={() => setShowModal(true)} style={{marginRight: 15}}
                    >
                      Leave
                    </button>
                    <button
                      type="button"
                      id=""
                      className="btn screening-cancel-button w-50 ml-2 btn-secondary"
                      onClick={() => setShowRecoModal(true)} style={{marginRight: 15}}
                    >
                      Recommend
                    </button>
    </div>
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>
            {showModal && <LModal showModal={showModal} showModalCallback={(status) => setShowModal(status)}/>}
            {showRecoModal &&
            <RModal showModal={showRecoModal} showModalCallback={(status) => setShowRecoModal(status)}/>}
        </div>
    );
};

export default UpcomingEvents;