import React, { useState, useEffect } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import Event from "../Event/Event";
import EventCard from "../EventCard/EventCard";
import NewEventPost from "../NewEventPost/NewEventPost";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Logout from '../Logout/Logout';

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


    const addLikeHandler = (_id) => {
        const nextPost = post.map((p) => {
            if (p._id === _id) {
                return Object.assign({}, p, {
                    likes: p.likes + "♡"
                });
            } else {
                return p;
            }
        });
        console.log(nextPost);

        setPost(nextPost);


    }

    // Update Postlist when the button on NewEventPost.js clicked
    const updateHandler = () => {
        window.location.reload(false);
    }


    const PostList = post.map((p) => {
        return (
            <div key={p._id}>
                <EventCard title={p.title} description={p.description} date={p.date} link={`${match.url}/${p._id}`} likes={p.likes} addLikeHandler={() => addLikeHandler(p._id)} />

            </div>
        )
    });
    return (
        <Container>
            <Row>
                <Col >
                    <NewEventPost updateHandler={updateHandler} />
                    <Row className="justify-content-md-center">
                        <Logout />
                    </Row>
                </Col>
                <Col>
                    <Switch>
                        <Route path="/event/:eventId">
                            <Event />
                        </Route>
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
        </Container>
    );
};

export default Events;
