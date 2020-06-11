import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EventCard = ({ title, description, date, link, addLikeHandler, likes, handleShow, deleteHandler }) => {

    return (
        <Card style={{ margin: '10px' }} >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{date}</Card.Text>
                <Card.Text>{likes}</Card.Text>
                <Link to={link} className="linky">
                    Read More
      </Link>
                <p>
                    <Button onClick={addLikeHandler} >Like</Button>
                </p>

                <Button onClick={handleShow}>Delete</Button>
                <Button onClick={deleteHandler}>Test Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default EventCard;
