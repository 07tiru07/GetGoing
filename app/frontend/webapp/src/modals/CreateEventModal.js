import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';


const CreateEventModal = ({showModal, showModalCallback, saveCallback}) => {
    const [show, setShow] = useState(showModal);
    const [state, setState] = useState({})
    const [errors, setErrors] = useState({})

    const handleClose = () => {
        setShow(false)
        showModalCallback(false)
    }

    const handleSave = () => {
        setShow(false)
        showModalCallback(false)
        saveCallback(state)
    }

    const handleChange = e => {
        let val = e.target.value
        if (e.target.value) {
            let ok = false
            switch (e.target.name) {
                case 'places':
                    val = parseInt(val)
                    ok = !!val
                    break;
                default:
                    ok = true
                    break;
            }
            setErrors({...errors, [e.target.name]: ok})
        } else
            setErrors({...errors, [e.target.name]: false})
        setState({...state, [e.target.name]: val});
    };

    const handleDatetimeChange = moment => {
        setState({...state, date: moment.format("MM/DD/YYYY")});
    };

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Create new event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="createEvent.title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="createEvent.date">
                    <Form.Label>Pick a date of event</Form.Label>
                    <Datetime name="date" dateFormat="MM\/DD\/YYYY" timeFormat={false}
                              onChange={handleDatetimeChange}
                              input={false}/>
                </Form.Group>
                <Form.Group controlId="createEvent.place">
                    <Form.Label>Type of event</Form.Label>
                    <Form.Control name="type" onChange={handleChange} as="select">
                        <option>Offline</option>
                        <option>Online</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="createEvent.location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control name="location" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="createEvent.seats">
                    <Form.Label>Seats left</Form.Label>
                    <Form.Control name="places" onChange={handleChange} type="number" defaultValue={0} min={1}
                                  max={250000}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateEventModal