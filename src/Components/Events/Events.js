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
import Logout from '../Logout/Logout';

const Events = () => {
    const [post, setPost] = useState([]);
    //const [likes, setLikes] = useState(0);
    let match = useRouteMatch();

    useEffect(() => {
        axios.get("http://localhost:8010/event")
            .then((response) => {
                const posts = response.data;
                setPost(posts);
                console.log(posts);
            });
    }, []);
    // useEffect(() => {
    //     axios.get("http://localhost:8010/event/:eventId").then((response) => {
    //       console.log(response.data)
    //     })
    //   })

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

    const addLikeHandler = (_id) => {
        /* axios.get('http://localhost:8010/event/' + _id)
            .then(res => {
                setPost(res.data);
                console.log(res.data);
            }); */

        for (let i = 0; i < post.length; i++) {
            let pos = post[i]
            console.log(pos);
            pos.likes = +1;
            return pos;
            //setPost({ this.props. });
        }
        /* 
                const postId = pos.find((p) => {
                    return p[i]._id === _id;
                });
                console.log(postId)
         */

        /* 
          const pos = { ...post[postId] }; // spread object
          pos.likes = +1; // add new like to post object
          const posts = [...post]; // take full array, spread it
          posts[postId] = pos; // and add updated post to back array
          setPost({
              posts
          }); */
    }

    /* const addLikeHandler = (_id) => {
        console.log(post[0]._id);
        setLikes(likes + 1);
    }
 */

    // Update Postlist when the button on NewEventPost.js clicked
    const updateHandler = () => {
        window.location.reload(false);
    }


    const PostList = post.map((p) => {
        return (
            <div key={p._id}>
                <EventCard title={p.title} description={p.description} date={p.date} link={`${match.url}/${p._id}`} addLikeHandler={addLikeHandler} />
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
