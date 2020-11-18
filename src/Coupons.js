import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import coupon1 from './coupon1.jpg';
import coupon2 from './coupon2.jpg';
import coupon3 from './coupon3.jpeg';
import coupon4 from './coupon4.jpeg';


const cards = [
    {
        image: coupon1,
        name: "COUPON 1",
        description: "Coupon that give you one month membership",
        cost: "120 points",
    },
    {
        image: coupon2,
        name: "COUPON 2",
        description: "Coupon that give you one month membership",
        cost: "400 points",
    },
    {
        image: coupon3,
        name: "COUPON 3",
        description: "Coupon that give you one month membership",
        cost: "50 points",
    },
    {
        image: coupon4,
        name: "COUPON 5",
        description: "Coupon that give you one month membership",
        cost: "210 points",
    },
    {
        image: coupon1,
        name: "COUPON 1",
        description: "Coupon that give you one month membership",
        cost: "120 points",
    },
    {
        image: coupon2,
        name: "COUPON 2",
        description: "Coupon that give you one month membership",
        cost: "400 points",
    },
    {
        image: coupon3,
        name: "COUPON 3",
        description: "Coupon that give you one month membership",
        cost: "50 points",
    },
    {
        image: coupon4,
        name: "COUPON 5",
        description: "Coupon that give you one month membership",
        cost: "210 points",
    },
]

const Coupons = () => {
    return (
        <div className="container py-1">
            <Container className={"d-flex justify-content-center flex-column"}>
                <h3 style={{marginTop: 20}}>Coupons</h3>
                <span style={{marginTop: 20, marginBottom: 20, backgroundColor: "#0076ce", color: "white", fontSize: 20}}>You have earned <b>400</b> points. Below are the ways to redeem your rewards.</span>
                <span>To earn more points, Host/Participate in events, Share your achievements/events in Social Media, Refer your friends</span>
            </Container>
            <div className="container py-1">
                <Row>
                    {cards.map((card, index) => (<div key={index} className="col-md-3 p-2">
                        <Card >
                            <Card.Body>
                                <Card.Img height="200" src={card.image}/>
                                <div style={{minHeight: 150, marginTop: 20}}>
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

export default Coupons;