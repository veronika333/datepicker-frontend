import React, { useState, useEffect } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import Event from "../Event/Event";
import EventCard from "../EventCard/EventCard";
import NewEventPost from "../NewEventPost/NewEventPost";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logout from "../Logout/Logout";
import DeleteConfirmation from "../Modals/DeleteConfirmation";

const Events = () => {
    const [post, setPost] = useState([]);
    let match = useRouteMatch();
    //Modal for delete
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

    const addLikeHandler = (_id) => {
        const nextPost = post.find((p) => p._id === _id);
        console.log(nextPost);
        const addLike = { ...nextPost };
        addLike.likes = addLike.likes + 1;
        
         //axios.patch(url[, data[, config]])
        let config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        axios.patch("http://localhost:8010/event/" + _id, addLike, config)
            .then((response) => {
                console.log(response)
                setPost(response.data);
            })
            .then(() => {
                return axios.get("http://localhost:8010/event/");
            })
            .catch((err) => {
                console.log(err)
            }
            )
        window.location.reload(false);
    }


    const deleteHandler = (_id) => {
        console.log(_id);

        const confirm = window.confirm(`Would you like to delete ${_id} ?`);
        if (confirm === true) {
            axios
                .delete("http://localhost:8010/event/" + _id)
                .then(() => {
                    return axios.get("http://localhost:8010/event");
                })
                .then((response) => {
                    //console.log(response.data);
                    setPost(response.data);
                });
        } else {
            return axios.get("http://localhost:8010/event");
        }
        window.location.reload(false);
    };

    // Update Postlist when the button on NewEventPost.js clicked
    const updateHandler = () => {
        window.location.reload(false);
    };

    const PostList = post.map((p) => {
        return (
            <div key={p._id}>
                <EventCard title={p.title} description={p.description} date={p.date} link={`${match.url}/${p._id}`} likes={p.likes} addLikeHandler={() => addLikeHandler(p._id)} handleShow={handleShow}
                    deleteHandler={() => deleteHandler(p._id)} />

                <DeleteConfirmation
                    show={show}
                    handleClose={handleClose}
                    deleteHandler={() => deleteHandler(p._id)}
                />
            </div>
        );
    });
    return (
        <>
            <Logout />
            <Container>
                <Row>
                    <Col sm>
                        <NewEventPost updateHandler={updateHandler} />
                    </Col>

                    <Col>
                        <Switch>
                            <Route path="/event/:eventId">
                                <Event />
                            </Route>
                            <Route path={match.path}>
                                <Col sm
                                >
                                    <h2 style={{
                                        textAlign: "center", margin: "20px"
                                    }}>LATEST EVENTS</h2>
                                </Col>
                                {PostList}
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Events;
