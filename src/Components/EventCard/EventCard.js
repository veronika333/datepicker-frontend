import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EventCard = ({ title, description, date, handleShow }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{date}</Card.Text>
                {/* <Link to={link} >Read More</Link> */}
                {/* <Button onClick={remove}>Remove Event</Button> */}
                <Button onClick={handleShow}>Read More</Button>
            </Card.Body>
        </Card>
    );
};

export default EventCard;