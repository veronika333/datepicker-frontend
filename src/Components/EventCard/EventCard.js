import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';


const EventCard = ({ title, description, date, link, addLikeHandler, likes, handleShow, deleteHandler, avatar, userName }) => {

    return (
        <Jumbotron style={{ background: 'white' }}>
            <Row className="justify-content-center">
                <Toast >
                    <Toast.Header closeButton={false}>
                        <a href="/" className="avatar">
                            <img alt="avatar" src={avatar} style={{ width: '50px', marginRight: '5px' }} />
                        </a>
                        <strong className="mr-auto">{userName}</strong>
                        <Button variant="secondary" onClick={deleteHandler}>Delete</Button>
                    </Toast.Header>
                    <Toast.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>{date}</Card.Text>
                        <Link to={link} className="linky">
                            <p>Read More</p>
                        </Link>
                        <Card.Text style={{ color: 'red', fontSize: '2rem' }}>
                            <Button variant="outline-danger" onClick={addLikeHandler} >Like</Button>
                            {likes}</Card.Text>
                    </Toast.Body>
                </Toast>
            </Row>
        </Jumbotron>
    );
};

export default EventCard;
