import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EventCard = ({ title, description, date, handleShow }) => {
    return (
        <Card style={{ margin: '10px' }} >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{date}</Card.Text>
                {/* <Link to={link} >Read More</Link> */}
                {/* <Button onClick={remove}>Remove Event</Button> */}
                <Button variant="success" onClick={handleShow}>Read More</Button>
            </Card.Body>
        </Card>
    );
};

export default EventCard;