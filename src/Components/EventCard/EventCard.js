import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./EventCard.css";

const EventCard = ({ title, description, date, link, addLikeHandler, likes, handleShow, deleteHandler }) => {

    return (
        <Jumbotron style={{ background: 'white' }}>
            <Row className="justify-content-center">
                <Toast >
                    <Toast.Header closeButton={false}>
                        <strong className="mr-auto">Tomcat</strong>
                        <Button variant="secondary" onClick={deleteHandler} style={{ color: 'black' }}>Delete</Button>
                    </Toast.Header>
                    <Toast.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>{date}</Card.Text>
                        <Link to={link} className="linky">
                            <p>Read More</p>
                        </Link>
                        <Card.Text style={{ color: 'red', fontSize: '2rem' }}>
                            {/* <Button variant="outline-danger" onClick={addLikeHandler} >Like</Button> */}
                            {/* <i class="far fa-thumbs-up" onClick={addLikeHandler}></i> */}
                            <FontAwesomeIcon className="far fa-thumbs-up likes" icon={faThumbsUp} onClick={addLikeHandler} />
                            <span> {likes}</span>
                        </Card.Text>
                    </Toast.Body>
                </Toast>
            </Row>
        </Jumbotron>
    );
};

export default EventCard;
