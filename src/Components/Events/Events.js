import React, { useState, useEffect } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
//import postinfo from "./postinfo";
//import Event from "../Event/Event";
import EventCard from "../EventCard/EventCard";
import NewEventPost from "../NewEventPost/NewEventPost";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import EventPopup from '../EventPopup/EventPopup';
import Logout from '../Logout/Logout';


const Events = () => {
    const [post, setPost] = useState([]);
    let match = useRouteMatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get("http://localhost:8010/event")
            .then((response) => {
                const posts = response.data;
                setPost(posts);
                console.log(posts);
            });
    }, []);

    // const removeHandler = (_id) => {
    //     console.log(_id);
    //     axios.delete('http://localhost:8010/event/' + _id)
    //         .then(() => {
    //             return axios.get("http://localhost:8010/event");
    //         })
    //         .then(response => {
    //             setPost(response.data);
    //         });
    // };



    // Update Postlist when the button on NewEventPost.js clicked
    const updateHandler = () => {
        window.location.reload(false);
    }

    const PostList = post.map((p) => {
        return (
            <div key={p._id} >
                <EventCard title={p.title} description={p.description} date={p.date} handleShow={handleShow} />

                <EventPopup handleClose={handleClose} show={show} />
            </div>
        )
    });
    return (
        <Container>
            <Row >
                <Col >
                    <NewEventPost updateHandler={updateHandler} />
                    <Row className="justify-content-md-center">
                        <Logout />
                    </Row>
                </Col>
                <Col>
                    <Switch>
                        {/* <Route path="/event/:eventId"> */}
                        <Route path={match.path}>
                            <Col style={{
                                margin: '20px'
                            }}>
                                <h1>LATEST EVENTS</h1>
                            </Col>
                            {PostList}
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container >
    );
};

export default Events;