import React, { useState, useEffect } from "react";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
//import postinfo from "./postinfo";
import Event from "../Event/Event";
import EventCard from "../EventCard/EventCard";
import NewEventPost from "../NewEventPost/NewEventPost";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Events = () => {
    const [post, setPost] = useState([]);
    let match = useRouteMatch();

    useEffect(() => {
        axios.get("http://localhost:8010/event")
            .then((response) => {
                const posts = response.data;
                setPost(posts);
                console.log(posts);
            });
    }, []);

    const removeHandler = (_id) => {
        console.log(_id);
        axios.delete('http://localhost:8010/event/' + _id)
            .then(() => {
                return axios.get("http://localhost:8010/event");
            })
            .then(response => {
                setPost(response.data);
            });
    };



    // Update Postlist when the button on NewEventPost.js clicked
    const updateHandler = () => {
        window.location.reload(false);
    }

    const PostList = post.map((p) => {
        return (
            <div key={p._id} >
                <EventCard title={p.title} description={p.description} date={p.date} link={`${match.url}/${p.id}`} remove={() => removeHandler(p.id)} />
                {/* <Card>
                    <Card.Body>
                        <Card.Title>Event: {p.title}</Card.Title>
                        <Card.Subtitle>The organizer is {p.username}</Card.Subtitle>
                        <br />
                        <Card.Subtitle className="mb-2 text-muted">The event will take place on the {p.date}</Card.Subtitle>
                        <Card.Text> Description of the event:{p.description}
                        </Card.Text>
                        <Button variant="outline-info"><Link className="links" to={`/${post._id}`}>Read more</Link></Button>
                        <Button variant="outline-info" onClick={() => removeHandler(p._id)}>Delete</Button>
                    </Card.Body>
                </Card> */}
            </div>
        )
    });
    return (
        <Container>
            <Row>
                <Col>
                    <NewEventPost updateHandler={updateHandler} />
                </Col>
                <Col>
                    <Switch>
                        <Route path="/event/:eventId">
                            <Event />
                        </Route>
                        <Route path={match.path}>
                            <div className="postsBox">
                                <br />
                                <h1>LATEST EVENTS</h1>
                                {PostList}
                            </div>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Events;