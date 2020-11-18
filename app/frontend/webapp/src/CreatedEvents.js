import React from 'react';
import {Button, Row,} from "react-bootstrap";
import {Link} from "react-router-dom";

const CreatedEvents = () => {
    return (
        <div>
            <Row>
                <Link to="/created_upcoming_events">
                    <Button variant="outline-primary" style={{margin: 30, padding: 30, minWidth: 500}}>Upcoming Events</Button>
                </Link>

                <Link to="/created_past_events">
                    <Button variant="outline-primary" style={{margin: 30, padding: 30, minWidth: 500}}>Past Events</Button>
                </Link>
            </Row>
        </div>
    );
};

export default CreatedEvents;