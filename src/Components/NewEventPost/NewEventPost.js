import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const NewEventPost = ({ updateHandler }) => {
    const [newEventPost, setnewEventPost] = useState({
        title: "",
        description: "",
        date: "",
    });

    //Passing the value of the input
    const changeValueHandler = (e) => {
        setnewEventPost({
            ...newEventPost,
            [e.target.name]: e.target.value,
        });
    };

    //Function for button
    const addEventHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8010/event", newEventPost).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <>
            <Row className="justify-content-md-center" style={{ marginTop: '5rem' }}>
                <Form onSubmit={addEventHandler} style={{ width: '20rem', background: 'white', margin: '20px', padding: '20px', borderRadius: '5px' }} >
                    <h3 className="middle">Add New Event</h3>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            onChange={changeValueHandler}
                            placeholder="Title"
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="textarea"
                            name="description"
                            onChange={changeValueHandler} placeholder="Description"
                        />
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            onChange={changeValueHandler}
                        />
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={updateHandler}>
                        Add Event
        </Button>
                </Form>
            </Row>
        </>
    );
};

export default NewEventPost;