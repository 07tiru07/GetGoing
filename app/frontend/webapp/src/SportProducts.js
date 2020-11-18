import React from "react";
import {Button, Card, Container, Row} from "react-bootstrap";
import peeble from './fittracker.jpg'
import bulfyss from './bullfyss.jpg'
import walrus from './walrus.jpeg'
import kore from './kore.jpg'


const cards = [
    {
        image: peeble,
        name: "PEEBLE",
        description: "Peeble Kardio-Pfb01-B Fitness Tracker With Heart Rate Monitor",
        cost: "990 points",
    },
    {
        image: bulfyss,
        name: "BULFYSS",
        description: "Bulfyss Pull up Bar, Chin up Bar Door way Door Mounts",
        cost: "890 points",
    },
    {
        image: walrus,
        name: "WALRUS",
        description: "Walrus W4 Smart Fitness Band with Heart Rate Monitor Sport Activity Tracker",
        cost: "330 points",
    },
    {
        image: kore,
        name: "KORE",
        description: "Kore K-8kg Combo 2 Home Gym and Fitness Kit",
        cost: "1710 points",
    },
    {
        image: peeble,
        name: "PEEBLE",
        description: "Peeble Kardio-Pfb01-B Fitness Tracker With Heart Rate Monitor",
        cost: "990 points",
    },
    {
        image: bulfyss,
        name: "BULFYSS",
        description: "Bulfyss Pull up Bar, Chin up Bar Door way Door Mounts",
        cost: "890 points",
    },
    {
        image: walrus,
        name: "WALRUS",
        description: "Walrus W4 Smart Fitness Band with Heart Rate Monitor Sport Activity Tracker",
        cost: "330 points",
    },
    {
        image: kore,
        name: "KORE",
        description: "Kore K-8kg Combo 2 Home Gym and Fitness Kit",
        cost: "1710 points",
    },
]

const SportProducts = () => {
    return (
        <div className="container py-1">
            <Container className={"d-flex justify-content-center flex-column"}>
                <h3 style={{marginTop: 20}}>Sport Products</h3>
                <span style={{marginTop: 20, marginBottom: 20, backgroundColor: "#0076ce", color: "white", fontSize: 20}}>You have earned <b>400</b> points. Below are the ways to redeem your rewards.</span>
                <span>To earn more points, Host/Participate in events, Share your achievements/events in Social Media, Refer your friends</span>
            </Container>
            <div className="container py-1">
                <Row>
                    {cards.map((card, index) => (<div key={index} className="col-md-3 p-2">
                        <Card >
                            <Card.Body>
                                <div style={{minHeight: 300}}>
                                    <Card.Img src={card.image}/>
                                </div>
                                <div style={{minHeight: 150}}>
                                    <Card.Text >
                                        <h4>{card.name}</h4>
                                        <span>{card.description}</span>
                                        <h6 style={{marginTop: 10, color: "#0076ce"}}><b>{card.cost}</b></h6>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>))}
                </Row>
            </div>
        </div>
    );
};

export default SportProducts;