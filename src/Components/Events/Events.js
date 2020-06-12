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
    axios.get("http://localhost:8010/event").then((response) => {
      const posts = response.data;
      setPost(posts);
      console.log(posts);
    });
  }, []);

  const addLikeHandler = (_id) => {
    const nextPost = post.map((p) => {
      if (p._id === _id) {
        return Object.assign({}, p, {
          //likes: p.likes + "♡"
          likes: p.likes + 1,
        });
      } else {
        return p;
      }
    });
    console.log(nextPost);

    //Save likes function
    //     const saveLikes = (newLike) => {
    //       const likes = post.map((like) => {
    //         if (newLike.likes === likes) {
    //           return Object.assign({}, newLike, {
    //             likes: newLike.likes},
    //             newLike.push({
    //               likes: likes
    //              })
    //             } else {
    //             return likes;
    //           }
    // })

    // };

    setPost(nextPost);
    //axios.patch(url[, data[, config]])
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .patch("http://localhost:8010/event/" + _id, nextPost, config)
      .then((response) => {
        //saveLikes();
        console.log(response);
        //setPost(nextPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          likes={p.likes}
          addLikeHandler={() => addLikeHandler(p._id)}
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
