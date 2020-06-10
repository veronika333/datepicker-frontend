
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReadMore from '../ReadMorePopup/ReadMore';
import useModal from '../Event/useModal';

const EventCard = ({ title, description, date, link, addLikeHandler, likes }) => {


    return (
        <Card style={{ margin: '10px' }} >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{date}</Card.Text>
                <Link to={link} className="linky">
                    Read More
      </Link>
                <p>

                    <Button onClick={addLikeHandler} >Like {likes}</Button>
                </p>

            </Card.Body>
        </Card>
    );
};

export default EventCard;