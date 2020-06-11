import React, { useState, useEffect } from "react";
import {
  useRouteMatch,
  Route,
  useParams,
  Switch,
  Link,
} from "react-router-dom";
//import postinfo from "./postinfo";
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
  //let {_id} = useParams()
  let match = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:8010/event").then((response) => {
      const posts = response.data;
      setPost(posts);
      console.log(posts);
    });
  }, []);

  //Modal for delete
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <EventCard
          title={p.title}
          description={p.description}
          date={p.date}
          link={`${match.url}/${p._id}`}
          handleShow={handleShow}
          deleteHandler={() => deleteHandler(p._id)}
        />
        <DeleteConfirmation
          show={show}
          handleClose={handleClose}
          deleteHandler={() => deleteHandler(p._id)}
        />
      </div>
    );
  });
  return (
    <Container>
      <Row>
        <Col>
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
              <Col
                style={{
                  margin: "20px",
                }}
              >
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
