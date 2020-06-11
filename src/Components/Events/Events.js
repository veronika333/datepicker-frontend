import React, { useState, useEffect } from "react";
import { useRouteMatch, Route, Switch, Link, useParams } from "react-router-dom";
//import postinfo from "./postinfo";
import Event from "../Event/Event";
import EventCard from "../EventCard/EventCard";
import NewEventPost from "../NewEventPost/NewEventPost";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Logout from '../Logout/Logout';

const postList = [{
    id: 1,
    img: "https://source.unsplash.com/daily",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
{
    id: 2,
    img: "https://source.unsplash.com/1600x900/?nature,water",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
{
    id: 3,
    img: "https://source.unsplash.com/1600x900/?city",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
];

const Events = () => {
    const [post, setPost] = useState([]);
    //const [likes, setLikes] = useState(0);
    let match = useRouteMatch();

    let { eventId } = useParams();

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
